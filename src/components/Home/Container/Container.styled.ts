import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;

  padding-inline: 22px;
  margin: 0 auto;

  font-family: ${({ theme }) => theme.home.typography.fontFamily};
  color: ${({ theme }) => theme.home.colors.earieBlack};

  h1, h2, h3 {
    font-weight: ${({ theme }) => theme.home.typography.fontWeight};
  }
`;
