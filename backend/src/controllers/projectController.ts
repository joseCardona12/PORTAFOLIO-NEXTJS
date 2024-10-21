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

    static async getProjectByQuantityFilter(req:Request, res:Response):Promise<void>{
        try{
            const {quantity} = req.params;
            if(!quantity){
                res.json({message: "Error. Is required all params", data: "error"}).status(400);
                return;
            }
            const projectService = container.resolve(ProjectService);
            const quantityProjects = await projectService.getProjectByQuantity(parseInt(quantity));
            res.json({message: "correct getProjectByIdFilter", quantityProjects}).status(200);         
        }catch(error:unknown){
            res.json({message: "Error with the getProjectByIdFilter", data: error}).status(500);
        }
    }
}