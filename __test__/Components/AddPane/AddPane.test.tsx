import AddPane from "@/Components/AddPane/AddPane";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';

describe('AddPane', () => {
    it('Should call onAdd when submitted', () => {
        const onAdd = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <AddPane onAdd={onAdd}/>
            </ThemeProvider>
        );
        const pane = screen.getByTestId('add-pane');
        fireEvent.submit(pane);

        expect(onAdd).toBeCalledTimes(1);
    });

    it('Should call onAdd when AddBtn is clicked', () => {
        const onAdd = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <AddPane onAdd={onAdd}/>
            </ThemeProvider>
        );
        const addBtn = screen.getByRole('button');
        fireEvent.click(addBtn);

        expect(onAdd).toBeCalledTimes(1);
    });
    
    it('Should call onAdd with provided name when submitted', () => {
        const onAdd = jest.fn();
        const newTaskName = 'Task`s Custom Name';

        render(
            <ThemeProvider theme={Themes}>
                <AddPane onAdd={onAdd}/>
            </ThemeProvider>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: newTaskName } });
        const pane = screen.getByTestId('add-pane');
        fireEvent.submit(pane);

        expect(onAdd).toBeCalledTimes(1);
        expect(onAdd).toBeCalledWith(newTaskName);
    });

});
