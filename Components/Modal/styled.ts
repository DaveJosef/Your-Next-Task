import { styled } from "styled-components";

interface DialogWrapperCustomProps {
    $modalTheme: 'normal' | 'danger',
}

export const DialogWrapper = styled.div<DialogWrapperCustomProps>`
    z-index: 999;
    position: absolute;
    right: calc(50% - 152px);
    top: 50%;
    margin: auto;
    bottom: 0;
`;

export const Dialog = styled.form`
    display: inline-flex;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML} 0px;
    flex-direction: column;
    align-items: center;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: ${(props) => props.theme.COLORS.NEUTRALS.Background};
`;

export const DialogTitleWrapper = styled.div`
    display: flex;
    width: 304px;
    height: 30px;
    padding: 0px ${(props) => props.theme.PADDINGS.PaddingMD};
    justify-content: space-between;
    align-items: center;
`;

export const DialogTitle = styled.p`
    color: ${(props) => props.theme.COLORS.NEUTRALS.Foreground};
    text-align: center;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const CloseBtn = styled.div`
    &:hover {
        cursor: pointer;
        opacity: .7;
    }
    
    display: flex;
    width: 30px;
    height: 30px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const ContentWrap = styled.div`
    display: flex;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ConfirmButton = styled.button<DialogWrapperCustomProps>`
    &:hover {
        cursor: pointer;
        opacity: .7;
    }
    
    display: flex;
    height: 25px;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    ${(props) => props.$modalTheme === 'danger' && `background-color: ${props.theme.COLORS.MAIN.Red};`}
    ${(props) => props.$modalTheme === 'normal' && `background-color: ${props.theme.COLORS.MAIN.Blue};`}
    color: ${(props) => props.theme.COLORS.NEUTRALS.Background};
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
