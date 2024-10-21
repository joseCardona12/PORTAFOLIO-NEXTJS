"use client";
import { IProject, IResponseProject, IResponseTechnology, ITechnology } from "@/interfaces";
import "./projectStyles.css";
import { useRouter } from "next/navigation";
import { FaFolderClosed } from "react-icons/fa6";
import { useSearchProjectName } from "@/state-global/searchProjectName";

interface IProjectProps {
  projects: IResponseProject | null;
  technologies: IResponseTechnology[] | null;
}
export default function Project({ projects, technologies }: IProjectProps): React.ReactNode {
  const router = useRouter();
  const searchProjectName = useSearchProjectName((state)=>state.searchProjectName)
  const limit:number = 4;
  console.log("projects",);
  if (!projects?.projects) return null;

  const handleClickRedirect = (id:number):void =>{
    router.push(`/projects/${id}`);
  }
  return (
    <>
      {projects.projects.length > 0
      ?
      projects.projects.map((project: IProject, index: number) => (
        <div className="project" key={index} onClick={()=>handleClickRedirect(project.id)}>
          <div className="project-header">
            <img className="header-image" src={project.url_image} alt={`${project.name}${project.url_image}`} />
          </div>
          <div className="project-body">
            <h3 className="body-title">
            <FaFolderClosed />
            {project.name}
            </h3>
            <p className="body-description">{project.description}</p>
          </div>
          <div  className="project-footer">
            {technologies && technologies.length > 0
            ?
            technologies.map((technology: IResponseTechnology, indexResponse: number) =>(
              technology.technologies!.map((tech: ITechnology, indexTech: number) =>(
                <>
                {index === indexResponse
                ? <p key={indexTech}>{tech.name}</p>
                : null
                }
                </>
              ))
            ))
            : null
          }
          </div>
        </div>
      ))
      : <p>There are not projects...</p>
    }
    </>
  );
}
