import { IProject } from "@/interfaces";

export function searchProjects(projectToSearch:string, projects: IProject[] | undefined):IProject | undefined{
    if(!projects)return;
    return projects.find((project:IProject)=>project.name.toLowerCase().includes(projectToSearch.toLocaleLowerCase()))
}
