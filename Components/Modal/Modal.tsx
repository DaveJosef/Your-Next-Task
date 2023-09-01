import React from 'react';
import * as S from './styled';

interface ModalProps {
    content: React.ReactNode,
    modalTheme: 'normal' | 'danger',
    handleConfirm: (data: object) => void,
    handleClose: (data: object) => void,
}

function Modal({ content, modalTheme, handleConfirm, handleClose }: ModalProps) {

    return (
      <S.DialogWrapper $modalTheme={modalTheme}>
          <S.Dialog onSubmit={(e) => e.preventDefault()}>
              <S.DialogTitleWrapper>
                  <S.DialogTitle>
                      Delete Task
                  </S.DialogTitle>
                  <S.CloseBtn data-testid={'modal-close-button'} onClick={handleClose}>
                      <i className="fa-solid fa-circle-xmark"></i>
                  </S.CloseBtn>
              </S.DialogTitleWrapper>
              <S.ContentWrap>
                { content }
              </S.ContentWrap>
              <S.ConfirmButton data-testid={'modal-confirm-button'} $modalTheme={modalTheme} onClick={handleConfirm}>OK</S.ConfirmButton>
          </S.Dialog>
      </S.DialogWrapper>
    );
}

export default Modal;
