import Image from 'next/image';
import * as S from './Article.styled';

interface ArticleProps {
  image: string,
  author: string,
  title: string,
  text: string;
}

export function Article({ image, author, title, text }: ArticleProps) {
  return (
    <S.Article>
      <div className="article_header">
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>

      <div className="article_body">
        <p className='article_author'>By {author}</p>


        <h3 className='article_title'>
          <a href="#articles">
            {title}
          </a>
        </h3>


        <p className='article_text'>{text}</p>
      </div>
    </S.Article>
  );
}
