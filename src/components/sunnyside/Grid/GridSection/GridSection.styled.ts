import styled from 'styled-components';

interface StyledGridProps {
  isReverse?: boolean;
}

interface StyledCTAProps {
  color: 'yellow' | 'softRed';
}

export const GridSection = styled.div<StyledGridProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fffbf8;

  max-width: 2460px;
  margin-inline: auto;

  @media (min-width: 768px) {
    flex-direction: ${(props) =>
      props.isReverse === true ? 'row-reverse' : 'row'};
  }
`;

export const TextArea = styled.div`
  height: 437px;
  padding: 63px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.fraunces};
    font-weight: 900;
    font-size: 34px;
    line-height: 39px;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 30px;

    color: ${({ theme }) =>
      theme.sunnysideLandingPage.colors.neutral.veryDarkDesaturatedBlue};
  }

  p {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.barlow};
    font-weight: 600;
    font-size: 18.5px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.015em;
    margin-bottom: 41px;

    color: ${({ theme }) =>
      theme.sunnysideLandingPage.colors.neutral.veryDarkGrayishBlue};
  }

  @media (min-width: 768px) {
    width: 50%;
    padding-inline: 5%;

    h2 {
      font-size: 43px;
      line-height: 49px;
      text-align: left;
      margin-bottom: 30px;
    }

    p {
      font-size: 18.3px;
      line-height: 30px;
      text-align: left;
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1200px) {
    padding-inline: 10%;
  }
`;

export const LearnMoreCTA = styled.div<StyledCTAProps>`
  font-family: ${({ theme }) =>
    theme.sunnysideLandingPage.typography.fontFamily.fraunces};
  font-weight: 900;
  font-size: 17px;
  line-height: 49px;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
  margin-inline: auto;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${(props) =>
      props.color === 'yellow' ? '#fbf1be' : '#FBD6D4'};
    width: 110%;
    height: 15px;
    border-radius: 9px;
    bottom: 8px;
    left: -6px;
    z-index: 1;
  }

  &:hover,
  &:focus {
    cursor: pointer;

    &:after {
      background-color: ${(props) =>
        props.color === 'yellow' ? '#F5CD01' : '#FF7465'};
    }
  }

  > a {
    color: ${({ theme }) =>
      theme.sunnysideLandingPage.colors.neutral.veryDarkDesaturatedBlue};
    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    margin-inline: unset;
    text-align: left;
  }
`;

export const ImageArea = styled.div`
  position: relative;
  width: 100vw;
  height: 313px;

  @media (min-width: 768px) {
    width: 50%;
    height: 600px;
  }
`;

export const LastRowGrid = styled.div`
  height: 601px;
  padding-inline: 19px;

  h2 {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.fraunces};
    font-weight: 900;
    font-size: 28px;
    line-height: 49px;
    text-align: center;

    margin-bottom: 24px;
  }

  p {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.barlow};
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.005em;
  }

  &:first-of-type {
    background-image: url('/images/sunnyside/mobile/image-graphic-design.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .content {
      margin-top: 391px;
      /* color: #25564b; */
      color: ${({ theme }) =>
        theme.sunnysideLandingPage.colors.primary.darkDesaturatedCyan};
    }
  }

  &:last-of-type {
    background-image: url('/images/sunnyside/mobile/image-photography.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .content {
      margin-top: 391px;
      /* color: #19536b; */
      color: ${({ theme }) =>
        theme.sunnysideLandingPage.colors.primary.darkBlue};
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 600px;

    .content {
      max-width: 337px;
      margin-inline: auto;
      margin-top: 390px;
    }

    h2 {
      font-size: 28px;
      line-height: 49px;
    }

    p {
      font-size: 16px;
      line-height: 27px;
    }

    &:first-of-type {
      background-image: url('/images/sunnyside/desktop/image-graphic-design.jpg');
    }

    &:last-of-type {
      background-image: url('/images/sunnyside/desktop/image-photography.jpg');
    }
  }
`;
