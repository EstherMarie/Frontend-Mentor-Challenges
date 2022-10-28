import { NotionProjectProperties } from '../../../types/NotionPageObject';
import { Container } from "../Container";
import * as S from "./HomeMain.styled";
import { ProjectSection } from "./ProjectSection";

interface HomeMainProps {
  projects: NotionProjectProperties[];
}

export function HomeMain({ projects }: HomeMainProps) {
  return (
    <S.Main>
      <Container>
        <h1>Frontend Mentor Challenges</h1>
        <ProjectSection projectList={projects} />
      </Container>
    </S.Main>
  );
}
