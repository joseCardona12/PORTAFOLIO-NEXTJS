import { IProject } from "@/interfaces";
import { create } from "zustand";

export interface ISearchProjectState {
  searchProject: IProject;
  setSearchProject: (value: IProject) => void;
}

export const useSearchProject = create<ISearchProjectState>()((set) => ({
  searchProject: {
    id: 0,
    name: "",
    description: "",
    url_repository: "",
    url_deploy: "",
    url_image: "",
  },
  setSearchProject: (value) => set({ searchProject: value }),
}));
