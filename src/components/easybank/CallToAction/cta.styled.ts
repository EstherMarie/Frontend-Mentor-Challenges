import styled from 'styled-components';

export const StyledCTA = styled.button`
  background: linear-gradient(274.17deg, ${({theme}) => theme.easybankLandingPage.colors.primary.brightCyan} 0%, ${({theme}) => theme.easybankLandingPage.colors.primary.limeGreen} 100%);
  border-radius: 25px;
  border: none;

  padding: 14px 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 14px;
  font-weight: ${({ theme }) => theme.easybankLandingPage.typography.fontWeight.bold};
  font-style: normal;
  line-height: 16px;
  font-family: ${({ theme }) => theme.easybankLandingPage.typography.fontFamily};
  color: ${({theme}) => theme.easybankLandingPage.colors.neutral.white};

  transition: all 0.2s ease-in-out;


  &:hover,
  &:focus {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;
