import React from 'react';
import * as S from './styled';

interface InputBoxProps {
    onChange: React.ChangeEventHandler,
};

function InputBox({ onChange }: InputBoxProps) {
  return (
    <S.InputBox onChange={onChange} placeholder='Type in a new Task' />
  );
}

export default InputBox;
