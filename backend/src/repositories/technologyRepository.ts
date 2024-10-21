import { injectable } from "tsyringe";
import TechnologieModel from "../models/technologieModel";
import ProjectModel from "../models/projectModel";
import ProjectTechnologieModel from "../models/projectTechnologieModel";

@injectable()
export default class TechnologyRepository{
    // async getTechnologies():Promise<TechnologieModel[] | null>{
        
    // };
    async getTechnologiesByProjectId(id:number):Promise<TechnologieModel[] | null>{
        const projectTechnologies = await ProjectTechnologieModel.findAll({where: 
            {project_id: id},
            attributes: ["technology_id"],
        });

        const technologiesId: number[] = projectTechnologies.map(pt => pt.technology_id);
        const technologies = await TechnologieModel.findAll({
            where: {id:technologiesId}
        })
        console.log("technologies", technologies);
        return technologies;
    }
}