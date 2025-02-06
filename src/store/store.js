import { create } from "zustand"; // создание хранилища состояния

export const useStore = create((set) => ({
  date: null, // изначальная дата
  calendarOpen: false, // при инициализации календарь закрыт
  selectedCurrency: "UAH", // изначальная валюта
  
  setDate: (newDate) => set({ date: newDate }), // сохранение выбранной даты
  
  toggleCalendar: () => set((state) => ({ calendarOpen: !state.calendarOpen })), // состояние календаря открыт/закрыт
  
  setSelectedCurrency: (currency) => set({ selectedCurrency: currency }), // прием значения валюты и обновление состояние
}));
