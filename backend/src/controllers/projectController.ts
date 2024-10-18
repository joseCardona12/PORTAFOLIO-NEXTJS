import { Response, Request } from "express"
import { container } from "tsyringe"
import ProjectService from "../services/projectService"

export default class ProjectController{
    static async getProjects(req:Request,res:Response):Promise<void>{
        try{
            const projectService = container.resolve(ProjectService);
            const projects = await projectService.getProjects();
            res.json({message: "correct getProjects", projects}).status(200);
        }catch(error:unknown){
            res.json({message: "Error with the getProjects", data: error}).status(500);
        }
    }
}