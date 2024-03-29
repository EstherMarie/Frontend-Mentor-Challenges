import styled from 'styled-components';
import { CardGrid } from '../CardGrid/CardGrid.styled';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const ArticlesSection = styled.section`
  width: 100%;
  padding: 83px 0 81px;
  background-color: ${({ theme }) =>
    theme.easybankLandingPage.colors.neutral.veryLightGray};

  h2 {
    margin-bottom: 33px;
    font-weight: ${({ theme }) =>
      theme.easybankLandingPage.typography.fontWeight.light};
    font-size: 28px;
    line-height: 33px;
    color: ${({ theme }) => theme.easybankLandingPage.colors.primary.darkBlue};
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 38.2px;
      line-height: 45px;
      text-align: left;
      margin-bottom: 37px;
    }
  }
`;

export const ArticleGrid = styled(CardGrid)`
  gap: 22px;
`
