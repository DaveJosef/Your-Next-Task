import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '@/global/ResetCSS';
import * as Themes from '@/global/Themes';
import * as S from './styled';
import AddPane from '@/Components/AddPane/AddPane';

export default function Main() {
  return (
    <>
      <ThemeProvider theme={Themes}>
        <ResetCSS />
        <S.PageContainer>
          <S.Header>
            <AddPane />
          </S.Header>
          <S.Main>
            Main
          </S.Main>
        </S.PageContainer>
      </ThemeProvider>
    </>
  )
}
