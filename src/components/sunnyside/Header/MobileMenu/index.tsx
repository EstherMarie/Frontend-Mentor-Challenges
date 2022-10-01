import Link from 'next/link';
import { CallToAction } from '../../CallToAction';
import * as S from './MobileMenu.styled';

interface MobileMenuProps {
  isMenuShowing: boolean;
}

export function MobileMenu({ isMenuShowing }: MobileMenuProps) {
  return (
    <S.MobileMenu isMenuShowing={isMenuShowing}>
      <ul>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <CallToAction variant="mobile" />
        </li>
      </ul>
    </S.MobileMenu>
  );
}
