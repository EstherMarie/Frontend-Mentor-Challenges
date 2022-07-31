import Image from 'next/image';
import * as S from './Card.styled';

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

export function Card({ icon, title, text }: CardProps) {
  return (
    <S.Card>
      <Image src={icon} alt="" width={65} height={65} />

      <h3>{title}</h3>
      <p>{text}</p>
    </S.Card>
  );
}
