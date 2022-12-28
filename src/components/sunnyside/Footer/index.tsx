/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './Footer.styled';
import Image from 'next/image';
import { Container } from '../Container';

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <div className="footer_logo">
            <Image
              src="/images/sunnyside/sunnyside-logo-green.svg"
              alt="Sunnyside Logo"
              layout="fill"
            />
          </div>

          <ul className='footer_menu'>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>

          <ul className="footer_social">
            <li>
              <a href="#">
                <div className="social_icon">
                  <Image 
                    src='/images/sunnyside/icon-facebook.svg'
                    width={20}
                    height={20}
                    alt='Facebook'
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="social_icon">
                  <Image 
                    src='/images/sunnyside/icon-instagram.svg'
                    width={20}
                    height={20}
                    alt='Instagram'
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="social_icon">
                  <Image 
                    src='/images/sunnyside/icon-twitter.svg'
                    width={20}
                    height={20}
                    alt='Twitter'
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="social_icon">
                  <Image 
                    src='/images/sunnyside/icon-pinterest.svg'
                    width={20}
                    height={20}
                    alt='Pinterest'
                  />
                </div>
              </a>
            </li>
          </ul>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
