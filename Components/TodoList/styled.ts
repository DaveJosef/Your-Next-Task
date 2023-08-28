import { styled } from "styled-components";

export const ScrollContainer = styled.div`
    display: flex;
    width: 288px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
`;

export const TodoList = styled.div`
    display: flex;
    width: 288px;
    padding: ${(props) => props.theme.PADDINGS.PaddingLG} 0px;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.SPACINGS.SpacingMD};
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.05) 46.62%, rgba(255, 255, 255, 0.11) 100%);
`;
