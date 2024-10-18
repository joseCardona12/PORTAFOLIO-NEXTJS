import { IProject, IResponseProject } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getProyectsService(): Promise<IResponseProject | null> {
  const data: IResponseProject | null = await fetchApi(
    "http://localhost:4000/api/projects", {
      cache: "no-store",
    }
  );
  return data;
}
