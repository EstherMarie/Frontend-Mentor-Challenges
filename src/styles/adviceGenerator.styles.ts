import styled from 'styled-components';
import { adviceGeneratorTheme } from './themes';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${adviceGeneratorTheme.theme.colors.neutral.darkBlue};
  font-family: ${adviceGeneratorTheme.theme.typography.fontFamily};
`;
