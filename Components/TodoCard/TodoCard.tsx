import React, { MouseEventHandler } from 'react';
import * as S from './styled';

interface TodoCardProps {
    name: string,
    done: boolean,
    onDone: MouseEventHandler,
    onRemove: MouseEventHandler,
    onUpdate: MouseEventHandler,
}

function TodoCard({ name, done, onDone, onRemove, onUpdate }: TodoCardProps) {
  return (
    <S.TodoCard>
        <S.TodoNameWrapper onClick={onDone}>
            <S.TodoName $done={done}>{ name }</S.TodoName>
        </S.TodoNameWrapper>
        <S.TodoOptions>
            <S.OptionDiv data-testid='update-task' onClick={onUpdate}>
                <S.AdjustAlign>
                    <i className="fa-solid fa-pen-to-square"></i>
                </S.AdjustAlign>
            </S.OptionDiv>
            <S.OptionDiv data-testid='remove-task' onClick={onRemove}>
                <i className="fa-solid fa-trash-can"></i>
            </S.OptionDiv>
        </S.TodoOptions>
    </S.TodoCard>
  );
}

export default TodoCard;
