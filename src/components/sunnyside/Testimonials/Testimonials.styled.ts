import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  background-color: #fffbf8;
  padding: 58px 0 91px;

  h2 {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.fraunces};
    font-weight: 900;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.2em;

    text-transform: uppercase;
    margin-bottom: 58px;

    color: #a7abae;
  }

  @media (min-width: 768px) {
    padding: 157px 0 164px;

    h2 {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.36em;

      margin-bottom: 75px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-inline: auto;
`;

export const CardWrapper = styled.div`
  display: grid;
  gap: 66px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }
`;
