/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './Header.styled';
import { Container } from '../Container/Container.styled';

import iconHamburger from '../../../../public/images/easybank-landing-page/icon-hamburger.svg';
import iconClose from '../../../../public/images/easybank-landing-page/icon-close.svg';
import { CallToAction } from '../CallToAction';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  function checkWindowSize() {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true);
      setIsMobile(false);
    } else {
      setIsMenuOpen(false);
      setIsMobile(true);
    }
  }

  useEffect(() => {
    checkWindowSize();
  }, []);

  return (
    <S.Header isNavMenuActive={isMenuOpen}>
      <Container>
        <Image
          src="/images/easybank-landing-page/logo.svg"
          alt="easyBank Logo"
          width={130}
          height={20}
        />

        {isMenuOpen && (
          <S.NavMenu>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </S.NavMenu>
        )}

        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image
            src={isMenuOpen ? iconClose : iconHamburger}
            alt={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </button>

        {!isMobile && <CallToAction />}
      </Container>
    </S.Header>
  );
}
