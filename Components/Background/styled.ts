import { styled } from "styled-components";
import bg from '@/assets/background/bg.png';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(23, 24, 62, 0.94);
    background-image: url(${bg.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
