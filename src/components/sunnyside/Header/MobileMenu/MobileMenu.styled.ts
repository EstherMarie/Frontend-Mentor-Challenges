import styled from 'styled-components';

interface MobileMenuProps {
  isMenuShowing: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  width: calc(100% - 48px);
  height: 305px;

  padding: 40px 0;
  background-color: #ffffff;
  position: absolute;
  top: 60px;

  display: ${(props) => (props.isMenuShowing ? '' : 'none')};

  @media (min-width: 768px) {
    display: none;
  }

  ::before {
    content: '';
    position: absolute;
    right: -12px;
    top: -13px;

    border-top: 18px solid #ffffff;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    transform: rotate(-45deg);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 37px;

    li {
      font-family: ${({ theme }) =>
        theme.sunnysideLandingPage.typography.fontFamily.barlow};
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;

      a {
        color: #000000;
        text-decoration: none;
      }
    }
  }
`;
