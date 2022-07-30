import { useId } from 'react';
import { Container } from '../Container';
import { Article } from './Article';
import * as S from './ArticlesSection.styled';

export function ArticlesSection() {
  return (
    <S.ArticlesSection>
      <Container>
        <S.Wrapper>
          <h2>Latest Articles</h2>

          <div className="displayArticles">
            {articleList.map((article, index) => {
              return (
                <Article key={`${useId}-${index}`} image={article.image} author={article.author} title={article.title} text={article.text} />
              );
            })}
          </div>

        </S.Wrapper>
      </Container>
    </S.ArticlesSection>
  );
}

const articleList = [
  {
    image: '/images/easybank-landing-page/image-currency.jpg',
    author: 'Claire Robinson',
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: '/images/easybank-landing-page/image-restaurant.jpg',
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: '/images/easybank-landing-page/image-plane.jpg',
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: '/images/easybank-landing-page/image-confetti.jpg',
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  }
];