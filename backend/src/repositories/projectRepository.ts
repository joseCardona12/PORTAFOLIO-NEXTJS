import { inject, injectable } from "tsyringe";
import ProjectModel from "../models/projectModel";
@injectable()
export default class ProjectRepository {
    async getProjects(): Promise<ProjectModel[] | null>{
        return await ProjectModel.findAll();
    }
}
