export interface ITechnology{
    id:number | undefined
    name:string | undefined
}
export interface IResponseTechnology{
    message: string | undefined,
    technologies:ITechnology[] | undefined
}