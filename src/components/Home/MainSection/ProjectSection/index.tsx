import { NotionProjectProperties } from '../../../../types/NotionPageObject';
import { ProjectCard } from "./ProjectCard";
import * as S from "./ProjectSection.styled";

interface ProjectSectionProps {
  projectList: NotionProjectProperties[];
}

export function ProjectSection({ projectList }: ProjectSectionProps) {
  return (
    <S.ProjectSection>
      <h2>Projects</h2>
      <div className="project_display">
        {projectList.map(({ id, image, path, title, difficulty, status }) => (
          <ProjectCard
            key={id}
            image={image}
            path={path}
            title={title}
            difficulty={difficulty}
            status={status}
          />
        ))}
      </div>
    </S.ProjectSection>
  );
}
