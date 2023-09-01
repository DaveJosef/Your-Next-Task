'use client';
import React, { useState } from 'react';
import * as S from './styled';
import Modal from '../Modal/Modal';

interface UpdateModalProps {
    handleConfirmUpdate: (name: string) => void,
    handleClose: (name: string) => void,
}

function UpdateModal({ handleConfirmUpdate, handleClose }: UpdateModalProps) {

    const [name, setName] = useState('');
    const theme = 'normal';

  return (
    <Modal handleConfirm={() => handleConfirmUpdate(name)} handleClose={(name) => handleClose(name + '')} modalTheme={theme} content={
        <S.Input onChange={(e) => setName(e.target.value)} placeholder='Type in the New Task Name'/>
    }/>
  );
}

export default UpdateModal;
