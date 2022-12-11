import Link from 'next/link';
import * as S from './CallToAction.styled';

interface CallToActionProps {
  variant: 'desktop' | 'mobile';
}

export function CallToAction({ variant }: CallToActionProps) {
  return (
    <Link href="#" passHref>
      <S.button buttonVariant={variant}>Contact</S.button>
    </Link>
  );
}
