'use client';
import React, { useState } from 'react';
import * as S from './styled';
import AddBtn from '../AddBtn/AddBtn';
import InputBox from '../InputBox/InputBox';

interface AddPaneProps {
  onAdd: (name: string) => void,
}

function AddPane({ onAdd }: AddPaneProps) {

  const [name, setName] = useState('');

  return (
    <S.AddPane data-testid={'add-pane'} onSubmit={(e) => { e.preventDefault(); onAdd(name); }}>
      <InputBox onChange={(e) => {setName((e.target as HTMLInputElement).value ? (e.target as HTMLInputElement).value : '')}}/>
      <AddBtn/>
    </S.AddPane>
  )
}

export default AddPane;
