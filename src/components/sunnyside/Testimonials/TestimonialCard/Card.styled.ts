import styled from 'styled-components';

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 344px;

  .text {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.barlow};
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.005em;

    margin: 31px 0 33px;

    color: #5a636c;
  }

  .card_footer {
    .author {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.fraunces};
      font-weight: 900;
      font-size: 18px;
      line-height: 32px;
      text-align: center;

      margin-bottom: 11px;

      color: #23303e;
    }

    .occupation {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.barlow};
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: -0.01em;

      color: #a7abae;
    }
  }

  @media (min-width: 576px) {
    .text {
      font-size: 18px;
      line-height: 32px;

      margin: 58px 0 71px;
    }

    .card_footer {
      .author {
        font-size: 18px;
        line-height: 32px;

        margin-bottom: unset;
      }

      .occupation {
        font-size: 14px;
        line-height: 32px;
      }
    }
  }
`;
