import InputBox from "@/Components/InputBox/InputBox";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';

describe('InputBox', () => {
    it('Should call onChange when input changes', () => {
        const callbackFn = jest.fn();

        render(<ThemeProvider theme={Themes}><InputBox onChange={callbackFn}/></ThemeProvider>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'task' } });

        expect(callbackFn).toBeCalledTimes(1);
    });
});
