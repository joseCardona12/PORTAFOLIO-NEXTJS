import { IResponseHomeView } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getHomeViewService(): Promise<IResponseHomeView> {
  const data = await fetchApi("http://localhost:4000/api/homeView");
  return data;
}

export async function putTitleSmallHomeViewService(
  titleNew: string
): Promise<IResponseHomeView> {
  const data = await fetchApi("http://localhost:4000/api/homeView", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(titleNew),
  });
  return data;
}
