/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from './Header.styled';

export function Header() {
  return (
    <S.Header>
      <div className="wrapper">
        <div className="header_logo"></div>

        <nav className='header_menu'>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#" className='contact_link'>Contact</a></li>
          </ul>
        </nav>
      </div>

    </S.Header>
  );
}
