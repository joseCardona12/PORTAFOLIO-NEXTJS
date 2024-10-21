"use client";
import { IResponseProject, IResponseTechnology } from "@/interfaces";
import "./sectionStyles.css";
import Project from "@/components/Project/Project";
import PaginationNumber from "../PaginationNumber/PaginationNumber";
import { InputSearch, Loading } from "@/components/atoms";
import { useProjectsPagination } from "@/state-global/projectPagination";
import { useState } from "react";

interface ISectionProjectsProps {
  projects: IResponseProject | null;
  technologies: IResponseTechnology[] | null;
}
export default function SectionProjects({
  projects,
  technologies
}: ISectionProjectsProps): React.ReactNode {
  const projectsPagination = useProjectsPagination((state)=>state.projects);
  const [loading,setLoading] = useState<boolean>(false);
  return (
    <section className="section-projects">
      {loading && <Loading/>}
      <div className="project-title">
        <h2 className="title">Projects</h2>
        <div className="title-right">
          <InputSearch projects={projects} />
          <PaginationNumber/>
        </div>
      </div>
      <div className="projects-content">
        {projects && projects?.projects.length > 0 
        ?
        <Project projects={projectsPagination?.message ? projectsPagination : projects} technologies={technologies} />
        :
        <p>There are not projects</p>
      }
      </div>
    </section>
  );
}
