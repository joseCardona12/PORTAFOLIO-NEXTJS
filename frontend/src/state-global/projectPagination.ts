import { IProject, IResponseProject } from "@/interfaces";
import { create } from "zustand";

export interface IProjectsPaginationState {
  projects: IResponseProject | null;
  setProjects: (value: IResponseProject) => void;
}

export const useProjectsPagination = create<IProjectsPaginationState>()((set) => ({
    projects:{
      message: "",
      projects: [{
        id: 0,
        name: "",
        description: "",
        url_repository: "",
        url_deploy: "",
        url_image: ""
      }]
    },
  setProjects: (value) => set({ projects: value }),
}));
