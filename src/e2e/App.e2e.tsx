import { expect, test } from '@playwright/experimental-ct-react';

import { formatSelectedDate, getHumanDate } from '@/helpers/date';

test('Form should update with correct values', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const today = new Date();
  const inputAmount = page.getByPlaceholder('0.00');
  const monthPicker = page.getByTestId('month-picker');
  const buttonPrevMonth = page.getByTestId('prev-month');
  const buttonNextMonth = page.getByTestId('next-month');
  const total = page.getByTestId('total');
  const infobox = page.getByTestId('infobox');

  // basic values
  await expect(inputAmount).toBeEmpty();
  await expect(monthPicker).toHaveText(formatSelectedDate(today));
  await expect(buttonPrevMonth).toHaveCSS('pointer-events', 'none');
  await expect(total).toHaveText('$0.00');
  await expect(infobox).toHaveText(
    `You will be sending $0.00 every month, until ${getHumanDate(today)}. Thank you!`,
  );

  // set InputAmount value
  await inputAmount.fill('1234.5678');
  await expect(inputAmount).toHaveValue('1,234.56');
  await expect(infobox).toHaveText(
    `You will be sending $1,234.56 every month, until ${getHumanDate(today)}. Thank you!`,
  );

  // click 9x on ButtonNext (MonthPicker) (to switch 9 months forward)
  const clickCount = 9;
  for (let x = 0; x < clickCount; x++) {
    buttonNextMonth.click();
  }

  const nextMonth = new Date(
    today.getFullYear(),
    today.getMonth() + clickCount,
    1,
  );
  await expect(buttonPrevMonth).not.toHaveCSS('pointer-events', 'none');
  await expect(monthPicker).toHaveText(formatSelectedDate(nextMonth));
  await expect(total).toHaveText('$11,111.03');
  await expect(infobox).toHaveText(
    `You will be sending $1,234.56 every month, until ${getHumanDate(nextMonth)}. Thank you!`,
  );

  // switch 9 months backward to original date
  for (let x = 0; x < 9; x++) {
    await buttonPrevMonth.click();
  }
  await expect(inputAmount).toHaveValue('1,234.56');
  await expect(monthPicker).toHaveText(formatSelectedDate(today));
  await expect(total).toHaveText('$0.00');
  await expect(infobox).toHaveText(
    `You will be sending $1,234.56 every month, until ${getHumanDate(today)}. Thank you!`,
  );

  await expect(buttonPrevMonth).toHaveCSS('pointer-events', 'none');
});
