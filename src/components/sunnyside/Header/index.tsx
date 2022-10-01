/* eslint-disable jsx-a11y/anchor-is-valid */
import { CallToAction } from '../CallToAction';
import * as S from './Header.styled';
import { MobileMenu } from './MobileMenu';
import Image from 'next/image';
import { useState } from 'react';



export function Header() {
  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false);

  return (
    <S.Header>
      <div className="wrapper">
        <div className="header_logo">
          <Image
            src="/images/sunnyside/sunnyside-logo-white.svg"
            alt="Sunnyside Logo"
            layout="fill"
          />
        </div>

        <nav className="header_menu">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <CallToAction variant="desktop" />
            </li>
          </ul>
        </nav>

        <button className="menu_icon" onClick={() => (setIsMobileMenuShowing(!isMobileMenuShowing))}>
          <Image
            src="/images/sunnyside/icon-hamburger.svg"
            alt="Open menu"
            layout="fill"
          />
        </button>

        <MobileMenu isMenuShowing={isMobileMenuShowing} />
      </div>
    </S.Header>
  );
}
