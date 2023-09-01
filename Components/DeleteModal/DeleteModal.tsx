import React from 'react';
import * as S from './styled';
import Modal from '../Modal/Modal';

interface DeleteModalProps {
    handleConfirmDelete: () => void,
    handleClose: () => void,
}

function DeleteModal({ handleConfirmDelete, handleClose }: DeleteModalProps) {

    const theme = 'danger';

  return (
    <Modal handleConfirm={() => handleConfirmDelete()} handleClose={() => handleClose()} modalTheme={theme} content={
        <S.Content>Are you sure you want to delete this Task?</S.Content>
    }/>
  );
}

export default DeleteModal;
