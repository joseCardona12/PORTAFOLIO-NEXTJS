import { create } from "zustand";

export interface IDarkModeState {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const useDarkMode = create<IDarkModeState>()((set) => ({
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),
}));
