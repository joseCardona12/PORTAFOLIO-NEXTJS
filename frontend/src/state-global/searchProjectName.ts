import { create } from "zustand";

export interface ISearchProjectNamesState {
  searchProjectName: string;
  setSearchProjectName: (value: string) => void;
}

export const useSearchProjectName = create<ISearchProjectNamesState>()((set) => ({
  searchProjectName: "",
  setSearchProjectName: (value) => set({ searchProjectName: value }),
}));
