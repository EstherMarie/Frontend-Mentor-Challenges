import Image from 'next/image';
import * as S from './Card.styled';

interface TestimonialCardProps {
  image: string;
  text: string;
  name: string;
  occupation: string;
}

export function TestimonialCard({
  image,
  text,
  name,
  occupation,
}: TestimonialCardProps) {
  return (
    <S.TestimonialCard>
      <Image
        src={image}
        width={75}
        height={75}
        alt=""
        style={{ borderRadius: '50%' }}
      />
      <p className="text">{text}</p>

      <div className="card_footer">
        <p className="author">{name}</p>
        <p className="occupation">{occupation}</p>
      </div>
    </S.TestimonialCard>
  );
}
