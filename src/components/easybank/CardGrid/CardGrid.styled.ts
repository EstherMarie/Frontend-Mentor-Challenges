import styled from 'styled-components';

export const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;
