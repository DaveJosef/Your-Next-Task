import React, { useState } from 'react';
import * as S from './styled';
import TodoCard from '../TodoCard/TodoCard';

interface TodoListProps {
    propTasks: Array<any>,
};

function TodoList({ propTasks }: TodoListProps) {

    const [tasks, setTasks] = useState(propTasks);

    function onDone(taskId: number) {
        console.log(taskId);

        const newTasks = tasks.map((task, index) => index === taskId ? {...task, done: !task.done} : task);
        setTasks(newTasks);

        console.log({ newTasks });
    }

    function onUpdate(taskId: number) {
        console.log(taskId);
    }

    function onRemove(taskId: number) {
        console.log(taskId);

        const newTasks = tasks.filter((task, index) => index !== taskId);
        setTasks(newTasks);

        console.log({ newTasks });
    }

  return (
    <S.ScrollContainer>
        <S.TodoList>
            {tasks.map((task, index) => (
                <TodoCard key={index} name={task.name} done={task.done} onDone={(_) => onDone(index)} onRemove={(_) => onRemove(index)} onUpdate={(_) => onUpdate(index)}/>
            ))}
        </S.TodoList>
    </S.ScrollContainer>
  );
}

export default TodoList;
