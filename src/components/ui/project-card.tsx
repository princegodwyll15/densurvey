import { Project } from "@/components/data/types";
import { Icon } from "./icons";
import Image from "next/image";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a className="project-card" href={`/works/${project.slug}`}>
      <div className="project-image">
        <Image src={project.image} alt="" height={300} width={400} />
        <span className="project-count">0{index + 1}</span>
        <span className="view-project">
          View project <Icon name="arrow" />
        </span>
      </div>
      <div className="project-meta">
        <span className="tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>
          {project.location}
          <span />
          {project.year}
        </p>
      </div>
    </a>
  );
}
