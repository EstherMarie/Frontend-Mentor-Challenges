import styled from 'styled-components';

export const Container = styled.div`
  --container-width: 1110px;
  --padding: 24px;

  max-width: calc(var(--container-width) + (var(--padding) * 2));
  padding-inline: var(--padding);

  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  blockquote {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.barlow};
  }

  h1,
  h2,
  h3,
  .learnMore_link {
    font-family: ${({ theme }) =>
      theme.sunnysideLandingPage.typography.fontFamily.fraunces};
  }
`;
