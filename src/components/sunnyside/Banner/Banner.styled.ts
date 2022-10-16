import styled from 'styled-components';

export const Banner = styled.section`
  background-image: url('/images/sunnyside/mobile/image-header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 536px;

  @media (min-width: 576px) {
    background-image: url('/images/sunnyside/desktop/image-header.jpg');
  }

  @media (min-width: 768px) {
    height: 800px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 142px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 53px;

  h1 {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 7px;

    text-align: center;

    color: #ffffff;

    @media (min-width: 768px) {
      font-size: 56px;
      line-height: 69px;
      letter-spacing: 10.4px;
    }
  }

  @media (min-width: 768px) {
    gap: 95px;
    padding-top: 195px;
  }
`;
