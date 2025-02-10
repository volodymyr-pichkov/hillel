import { create } from "zustand";

export const useStore = create((set) => ({
  date: null,
  selectedCurrency: "USD",
  setDate: (newDate) => set({ date: newDate }),
  setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
}));
