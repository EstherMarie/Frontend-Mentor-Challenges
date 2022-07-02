import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  min-height: 59px;
  padding: 20px 0;
  position: relative;

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
  width: 100%;
  background-color: white;

  position: absolute;
  top: 88px;

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
        color: #000000;
      }
    }
  }

  @media (min-width: 768px) {
    position: unset;
    width: fit-content;

    & > ul {
      flex-direction: row;
      gap: 28px;

      & > li a {
        color: #9c9c9c;
        font-size: 14px;
      }
    }
  }
`;
