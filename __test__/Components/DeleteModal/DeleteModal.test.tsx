import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';
import DeleteModal from "@/Components/DeleteModal/DeleteModal";

describe('UpdateModal', () => {
    it('Should Call onRemove when clicking OK Button', () => {
        const onRemove = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <DeleteModal handleConfirmDelete={onRemove} handleClose={() => {}}/>
            </ThemeProvider>
        );
        const okBtn = screen.getByTestId('modal-confirm-button');
        fireEvent.click(okBtn);

        expect(onRemove).toBeCalledTimes(1);
    });
    
    it('Should Call onClose when clicking Close Button', () => {
        const onClose = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <DeleteModal handleConfirmDelete={() => {}} handleClose={onClose}/>
            </ThemeProvider>
        );
        const closeBtn = screen.getByTestId('modal-close-button');
        fireEvent.click(closeBtn);
        
        expect(onClose).toBeCalledTimes(1);
    });
});
