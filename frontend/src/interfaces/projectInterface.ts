export interface IProject {
  id: number;
  name: string;
  description: string;
  url_repository: string;
  url_deploy: string;
  url_image: string;
}

export interface IResponseProject {
  message: string;
  projects: IProject[];
}
