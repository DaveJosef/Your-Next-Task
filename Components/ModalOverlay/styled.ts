import { styled } from "styled-components";

interface ModalOverlayProps {
    $show: boolean,
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
    ${(props) => props.$show ? `display: block;` : `display: none;`}
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.4);
    backdrop-filter: blur(7px);
`;
