import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) =>
    theme.easybankLandingPage.colors.primary.darkBlue};
  color: ${({ theme }) => theme.easybankLandingPage.colors.neutral.white};

  padding: 36px 0 29px;

  a {
    color: ${({ theme }) => theme.easybankLandingPage.colors.neutral.white};
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.limeGreen};
    }
  }

  @media (min-width: 768px) {
    height: 191px;
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    height: 100%;
    flex-direction: row;
    gap: 80px;
  }

  @media (min-width: 992px) {
    gap: 110px;
  }

  .footer_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

    .footer_social {
      display: flex;
      gap: 15px;

      .footer_social_icon:hover {
        filter: invert(0.4) sepia(0.5) saturate(5.9) hue-rotate(90deg)
          brightness(1);
      }
    }
  }

  .footer_menu {
    margin: 25px 0 26.8px;

    text-align: center;
    text-decoration: none;
    font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.regular};
    font-size: 14.3px;
    line-height: 17px;

    li {
      a {
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    @media (min-width: 768px) {
      height: 100px;
      margin: unset;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      column-gap: 8rem;

      li {
        a {
          justify-content: flex-start;
        }

        /* &:nth-child(4) {
          grid-column-start: 2;
        } */
      }
    }

    @media (min-width: 992px) {
      column-gap: 125px;
    }
  }

  .footer_contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px;

    .footer_rights {
      /* margin-top: 23px; */
      font-size: 13.56px;
      font-weight: ${({ theme }) =>
        theme.easybankLandingPage.typography.fontWeight.light};

      color: hsla(0, 0%, 61%, 1);
    }

    @media (min-width: 768px) {
      align-items: flex-end;
      justify-content: space-between;
      gap: 28px;

      margin-left: auto;

      .footer_rights {
        font-size: 14.5px;
      }
    }
  }
`;
