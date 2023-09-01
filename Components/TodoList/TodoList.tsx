import React from 'react';
import * as S from './styled';
import TodoCard from '../TodoCard/TodoCard';

interface TodoListProps {
    propTasks: Array<any>,
    onDone: (taskId: number) => void,
    onRemove: (taskId: number) => void,
    onUpdate: (taskId: number) => void,
};

function TodoList({ propTasks, onDone, onRemove, onUpdate }: TodoListProps) {

  return (
    <S.ScrollContainer>
        <S.TodoList>
            {propTasks.map((task, index) => (
                <TodoCard key={index} name={task.name} done={task.done} onDone={(_) => onDone(index)} onRemove={(_) => onRemove(index)} onUpdate={(_) => onUpdate(index)}/>
            ))}
        </S.TodoList>
    </S.ScrollContainer>
  );
}

export default TodoList;
