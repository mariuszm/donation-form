export const getMonthName = (date: Date | null) =>
  date?.toLocaleString('default', { month: 'long' }) || null;

export const formatSelectedDate = (date: Date | null) =>
  (getMonthName(date) || '') + date?.getFullYear();

export const getHumanDate = (date: Date) =>
  formatSelectedDate(date)
    .match(/[a-zA-Z]+|[0-9]+/g)
    ?.join(' ');
