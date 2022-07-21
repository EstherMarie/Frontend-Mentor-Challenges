import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const Banner = styled.section`
  background-color: ${({ theme }) => theme.easybankLandingPage.colors.neutral.veryLightGray};

  .banner__img-section {
    width: 100vw;
    position: relative;
    height: 50vh;
    top: -60px;
    left: -22px;
  }

  .banner__title-section {
    position: relative;
    top: -90px;

    font-weight: ${({ theme }) => theme.easybankLandingPage.typography.fontWeight.light};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > h1 {
      font-weight: ${({ theme }) => theme.easybankLandingPage.typography.fontWeight.light};
      font-size: 35.5px;
      line-height: 42px;
      color: ${({ theme }) => theme.easybankLandingPage.colors.primary.darkBlue};

      margin-bottom: 14px;
    }

    & > p {
      width: 302px;
      
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.014em;
      color: ${({ theme }) => theme.easybankLandingPage.colors.neutral.grayishBlue};

      margin-bottom: 24.5px;
    }
  }
  
`
