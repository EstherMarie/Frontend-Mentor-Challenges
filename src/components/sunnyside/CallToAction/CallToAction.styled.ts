import styled from 'styled-components';

interface buttonProps {
  buttonVariant: 'desktop' | 'mobile';
}

export const button = styled.button<buttonProps>`
  font-family: ${({ theme }) =>
    theme.sunnysideLandingPage.typography.fontFamily.fraunces};
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;

  width: 140px;
  height: 56px;
  border: transparent;
  border-radius: 30px;

  background-color: ${(props) =>
    props.buttonVariant === 'desktop' ? '#ffffff' : '#FBD601'};
  transition: all 0.2s ease-in-out;

  text-transform: uppercase;

  &:hover,
  &:active {
    cursor: pointer;
    filter: opacity(0.6);

    /* 
    Serious color-contrast problem

    color: ${(props) =>
      props.buttonVariant === 'desktop' ? '#ffffff' : '#000000'}; 
    */
  }
`;
