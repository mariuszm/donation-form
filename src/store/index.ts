import { create } from 'zustand';

import { getMonthName } from '@/helpers/date';

interface IDonationStore {
  dateUntil: Date | null;
  setDateUntil: (date: Date) => void;
  getMonthName: () => string | null;
}

export const useDonationStore = create<IDonationStore>((set, get) => ({
  dateUntil: null,
  setDateUntil(date: Date) {
    set(state => ({
      ...state,
      dateUntil: date,
    }));
  },
  getMonthName() {
    return getMonthName(get().dateUntil);
  },
}));
