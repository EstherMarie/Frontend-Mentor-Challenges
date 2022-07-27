import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;

  text-align: center;
  padding: 18px 0;

  h3 {
    font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.light};    
    color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.darkBlue};
    font-size: 18px;
    line-height: 21px;
  }

  p {
    font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.regular};    
    color: ${({ theme }) =>
      theme.easybankLandingPage.colors.neutral.grayishBlue};
      font-size: 14px;
      line-height: 23px;
  }

  @media (min-width: 992px) {
    text-align: left;
    align-items: flex-start;
    gap: unset;

    h3 {
      margin-top: 42px;
      margin-bottom: 27px;

      font-size: 23px;
      line-height: 27px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`