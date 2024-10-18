"use client";
import { IProject, IResponseProject } from "@/interfaces";
import "./projectStyles.css";
import { Button } from "../atoms";
import { useRouter } from "next/navigation";

interface IProjectProps {
  projects: IResponseProject | null;
}
export default function Project({ projects }: IProjectProps): React.ReactNode {
  const router = useRouter();
  const limit:number = 4;
  if (!projects) return null;

  const handleClickRedirect = (id:number):void =>{
    router.push(`/projects/${id}`);
  }
  return (
    <>
      {projects.projects.length > 0
      ?
      projects.projects.map((project: IProject, index: number) => (
        <div className="project" key={index} onClick={()=>handleClickRedirect(project.id)}>
          <img className="project-image" src={project.url_image} alt={`${project.name}${project.url_image}`} />
          <div className="project-info">
            <div className="">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="info-bottom">
              <Button
              text="See more"
              onClick={() => window.open(project.url_image, "_blank")}
              />
            </div>
          </div>
        </div>
      ))
      : <p>There are not projects...</p>
    }
    </>
  );
}
