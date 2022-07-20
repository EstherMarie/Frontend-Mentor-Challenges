/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Image from 'next/image';
import * as S from './Header.styled';
import { Container } from '../Container/Container.styled';

import { CallToAction } from '../CallToAction';

export function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <S.Header isNavMenuActive={isNavVisible}>
      <Container>
        <Image
          src="/images/easybank-landing-page/logo.svg"
          alt="easyBank Logo"
          width={130}
          height={20}
        />

        <S.NavMenu isNavShowing={isNavVisible}>
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

        <button
          className="menu-btn"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <Image
            src={
              isNavVisible
                ? '/images/easybank-landing-page/icon-close.svg'
                : '/images/easybank-landing-page/icon-hamburger.svg'
            }
            alt={isNavVisible ? 'Close menu' : 'Open menu'}
            width={19}
            height={19}
          />
        </button>

        <CallToAction />
      </Container>
    </S.Header>
  );
}
