import { inject, injectable } from "tsyringe";
import ProjectRepository from "../repositories/projectRepository";
import { IProject } from "../interfaces/projectInterface";

@injectable()
export default class ProjectService{
    constructor(@inject(ProjectRepository) private projectRepository:ProjectRepository){}
    async getProjects(): Promise<IProject[] | null> {
        return await this.projectRepository.getProjects();
    }

    async getProjectByQuantity(quantity:number):Promise<IProject[] | null>{
        const quantityProject: IProject[] = [];
        const projects: IProject[] | null = await this.projectRepository.getProjects();
        if(!projects) return null;
        projects.map((project:IProject, index:number)=>{
            if(index < quantity){
                quantityProject.push(project);
            }
        });
        return quantityProject;
    }
}