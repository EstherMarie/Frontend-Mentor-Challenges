import * as S from './Banner.styled';
import { Container } from '../Container/Container.styled';
import { CallToAction } from '../CallToAction';
import Image from 'next/image';

export function Banner() {
  return (
    <S.Banner className="banner">
      <S.Wrapper>
        <div className="img-section">
          <div className="img-section__hero">
            <Image
              src="/images/easybank-landing-page/image-mockups.png"
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <Container>
          <div className="title-section">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <CallToAction />
          </div>
        </Container>
      </S.Wrapper>
    </S.Banner>
  );
}
