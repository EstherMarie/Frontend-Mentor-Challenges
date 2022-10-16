import Image from 'next/image';
import * as S from './Banner.styled';
import { Container } from '../Container';

import arrowDownIcon from '../../../../public/images/sunnyside/icon-arrow-down.svg';

export function Banner() {
  return (
    <S.Banner>
      <Container>
        <S.Content>
          <h1>WE ARE CREATIVES</h1>

          <Image src={arrowDownIcon} alt="" width={36} height={114} />
        </S.Content>
      </Container>
    </S.Banner>
  );
}
