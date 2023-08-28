import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/"
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';
import TodoCard from "@/Components/TodoCard/TodoCard";

const task = {
    name: 'Teste Task',
    done: false,
};

describe('TodoCard', () => {
    it('should receive and render the task name', () => {        
        render(<ThemeProvider theme={Themes}><TodoCard {...task} onRemove={() => {}} onDone={() => {}} onUpdate={() => {}}/></ThemeProvider>);
        const taskName = screen.getByText(task.name);

        expect(taskName).toBeInTheDocument();
        expect(taskName).toHaveTextContent(task.name);
    });

    it('should call onDone when clicking the task name', () => {
        const onDone = jest.fn();

        render(<ThemeProvider theme={Themes}><TodoCard {...task} onRemove={() => {}} onDone={onDone} onUpdate={() => {}}/></ThemeProvider>);
        const taskName = screen.getByText(task.name);

        fireEvent.click(taskName);

        expect(onDone).toBeCalledTimes(1);
    });
    
    it('should call onRemove when clicking the remove icon', async () => {
        const onRemove = jest.fn();

        render(<ThemeProvider theme={Themes}><TodoCard {...task} onRemove={onRemove} onDone={() => {}} onUpdate={() => {}}/></ThemeProvider>);
        const removeTask = await screen.findByTestId('remove-task');

        fireEvent.click(removeTask);

        expect(onRemove).toBeCalledTimes(1);
    });
    
    it('should call onUpdate when clicking the update icon', async () => {
        const onUpdate = jest.fn();

        render(<ThemeProvider theme={Themes}><TodoCard {...task} onUpdate={onUpdate} onDone={() => {}} onRemove={() => {}}/></ThemeProvider>);
        const updateTask = await screen.findByTestId('update-task');

        fireEvent.click(updateTask);

        expect(onUpdate).toBeCalledTimes(1);
    });
});
