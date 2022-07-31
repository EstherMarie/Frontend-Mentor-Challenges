import Image from 'next/image';
import { Container } from '../Container';
import { CallToAction } from '../CallToAction';
import * as S from './Footer.styled';

export function Footer() {
  return (
    <S.Footer id="footer">
      <Container>
        <S.Wrapper>
          <div className="footer_info">
            <Image
              src="/images/easybank-landing-page/logo_easybank_white.svg"
              alt="Easybank Logo"
              width={130}
              height={20}
            />

            <ul className="footer_social">
              <li>
                <a href="#footer" rel="noopener noreferrer">
                  <Image
                    src="/images/easybank-landing-page/icon-facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#footer" rel="noopener noreferrer">
                  <Image
                    src="/images/easybank-landing-page/icon-youtube.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#footer" rel="noopener noreferrer">
                  <Image
                    src="/images/easybank-landing-page/icon-twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#footer" rel="noopener noreferrer">
                  <Image
                    src="/images/easybank-landing-page/icon-pinterest.svg"
                    alt="Pinterest"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="#footer" rel="noopener noreferrer">
                  <Image
                    src="/images/easybank-landing-page/icon-instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer_menu">
            <li>
              <a href="#footer" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Contact
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Carrers
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Support
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="footer_contact">
            <CallToAction />

            <div className="footer_rights">
              <p>© Easybank. All Rights Reserved</p>
            </div>
          </div>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
