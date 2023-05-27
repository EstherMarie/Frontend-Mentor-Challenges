import Image from 'next/image';
import Link from 'next/link';
import { NotionProjectProperties } from '../../../../../types/NotionPageObject';
import * as S from './ProjectCard.styled';

export function ProjectCard({ image, path, title, difficulty, status }: NotionProjectProperties) {
  return (
    <Link href={path}>
      <S.ProjectCard tabIndex={0}>
        <div className={`card_image ${status}`}>
          <Image
            src={image}
            alt=''
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
        </div>

        <div className="card_info">
          <h3>{title}</h3>
          <div className={`card_difficulty ${difficulty.toLowerCase()}`}>{difficulty}</div>
        </div>
      </S.ProjectCard>
    </Link>
  );
}
