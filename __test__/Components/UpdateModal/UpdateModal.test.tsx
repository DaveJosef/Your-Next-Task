import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Themes from '@/global/Themes';
import UpdateModal from "@/Components/UpdateModal/UpdateModal";

describe('UpdateModal', () => {
    it('Should Call onUpdate when clicking OK Button', () => {
        const onUpdate = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <UpdateModal handleConfirmUpdate={onUpdate} handleClose={() => {}}/>
            </ThemeProvider>
        );
        const okBtn = screen.getByTestId('modal-confirm-button');
        fireEvent.click(okBtn);

        expect(onUpdate).toBeCalledTimes(1);
    });
    
    it('Should Call onUpdate with name argument when clicking OK Button', () => {
        const onUpdate = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <UpdateModal handleConfirmUpdate={onUpdate} handleClose={() => {}}/>
            </ThemeProvider>
        );
        const okBtn = screen.getByTestId('modal-confirm-button');
        fireEvent.click(okBtn);

        expect(onUpdate).toBeCalledWith('');
    });
    
    it('Should Call onClose when clicking Close Button', () => {
        const onClose = jest.fn();

        render(
            <ThemeProvider theme={Themes}>
                <UpdateModal handleConfirmUpdate={() => {}} handleClose={onClose}/>
            </ThemeProvider>
        );
        const closeBtn = screen.getByTestId('modal-close-button');
        fireEvent.click(closeBtn);
        
        expect(onClose).toBeCalledTimes(1);
    });
});
