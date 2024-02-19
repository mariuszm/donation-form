import { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ChevronLeft from '@/assets/chevron-left.svg';
import { useDonationStore } from '@/store';

interface IProps {
  today: Date;
  onChange?: (numberOfMonths: number) => void;
}

export function MonthPicker({ today, onChange }: IProps) {
  const { dateUntil, setDateUntil, getMonthName } = useDonationStore();
  const [disablePrevMonth, setDisablePrevMonth] = useState(false);

  useEffect(() => {
    if (!dateUntil) {
      setDateUntil(today);
      return;
    }
    const numberOfMonths =
      (dateUntil.getFullYear() - today.getFullYear()) * 12 +
      (dateUntil.getMonth() - today.getMonth());
    setDisablePrevMonth(numberOfMonths <= 0);
    onChange?.(numberOfMonths);
  }, [dateUntil, setDateUntil, today, onChange]);

  const handleChangeMonth = useCallback(
    (index: -1 | 1) => () => {
      if (!dateUntil || (index === -1 && disablePrevMonth)) return;
      setDateUntil(
        new Date(dateUntil.getFullYear(), dateUntil.getMonth() + index, 1),
      );
    },
    [disablePrevMonth, dateUntil, setDateUntil],
  );

  return (
    <Container data-testid="month-picker">
      <ButtonPrev
        onClick={handleChangeMonth(-1)}
        className={disablePrevMonth ? 'disabled' : ''}
        data-testid="prev-month"
      />
      <DateWrapper>
        <Month>{getMonthName()}</Month>
        <Year>{dateUntil?.getFullYear()}</Year>
      </DateWrapper>
      <ButtonNext onClick={handleChangeMonth(1)} data-testid="next-month" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0 12px;
  height: 60px;
`;

const NavButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palettes.component.navButton.hover};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.palettes.component.navButton.active};
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

const ButtonPrev = styled(NavButton)`
  background: url(${ChevronLeft}) 0 0 no-repeat;
`;

const ButtonNext = styled(NavButton)`
  background: url(${ChevronLeft}) 0 0 no-repeat;
  transform: rotate3d(0, 0, 1, 180deg);
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Month = styled.div`
  font-family: ${({ theme }) => theme.fonts.rubik};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.purpleGray};
`;

const Year = styled.div`
  font-family: ${({ theme }) => theme.fonts.work};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.purpleGray};
`;
