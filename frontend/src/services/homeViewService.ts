import { IResponseHomeView } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getHomeViewService(): Promise<IResponseHomeView> {
  const data = await fetchApi("https://backend-portafolio-nextjs-1.onrender.com/api/homeView");
  return data;
}

export async function putTitleSmallHomeViewService(
  titleNew: string
): Promise<IResponseHomeView> {
  const data = await fetchApi("https://backend-portafolio-nextjs-1.onrender.com/api/homeView", {
    method: "PATCH",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(titleNew),
  });
  return data;
}
