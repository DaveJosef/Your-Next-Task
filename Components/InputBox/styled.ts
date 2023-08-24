import { styled } from "styled-components";

export const InputBox = styled.input`
    display: flex;
    width: 248px;
    height: 23px;
    padding: 0px 0px ${(props) => props.theme.PADDINGS.PaddingXSML} ${(props) => props.theme.PADDINGS.PaddingSML};
    align-items: flex-end;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusSML};
    background: ${(props) => props.theme.COLORS.NEUTRALS.Background};
`;
