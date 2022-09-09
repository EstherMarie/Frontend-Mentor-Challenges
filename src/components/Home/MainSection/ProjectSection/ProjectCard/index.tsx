import Image from 'next/image';
import Link from 'next/link';
import { ProjectInfo } from '../../../../../types/ProjectInfo';
import * as S from './ProjectCard.styled';

export function ProjectCard({ image, link, title, difficulty, description, status }: ProjectInfo) {
  return (
    <Link href={link}>
      <S.ProjectCard tabIndex={0}>
        <div className={`card_image ${status}`}>
          <Image
            src={image}
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='top'
          />
        </div>

        <div className="card_info">
          <h3>{title}</h3>
          <div className={`card_difficulty ${difficulty.toLowerCase()}`}>{difficulty}</div>
          {description &&
            <p>{description}</p>
          }
        </div>
      </S.ProjectCard>
    </Link>
  );
}