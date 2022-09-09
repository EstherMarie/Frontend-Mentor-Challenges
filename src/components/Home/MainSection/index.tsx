import { Container } from "../Container";
import * as S from "./HomeMain.styled";
import { ProjectSection } from "./ProjectSection";

export function HomeMain() {
  return (
    <S.Main>
      <Container>
        <h1>Frontend Mentor Challenges</h1>
        <ProjectSection />
      </Container>
    </S.Main>
  );
}
