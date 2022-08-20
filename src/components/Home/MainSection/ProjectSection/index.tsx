import { projectList } from "../../../../data/projectList";
import { ProjectCard } from "./ProjectCard";
import * as S from "./ProjectSection.styled";

export function ProjectSection() {
  return (
    <S.ProjectSection>
      <h2>Projects</h2>
      <div className="project_display">
        {projectList.map(({ id, image, link, title, difficulty, description, status }) => (
          <ProjectCard
            key={id}
            image={image}
            link={link}
            title={title}
            difficulty={difficulty}
            description={description}
            status={status}
          />
        ))}
      </div>
    </S.ProjectSection>
  );
}
