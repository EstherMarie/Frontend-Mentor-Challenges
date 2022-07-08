import styled from 'styled-components';

interface StyledHeaderProps {
  isNavMenuActive: boolean
}

export const Header = styled.header<StyledHeaderProps>`
  width: 100%;
  min-height: 59px;
  padding: 20px 0;
  position: relative;
  background-color: white;
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

  .btn-cta {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const NavMenu = styled.nav`
  width: calc(100% - 44px);
  padding: 32px 0;
  
  position: absolute;
  top: 88px;
  
  background-color: white;
  border-radius: 5px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > li {
      font-weight: 400;
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
          color: black;

          &::after {
            content: '';
            
            position: absolute;
            bottom: -27px;

            display: block;
            width: 100%;
            height: 4px;
            background: linear-gradient(89.64deg, #33D35E 0.97%, #2AB6D9 100%);
          }
        }
      }}
    }
  }
`;
