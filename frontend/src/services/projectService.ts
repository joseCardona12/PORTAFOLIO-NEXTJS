import { IProject, IResponseProject } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getProyectsService(): Promise<IResponseProject | null> {
  const data: IResponseProject | null = await fetchApi(
    "https://backend-portafolio-nextjs-1.onrender.com/api/projects", {
      cache: "no-store",
    }
  );
  return data;
}

export async function getProjectQuantityFilterService(quantity:number):Promise<IResponseProject | null>{
  const data: IResponseProject | null = await fetchApi(
    `http://localhost:4100/api/projects/${quantity}/filter`, {
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-store",
    }
  );
  return data;
}

export async function getProjectByPaginationService(page:number):Promise<IResponseProject | null>{
  const data: IResponseProject | null = await fetchApi(
    `http://localhost:4100/api/projects/${page}/pagination`, {
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-store",
    }
  );
  return data;
}