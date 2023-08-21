import { styled } from "styled-components";

export const AddBtn = styled.button`
    &:hover {
        cursor: pointer;
        opacity: .7;
    }

    display: flex;
    width: 248px;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: linear-gradient(135deg, ${(props) => props.theme.COLORS.MAIN.Purple} 0%, ${(props) => props.theme.COLORS.MAIN.Blue} 100%);

    p {
        display: flex;
        height: 33px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: ${(props) => props.theme.COLORS.NEUTRALS.Background};
        text-align: center;
        font-family: Poppins, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
`;
