import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '@/global/ResetCSS';
import * as Themes from '@/global/Themes';
import * as S from './styled';
import AddPane from '@/Components/AddPane/AddPane';
import Background from '@/Components/Background/Background';
import TodoList from '@/Components/TodoList/TodoList';

export default function Main() {

  const tasks = [
      {
          name: 'task A',
          done: false,
      }
  ];

  return (
    <>
      <ThemeProvider theme={Themes}>
        <ResetCSS />
        <S.PageContainer>
          <Background />
          <S.Header>
            <AddPane />
          </S.Header>
          <S.Main>
            <TodoList propTasks={tasks}/>
          </S.Main>
        </S.PageContainer>
      </ThemeProvider>
    </>
  )
}
