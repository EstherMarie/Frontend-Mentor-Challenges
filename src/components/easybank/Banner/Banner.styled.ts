import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const Banner = styled.section`
  background-color: ${({ theme }) =>
    theme.easybankLandingPage.colors.neutral.veryLightGray};

  .img-section {
    background-image: url('/images/easybank-landing-page/bg-intro-mobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: top;

    display: flex;
    justify-content: center;

    height: 105vw;

    position: relative;

    &__hero {
      width: 92%;
      height: 111vw;
      aspect-ratio: 19 / 6;

      position: absolute;
      top: -53px;
    }
  }

  .title-section {
    font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.light};

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > h1 {
      font-weight: ${({ theme }) =>
        theme.easybankLandingPage.typography.fontWeight.light};
      font-size: 35.5px;
      line-height: 42px;
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.darkBlue};

      width: 302px;
      margin-bottom: 14px;
    }

    & > p {
      width: 302px;

      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.014em;
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.neutral.grayishBlue};

      margin-bottom: 24.5px;
    }

    @media (min-width: 576px) {
      margin-top: 20px;

      & > h1,
      & > p {
        width: unset;
      }
    }
  }
`;
