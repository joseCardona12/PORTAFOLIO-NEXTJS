import { Request,Response } from "express"
import { container } from "tsyringe"
import TechnologyService from "../services/technologyService"

export default class TechnologyController {
    static async getTechnologiesByProject(req:Request,res:Response):Promise<void> {
        try{
            const id = req.params.id;
            if(!id){
                res.json({message: "Error. Is required all params"}).status(400);
                return;
            }
            const technologieProject = container.resolve(TechnologyService);
            const technologies = await technologieProject.getTechnologiesByProjectId(parseInt(id));
            res.json({message: "correct getTechnologiesByProject", technologies}).status(200);
        }catch(error:unknown){
            res.json({message: "Error with the getTechnologiesByProject", data: error}).status(500);
        }
    }
}