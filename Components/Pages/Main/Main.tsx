'use client';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from '@/global/ResetCSS';
import * as Themes from '@/global/Themes';
import * as S from './styled';
import AddPane from '@/Components/AddPane/AddPane';
import Background from '@/Components/Background/Background';
import TodoList from '@/Components/TodoList/TodoList';
import { useState } from 'react';
import { mock } from '@/mock/data';
import UpdateModal from '@/Components/UpdateModal/UpdateModal';
import DeleteModal from '@/Components/DeleteModal/DeleteModal';
import useComponentVisible from '@/hooks/useComponentVisible';
import ModalOverlay from '@/Components/ModalOverlay/ModalOverlay';

export default function Main() {

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false, handleCloseModal);
  const [tasks, setTasks] = useState(mock);
  const [modalType, setModalType] = useState('update');
  const [taskId, setTaskId] = useState(-1);

  function onAdd(name: string) {
    setTasks([...tasks, { name, done: false }]);
    console.log(tasks)
  }

  function onDone(taskId: number) {
    const newTasks = tasks.map((task, index) => index === taskId ? {...task, done: !task.done} : task);
    setTasks(newTasks);
  }

  function handleShowModal(modalType: 'update' | 'delete') {
    setModalType(modalType);
    setIsComponentVisible(true);
  }

  function handleCloseModal() {
      setIsComponentVisible(false);
  }

  function onUpdate(taskId: number) {
    console.log('onUpdate', modalType);
      setTaskId(taskId);
      handleShowModal('update');
  }

  function onConfirmUpdate(name: string) {
      const newTasks = tasks.map((task, index) => index === taskId ? {...task, name: name} : task);
      setTasks(newTasks);
      handleCloseModal();
  }

  function onRemove(taskId: number) {
    console.log('onRemove', modalType);
      setTaskId(taskId);
      handleShowModal('delete');
  }

  function onConfirmRemove() {
      const newTasks = tasks.filter((task, index) => index !== taskId);
      setTasks(newTasks);
      handleCloseModal();
  }

  return (
    <>
      <ThemeProvider theme={Themes}>
        <ResetCSS />
        <S.PageContainer>
          <Background />
          <S.Header>
            <AddPane onAdd={(name) => onAdd(name)}/>
          </S.Header>
          <S.Main>
            <TodoList onUpdate={onUpdate} onRemove={onRemove} onDone={onDone} propTasks={tasks}/>
            <ModalOverlay show={isComponentVisible}>
              <div ref={ref}>
                { isComponentVisible ?
                    <>
                        {modalType === 'update' && <UpdateModal handleConfirmUpdate={(name) => onConfirmUpdate(name)} handleClose={() => handleCloseModal()}/>}
                        {modalType === 'delete' && <DeleteModal handleConfirmDelete={() => onConfirmRemove()} handleClose={() => handleCloseModal()}/>}
                    </>
                    :
                    <></>
                }
              </div>
            </ModalOverlay>
          </S.Main>
        </S.PageContainer>
      </ThemeProvider>
    </>
  )
}
