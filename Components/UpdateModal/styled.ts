import { styled } from "styled-components";

interface UpdateDialogWrapperCustomProps {
    $show: boolean,
}

export const UpdateDialogWrapper = styled.div<UpdateDialogWrapperCustomProps>`
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    ${(props) => !props.$show && `display: none;`}
`;

export const UpdateDialog = styled.form`
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
    display: flex;
    width: 30px;
    height: 30px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const InputWrap = styled.div`
    display: flex;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML};
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Input = styled.input`
    display: flex;
    width: 248px;
    height: 23px;
    padding: 0px 0px ${(props) => props.theme.PADDINGS.PaddingXSML} ${(props) => props.theme.PaddingSML};
    align-items: flex-end;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusSML};
    border: 2px solid ${(props) => props.theme.COLORS.NEUTRALS.Foreground};
    background: ${(props) => props.theme.COLORS.NEUTRALS.Background};
    color: ${(props) => props.theme.COLORS.NEUTRALS.Foreground};
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const ConfirmButton = styled.button`
    display: flex;
    height: 25px;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: ${(props) => props.theme.COLORS.MAIN.Blue};
    color: ${(props) => props.theme.COLORS.NEUTRALS.Background};
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
