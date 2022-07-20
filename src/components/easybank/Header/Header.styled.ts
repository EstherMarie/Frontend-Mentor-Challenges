import styled from 'styled-components';

interface StyledHeaderProps {
  isNavMenuActive: boolean
}

interface StyledNavProps {
  isNavShowing: boolean
}

export const Header = styled.header<StyledHeaderProps>`
  width: 100%;
  min-height: 59px;
  padding: 20px 0;
  position: relative;
  background-color: ${({theme}) => theme.easybankLandingPage.colors.neutral.white};
  box-shadow: ${({isNavMenuActive}) => isNavMenuActive && window.innerWidth < 768 ? '0px 10px 250px 450px rgba(45, 49, 77, 0.4)' : ''} ;

  .menu-btn {
    background-color: transparent;
    border: none;
    transition: all 0.2s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .cta-button {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const NavMenu = styled.nav<StyledNavProps>`
  width: calc(100% - 44px);
  padding: 32px 0;
  display: ${({isNavShowing}) => isNavShowing ? 'block' : 'none'};
  
  position: absolute;
  top: 88px;
  
  background-color: ${({theme}) => theme.easybankLandingPage.colors.neutral.white};
  border-radius: 5px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > li {
      font-weight: ${({ theme }) => theme.easybankLandingPage.typography.fontWeight.regular};
      font-size: 18px;
      line-height: 21px;

      & > a {
        color: ${({theme}) => theme.easybankLandingPage.colors.primary.darkBlue};
      }
    }
  }

  @media (min-width: 768px) {
    position: unset;
    width: fit-content;
    padding: unset;

    display: flex;

    & > ul {
      flex-direction: row;
      gap: 28px;

      & > li {
        position: relative;

        & > a {
        color: ${({theme})=> theme.easybankLandingPage.colors.neutral.grayishBlue};
        font-size: 14px;

        transition: all .2s ease-in-out;

        &:hover,
        &:focus {
          color: ${({theme})=> theme.easybankLandingPage.colors.primary.darkBlue};

          &::after {
            content: '';
            
            position: absolute;
            bottom: -27px;

            display: block;
            width: 100%;
            height: 4px;
            background: linear-gradient(89.64deg, ${({theme}) => theme.easybankLandingPage.colors.primary.limeGreen} 0.97%, ${({theme}) => theme.easybankLandingPage.colors.primary.brightCyan} 100%);
          }
        }
      }}
    }
  }
`;
