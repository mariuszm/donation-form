import { fireEvent, render, screen } from '@/test/test-utils';

import { MonthPicker } from './month-picker';

describe('MonthPicker', () => {
  it('should display correct date', () => {
    const today = new Date();
    const { container } = render(<MonthPicker today={today} />);
    expect(container.firstChild).toHaveTextContent(
      today.toLocaleString('default', { month: 'long' }) + today.getFullYear(),
    );
  });

  it('should change months on button click', async () => {
    const today = new Date();
    render(<MonthPicker today={today} />);
    fireEvent.click(screen.getByTestId('next-month'));

    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    expect(screen.getByTestId('month-picker')).toHaveTextContent(
      nextMonth.toLocaleString('default', { month: 'long' }) +
        nextMonth.getFullYear(),
    );

    fireEvent.click(screen.getByTestId('prev-month'));
    expect(screen.getByTestId('month-picker')).toHaveTextContent(
      today.toLocaleString('default', { month: 'long' }) + today.getFullYear(),
    );
  });

  it('should allow only future months', async () => {
    const today = new Date();
    render(<MonthPicker today={today} />);

    fireEvent.click(screen.getByTestId('prev-month'));
    expect(screen.getByTestId('month-picker')).toHaveTextContent(
      today.toLocaleString('default', { month: 'long' }) + today.getFullYear(),
    );

    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    fireEvent.click(screen.getByTestId('next-month'));
    expect(screen.getByTestId('month-picker')).toHaveTextContent(
      nextMonth.toLocaleString('default', { month: 'long' }) +
        nextMonth.getFullYear(),
    );

    fireEvent.click(screen.getByTestId('prev-month'));
    expect(screen.getByTestId('month-picker')).toHaveTextContent(
      today.toLocaleString('default', { month: 'long' }) + today.getFullYear(),
    );
  });
});
