import styled from 'styled-components';

export const StyledCTA = styled.button`
  background: linear-gradient(274.17deg, ${({theme}) => theme.easybankLandingPage.colors.primary.brightCyan} 0%, ${({theme}) => theme.easybankLandingPage.colors.primary.limeGreen} 100%);
  border-radius: 20px;
  border: none;

  padding: 10px 29px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${({theme}) => theme.easybankLandingPage.colors.neutral.white};

  font-weight: 700;
  font-size: 13.7px;

  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;
