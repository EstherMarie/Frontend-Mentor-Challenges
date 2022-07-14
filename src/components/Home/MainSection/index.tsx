import * as S from "./HomeMain.styled";
import { ProjectSection } from "./ProjectSection";

export function HomeMain() {
  return (
    <S.Main>
      <h1>Frontend Mentor Challenges</h1>
      <ProjectSection />
    </S.Main>
  );
}
