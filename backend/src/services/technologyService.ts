import { inject, injectable } from "tsyringe";
import TechnologyRepository from "../repositories/technologyRepository";
import { ITechnology } from "../interfaces/technologyInterface";

@injectable()
export default class TechnologyService{
    constructor(@inject(TechnologyRepository) private technologyRepository:TechnologyRepository){}
    async getTechnologiesByProjectId(id:number):Promise<ITechnology[] | null>{
        return await this.technologyRepository.getTechnologiesByProjectId(id);
    }
}