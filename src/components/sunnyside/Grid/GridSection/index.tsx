/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './GridSection.styled';
import Link from 'next/link';

interface GridSectionProps {
  title: string;
  text: string;
  mobileImage: string;
  DesktopImage: string;
  isReverse?: boolean;
  color: 'yellow' | 'softRed';
}

export function GridSection({
  title,
  text,
  mobileImage,
  DesktopImage,
  isReverse = false,
  color,
}: GridSectionProps) {
  const [image, setImage] = useState(mobileImage);

  useEffect(() => {
    if (window.innerWidth > 576) {
      setImage(DesktopImage);
    } else {
      setImage(mobileImage);
    }
  });

  return (
    <section>
      <S.GridSection isReverse={isReverse}>
        <S.ImageArea>
          <Image src={image} layout="fill" objectFit="cover" alt="" />
        </S.ImageArea>

        <S.TextArea>
          <h2>{title}</h2>
          <p>{text}</p>

          <S.LearnMoreCTA color={color}>
            <Link href="#">Learn More</Link>
          </S.LearnMoreCTA>
        </S.TextArea>
      </S.GridSection>
    </section>
  );
}
