import { inject, injectable } from "tsyringe";
import ProjectRepository from "../repositories/projectRepository";
import { IProject } from "../interfaces/projectInterface";

@injectable()
export default class ProjectService{
    constructor(@inject(ProjectRepository) private projectRepository:ProjectRepository){}
    async getProjects(): Promise<IProject[] | null> {
        return await this.projectRepository.getProjects();
    }
}