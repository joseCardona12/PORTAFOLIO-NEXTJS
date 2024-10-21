import { IResponseTechnology } from "@/interfaces";
import { ITechnologyProject } from "@/interfaces/technologyProject";
import { fetchApi } from "@/utils/fetchApi";
import { url } from "inspector";


export async function getTechnologiesByProjectService(quantityProject:number):Promise<IResponseTechnology[] | null>{
    const urls:string[] = [];
    const responseBack: IResponseTechnology[] = [];
    
    for(let i = 1; i <= quantityProject; i++){
        urls.push(`https://backend-portafolio-nextjs-1.onrender.com/api/technologies/${i}/projects`);
    }
    console.log(urls);
    try{
        const fetchResponses = urls.map((url:string)=>fetch(url, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            cache: "no-cache",
        }));
        for await (const response of fetchResponses){
            if(!response.ok){
                console.error(`Error en la URL ${response.url}: ${response.statusText}`);
                continue;
            }
            const data: IResponseTechnology = await response.json();
            responseBack.push(data);
        }
    console.log("response back", responseBack.map(r=>r.technologies));
    }catch(error:unknown){
        console.log("Errot to get technologies", error);
        return null;
    };
    return responseBack;
}