import { IFetchApi } from "@/interfaces/fetchApiInterface";

export async function fetchApi(url:string, options?: IFetchApi):Promise<any>{
    try{
        const response = await fetch(url,options);
        if(!response.ok)throw new Error("Error with the response");
        return await response.json();
    }catch(error:unknown){
        return ({message: "Error with the function fetchApi"})
    }
}