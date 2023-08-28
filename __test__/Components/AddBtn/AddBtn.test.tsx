import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import AddBtn from "@/Components/AddBtn/AddBtn";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';
import Main from "@/Components/Pages/Main/Main";

describe('AddBtn', () => {
    it('Should render properly', () => {
        render(<ThemeProvider theme={Themes}><AddBtn onClick={() => {}}/></ThemeProvider>);

        const btn = screen.getByRole('button');
        
        expect(btn).toBeInTheDocument();
    });

    it('Should have the text + Add in it', () => {
        render(<ThemeProvider theme={Themes}><AddBtn onClick={() => {}}/></ThemeProvider>);

        const btn = screen.getByRole('button');
        const addP = screen.getByText('+ Add');

        expect(btn).toContainHTML(addP.innerHTML);
    });

    it('Should call onClick when clicked', () => {
        const callbackFn = jest.fn();
        
        render(<ThemeProvider theme={Themes}><AddBtn onClick={callbackFn}/></ThemeProvider>);
        const btn = screen.getByRole('button');
        fireEvent.click(btn);

        expect(callbackFn).toBeCalledTimes(1);
    });
});
