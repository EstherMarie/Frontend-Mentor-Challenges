import styled from 'styled-components';

export const Footer = styled.footer`
  height: 349px;
  weight: 100%; 
  
  padding: 63px 0 77px;
  
  background-color: #90D4C5;

  .footer_logo {
    position: relative;
    width: 170px;
    height: 33px;
  }

  .footer_menu {
    display: flex;
    gap: 53px;
    justify-content: center:
    align-items: center;

    margin-top: 42px;

    li {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      a {
        color: #2C7566;
        text-decoration: none;
        transition: .2s all ease-in-out;

        &:hover, 
        &:focus {
          color: #ffffff
        }
      }
    }
  }

  .footer_social {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;

    margin-top: 92px;

    .social_icon {
      transition: .2s all ease-in-out;

      &:hover,
      &:focus {
        filter: brightness(5);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 71px 0 72px;
  }
  
`

export const Wrapper = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`