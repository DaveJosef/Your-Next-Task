import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/"
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';
import TodoList from "@/Components/TodoList/TodoList";

const tasks = [
    {
        name: 'Teste Task',
        done: false,
    }
];

describe('TodoList', () => {
    it('should receive and render the tasks', () => {
        render(
            <ThemeProvider theme={Themes}>
                <TodoList onDone={() => {}} onRemove={() => {}} onUpdate={() => {}} propTasks={tasks}/>
            </ThemeProvider>
        );
        const taskName = screen.getByText(tasks[0].name);

        expect(taskName).toBeInTheDocument();
        expect(taskName).toHaveTextContent(tasks[0].name);
    });
});
