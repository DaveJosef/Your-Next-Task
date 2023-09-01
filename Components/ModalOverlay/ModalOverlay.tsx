import React from 'react';
import * as S from './styled';

interface ModalOverlayProps {
    children: React.ReactNode,
    show: boolean,
}

function ModalOverlay({ children, show }: ModalOverlayProps) {
  return (
    <S.ModalOverlay $show={show}>
      { children }
    </S.ModalOverlay>
  );
}

export default ModalOverlay;
