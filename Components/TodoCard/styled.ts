import { styled } from "styled-components";

export const TodoCard = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: ${(props) => props.theme.COLORS.NEUTRALS.Background};
`;

export const TodoNameWrapper = styled.div`
    display: flex;
    width: 186px;
    height: 78px;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML} 0px 0px ${(props) => props.theme.PADDINGS.PaddingMD};
    align-items: flex-start;
`;

interface TodoNameCustomProps {
    $done: boolean,
}

export const TodoName = styled.p<TodoNameCustomProps>`
    ${(props) => props.$done && `text-decoration-line: line-through;`}
    color: ${(props) => props.theme.COLORS.NEUTRALS.Foreground};
    text-align: center;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TodoOptions = styled.div`
    display: flex;
    width: 46px;
    height: 78px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.SPACINGS.SpacingSML};
`;

export const OptionDiv = styled.div`
    cursor: pointer;
    display: flex;
    padding: ${(props) => props.theme.PADDINGS.PaddingXSML};
    justify-content: center;
    align-items: center;
`;

export const AdjustAlign = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
