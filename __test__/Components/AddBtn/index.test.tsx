import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import AddBtn from "@/Components/AddBtn/AddBtn";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';

describe('AddBtn', () => {
    it('Should render properly', () => {
        render(<ThemeProvider theme={Themes}><AddBtn /></ThemeProvider>);

        const btn = screen.getByRole('button');
        
        expect(btn).toBeInTheDocument();
    });

    it('Should have the text + Add in it', () => {
        render(<ThemeProvider theme={Themes}><AddBtn /></ThemeProvider>);

        const btn = screen.getByRole('button');
        const addP = screen.getByText('+ Add');

        expect(btn).toContainHTML(addP.innerHTML);
    });
});