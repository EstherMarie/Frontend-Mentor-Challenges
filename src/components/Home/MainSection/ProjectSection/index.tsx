/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import * as S from "./ProjectSection.styled";

export function ProjectSection() {
  return (
    <S.ProjectSection>
      <h2>Projects</h2>
      <div>
        <ul>
          <li>
            <Link href="/advice-generator-app">
              <a>Advice Generator App</a>
            </Link>
            <Link href="/easybank-landing-page">
              <a>Easybank Landing Page</a>
            </Link>
          </li>
        </ul>
      </div>
    </S.ProjectSection>
  );
}
