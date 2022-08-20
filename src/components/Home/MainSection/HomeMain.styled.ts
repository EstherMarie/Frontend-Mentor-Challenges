import styled from "styled-components";

export const Main = styled.main`  
  padding: 20px 0;

  h1 {
    font-size: 2.5rem;
    line-height: 7.2rem;
    position: relative;

    ::before {
      content: '';
      display: block;
      background-color: #97D1DD;
      border-radius: 5px;
      width: 9px;
      height: 100px;

      position: absolute;
      left: -30px;
      top: -10px;
    }
  
    @media (min-width: 576px) {
      font-size: 4.0rem;
    }
    
    @media (min-width: 992px) {
      margin-top: 36px;
      font-size: 6.0rem;
    } 
  }
`;
