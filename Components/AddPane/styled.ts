import { styled } from "styled-components";

export const AddPane = styled.form`
    display: flex;
    padding: ${(props) => props.theme.PADDINGS.PaddingMD};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.SPACINGS.SpacingMD};
    border-radius: ${(props) => props.theme.CORNERS.BorderRadiusMD};
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.05) 51.00%, rgba(255, 255, 255, 0.11) 100%);
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
`;
