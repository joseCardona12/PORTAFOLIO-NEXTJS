import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IDarkModeState {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const useDarkMode = create<IDarkModeState>()((set) => ({
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),
}));
