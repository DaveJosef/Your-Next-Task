import React from 'react';
import * as S from './styled';
import AddBtn from '../AddBtn/AddBtn';
import InputBox from '../InputBox/InputBox';

function AddPane() {
  return (
    <S.AddPane>
      <InputBox onChange={() => {}}/>
      <AddBtn onClick={() => {}}/>
    </S.AddPane>
  )
}

export default AddPane;
