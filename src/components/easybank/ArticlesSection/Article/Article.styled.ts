import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  height: 387px;
  margin-inline: auto;

  background-color: ${({ theme }) =>
    theme.easybankLandingPage.colors.neutral.white};
  padding-bottom: 35.22px;
  border-radius: 5px;
  box-shadow: 0 10px 20px
    ${({ theme }) => theme.easybankLandingPage.colors.neutral.lightGrayishBlue};

  .article_header {
    width: 100%;
    height: 185px;
    position: relative;

    margin-bottom: 26px;

    img {
      border-radius: 5px 5px 0px 0px;
    }
  }

  .article_body {
    padding-inline: 25px;

    .article_author {
      font-size: 12px;
      color: hsla(0, 0%, 61%, 1);
    }

    .article_title {
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.darkBlue};
      text-decoration: none;
      font-weight: ${({ theme }) =>
        theme.easybankLandingPage.typography.fontWeight.light};
      font-size: 14.25px;
      line-height: 19px;
      margin-top: 11px;
      margin-bottom: 8px;
    }

    .article_text {
      font-size: 12px;
      line-height: 16px;
      color: hsla(0, 0%, 61%, 1);
    }
  }

  @media (min-width: 768px) {
    max-width: 320px;

    .article_author {
      font-size: 10px;
    }

    .article_body {
      padding-inline: 18px;

      .article_title {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.017em;
      }

      .article_text {
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.015em;
      }
    }
  }

  @media (min-width: 1000px) {
    max-width: 255px 
  }

  &:hover,
  &:focus {
    .article_title {
      color: ${({ theme }) =>
        theme.easybankLandingPage.colors.primary.limeGreen};
    }
  }
`;
