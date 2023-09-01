import { styled } from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background: transparent;
`;

export const Header = styled.header`
    display: flex;
    width: 360px;
    height: 163px;
    padding: ${(props) => props.theme.PADDINGS.PaddingSML} 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const Main = styled.main`
    overflow: scroll;
    display: flex;
    width: 360px;
    height: 75%;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
`;
