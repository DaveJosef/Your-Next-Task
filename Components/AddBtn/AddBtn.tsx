import React from 'react';
import * as S from './styled';

interface AddBtnProps {
  onClick: React.MouseEventHandler
};

function AddBtn({ onClick }: AddBtnProps) {
  return (
    <S.AddBtn onClick={onClick}>
        <p>
            + Add
        </p>
    </S.AddBtn>
  );
}

export default AddBtn;