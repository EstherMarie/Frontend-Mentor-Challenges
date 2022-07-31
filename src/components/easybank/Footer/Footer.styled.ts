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
    /* padding: 50px 0; */
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
    justify-content: space-between;
  }

  .footer_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .footer_social {
      display: flex;
      gap: 15px;

      &:hover {
        fill: ${({ theme }) =>
          theme.easybankLandingPage.colors.primary.limeGreen};
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
        display: block;
        height: 32px;
      }
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer_contact {
    .footer_rights {
      margin-top: 23px;

      color: hsla(0, 0%, 61%, 1);
    }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
