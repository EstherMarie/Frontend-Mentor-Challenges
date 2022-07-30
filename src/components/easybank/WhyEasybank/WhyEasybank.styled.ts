import styled from "styled-components";

export const WhyEasybank = styled.section`
  background-color: ${({theme}) => theme.easybankLandingPage.colors.neutral.lightGrayishBlue};
  padding: 61px 0 63px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    text-align: center;

    margin-bottom: 33px;

    h2 {
      font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.light};
      font-size: 28px;
      line-height: 33px;
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.darkBlue};
      width: 166px;
    }

    p {
      font-size: 13px;
      line-height: 23px;
      letter-spacing: 0.014em;
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.neutral.grayishBlue};
      letter-spacing: 0.014em;
      width: 301px;
    }
  }

  .card_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    .card_section {
      flex-direction: row;
      flex-wrap: wrap;
    }  
  }
 
  @media (min-width: 992px) {
    padding: 93px 0 102px;

    .content {
      text-align: left;
      align-items: flex-start;
      margin-bottom: 82px;

      h2 {
        font-size: 38.2px;
        line-height: 45px;
        width: unset;
      }

      p {
        font-size: 17px;
        line-height: 28px;
        width: 682px;
      }
    }

    .card_section {
      flex-direction: row;
      justify-content: space-between;
      gap: 25px;
      
    }
  }

  @media (min-width: 1200px) {
    .card_section {
      flex-wrap: nowrap;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
`