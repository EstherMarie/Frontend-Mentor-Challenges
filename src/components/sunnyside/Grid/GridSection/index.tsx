/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './GridSection.styled';
import Link from 'next/link';

interface GridSectionProps {
  title?: string;
  text?: string;
  mobileImage?: string;
  desktopImage?: string;
  isReverse?: boolean;
  color?: 'yellow' | 'softRed';
  lastRow?: boolean;
}

export function GridSection({
  title,
  text,
  mobileImage,
  desktopImage,
  isReverse = false,
  color,
  lastRow = false,
}: GridSectionProps) {
  const [image, setImage] = useState(mobileImage);

  useEffect(() => {
    if (window.innerWidth > 576) {
      setImage(desktopImage);
    } else {
      setImage(mobileImage);
    }
  });

  return (
    <>
      {lastRow == false ? (
        <section>
          <S.GridSection isReverse={isReverse}>
            <S.ImageArea>
              <Image src={image!} layout="fill" objectFit="cover" alt="" />
            </S.ImageArea>

            <S.TextArea>
              <h2>{title}</h2>
              <p>{text}</p>

              <S.LearnMoreCTA color={color!}>
                <Link href="#">Learn More</Link>
              </S.LearnMoreCTA>
            </S.TextArea>
          </S.GridSection>
        </section>
      ) : (
        <S.GridSection>
          <S.LastRowGrid className="graphicDesignGrid">
            <div className="content">
              <h2>Graphic Design</h2>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential
                client&apos;s attention.
              </p>
            </div>
          </S.LastRowGrid>

          <S.LastRowGrid className="photograpyGrid">
            <div className="content">
              <h2>Photography</h2>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </S.LastRowGrid>
        </S.GridSection>
      )}
    </>
  );
}
