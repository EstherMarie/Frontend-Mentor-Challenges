import * as S from './Banner.styled';
import { Container } from '../Container/Container.styled';
import { CallToAction } from '../CallToAction';
import Image from 'next/image';

export function Banner() {
  return (
    <S.Banner className="banner">
      <Container>
        <S.Content>
          <div className="banner__img-section">
            <Image
              src="/images/easybank-landing-page/bg-mobile.png"
              alt=""
              layout="fill"
            />
          </div>
          <div className="banner__title-section">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <CallToAction />
          </div>
        </S.Content>
      </Container>
    </S.Banner>
  );
}
