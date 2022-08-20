import styled from "styled-components";

export const ProjectSection = styled.section`
  width: 100%;
  margin-top: 30px;

  h2 {
    font-size: 1.8rem;
    position: relative;
  
    @media (min-width: 576px) {
      font-size: 3rem;
    }
    
    @media (min-width: 992px) {
      font-size: 3.6rem;

      :before {
        content: url('/images/home/home_dots.svg');
        position: absolute;
        left: -10px;
        bottom: -13px;
        z-index: -5;
      }
    }
  }

  @media (min-width: 992px) {
    margin-top: 86px;
  }

  .project_display {
    margin-top: 20px;
    
    display: grid;
    gap: 40px;
    justify-items: center;
    grid-template-columns: 1fr;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (min-width: 992px) {
      margin-top: 52px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
