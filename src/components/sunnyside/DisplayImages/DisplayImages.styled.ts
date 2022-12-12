import styled from 'styled-components';

export const DisplayImagesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: 376px;

  .image_container {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:first-of-type {
      background-image: url('/images/sunnyside/mobile/image-gallery-milkbottles.jpg');
    }

    &:nth-of-type(2) {
      background-image: url('/images/sunnyside/mobile/image-gallery-orange.jpg');
    }

    &:nth-of-type(3) {
      background-image: url('/images/sunnyside/mobile/image-gallery-cone.jpg');
    }

    &:last-of-type {
      background-image: url('/images/sunnyside/mobile/image-gallery-sugar-cubes.jpg');
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

    height: 448px;

    .image_container {
      &:first-of-type {
        background-image: url('/images/sunnyside/desktop/image-gallery-milkbottles.jpg');
      }

      &:nth-of-type(2) {
        background-image: url('/images/sunnyside/desktop/image-gallery-orange.jpg');
      }

      &:nth-of-type(3) {
        background-image: url('/images/sunnyside/desktop/image-gallery-cone.jpg');
      }

      &:last-of-type {
        background-image: url('/images/sunnyside/desktop/image-gallery-sugarcubes.jpg');
      }
    }
  }
`;
