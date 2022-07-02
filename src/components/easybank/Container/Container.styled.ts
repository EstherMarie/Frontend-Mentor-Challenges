import styled from 'styled-components';
import { easyBankTheme } from '../../../styles/themes';

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;

  padding-inline: 22px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${easyBankTheme.theme.typography.fontFamily};
`;
