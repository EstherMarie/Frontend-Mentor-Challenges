import styled from "styled-components";

export const ProjectCard = styled.article`
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;

  width: 100%;
  max-width: 320px;
  min-height: 350px;
  max-height: 400px;

  border: 1px solid #DBE5E6;

  .card_image {
    position: relative;
    max-width: 320px;
    max-height: 200px;
    height: 100%;

    img {
      border-radius: 5px 5px 0 0;

    }

    &.wip {
      img {
        filter: blur(3px);
      }

      ::before {
        content: 'Work in Progress';
        position: absolute;
        left: -29px;
        top: 15px;
        z-index: 1;

        color: black;
        background-color: #ffffffad;
        width: 50%;
        font-size: 14px;
        
        padding: 5px 20px;
        display: flex;
        justify-content: center;
        
        transform: rotate(-30deg);
      }
    }
  }

  .card_info {
    padding: 20px;

    h3 {
      font-size: 2.4rem;
      line-height: 2.9rem;
      margin-bottom: 16px;
    }
  
    p {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    .card_difficulty {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 10px;

      height: 24px;
      width: fit-content;

      
      border-radius: 5px;
      
      &.newbie {
        background: #6abecd;
      }
      
      &.junior {
        background: rgba(170, 215, 66, 0.6);
      }

      &.intermediate {
        background: rgba(241, 182, 4, 0.6);
      }

      &.advanced {
        background: #f48925;
      }

      &.guru {
        background: #ed2c49;
      }
    }
  }

  transition: all .2s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid #97D1DD;
    box-shadow: 5px 5px 5px hsla(0, 0%, 50.2%, 0.3);
  }
`