import { IResponseTechnology, ITechnology } from "./technologyInterface";

export interface ITechnologyProject {
    id:number,
    technologies: IResponseTechnology[] | undefined
}