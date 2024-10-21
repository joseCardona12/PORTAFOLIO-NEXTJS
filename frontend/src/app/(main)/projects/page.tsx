import { SectionProjects } from "@/components/molecules";
import { IResponseProject, IResponseTechnology } from "@/interfaces";
import { ITechnologyProject } from "@/interfaces/technologyProject";
import { getTechnologiesByProjectService } from "@/services";
import { getProyectsService } from "@/services/projectService";

export default async function ProjectView() {
  const projects: IResponseProject | null = await getProyectsService();
  const quantityProject: number = projects?.projects?.length || 0;
  const technologiesByProject: IResponseTechnology[] | null = await getTechnologiesByProjectService(quantityProject);
  return <SectionProjects projects={projects} technologies={technologiesByProject} />;
}
