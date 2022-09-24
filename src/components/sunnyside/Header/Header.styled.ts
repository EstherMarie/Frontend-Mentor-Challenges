import styled from 'styled-components';

export const Header = styled.header`
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

  nav {
    a {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.barlow};
    }

    .contact_link {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.fraunces};
      font-weight: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontWeight.fraunces700};
    }
  }
`;
