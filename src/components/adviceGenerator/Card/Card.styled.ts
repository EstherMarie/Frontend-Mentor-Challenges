import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.adviceGeneratorApp.colors.neutral.darkBlue};
  font-family: ${({ theme }) => theme.adviceGeneratorApp.typography.fontFamily};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.adviceGeneratorApp.colors.neutral.darkGrayishBlue};
  width: 100%;
  max-width: 540px;

  margin-top: 120px;
  margin-inline: auto;

  position: relative;

  padding: 40px 24px 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 10px;
  box-shadow: 0 0 40px hsl(215, 23.1%, 10.2%);

  .advice {
    color: ${({ theme }) => theme.adviceGeneratorApp.colors.primary.neonGreen};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.26em;
  }

  .quote {
    color: ${({ theme }) => theme.adviceGeneratorApp.colors.primary.lightCyan};
    font-size: ${({ theme }) => theme.adviceGeneratorApp.typography.fontSize};
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;

    padding-top: 28px;
    padding-bottom: 23px;

    &::before {
      content: '“';
    }

    &::after {
      content: '”';
    }
  }

  .btn {
    border-radius: 50%;
    width: fit-content;
    height: auto;
    border: transparent;

    padding: 20px;

    position: absolute;
    bottom: -33px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.adviceGeneratorApp.colors.primary.neonGreen};
    transition: all 0.2s;

    &:hover,
    &:focus {
      box-shadow: 0 0 15px ${({ theme }) => theme.adviceGeneratorApp.colors.primary.neonGreen};
      cursor: pointer;
    }
  }

  &::after {
    content: url('/images/advice-generator/pattern-divider-mobile.svg');
  }

  @media (min-width: 575px) {
    padding: 47px 48px 72px;
    margin-top: unset;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .advice {
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4em;
    }

    .quote {
      padding-bottom: 40px;

      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 38px;
      letter-spacing: 0.01em;
    }

    &::after {
      content: url('/images/advice-generator/pattern-divider-desktop.svg');
    }
  }
`;
