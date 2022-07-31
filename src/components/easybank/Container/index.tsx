import * as S from './Container.styled';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <S.Container>{children}</S.Container>;
}
