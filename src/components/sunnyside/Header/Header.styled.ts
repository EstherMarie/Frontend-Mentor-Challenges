import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 34px;
  position: relative;

  .wrapper {
    --container-width: 1352px;
    --padding: 24px;

    max-width: calc(var(--container-width) + (var(--padding) * 2));
    padding-inline: var(--padding);

    width: 100%;
    margin-inline: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header_logo {
    position: relative;
    width: 124px;
    height: 24px;

    @media (min-width: 768px) {
      width: 170px;
      height: 33px;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 45px;
    }

    a {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.barlow};
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
    }

    .contact_link {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.fraunces};
      font-weight: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontWeight.fraunces700};
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu_icon {
    background-color: transparent;
    border: none;

    position: relative;
    width: 24px;
    height: 18px;

    @media (min-width: 768px) {
      display: none;
    }

    &:hover,
    &:active {
      cursor: pointer;
    }
  }
`;
