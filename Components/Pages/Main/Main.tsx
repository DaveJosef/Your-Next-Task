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
import { add, markAsDone, remove, update } from '@/redux/features/task-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';

export default function Main() {

  const tasks = useAppSelector((state) => state.taskReducer.value.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false, handleCloseModal);
  const [modalType, setModalType] = useState('update');
  const [selectedTaskId, setSelectedTaskId] = useState(-1);

  function onAdd(name: string) {
    dispatch(add(name));
  }

  function onDone(taskId: number) {
    dispatch(markAsDone(taskId));
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
      setSelectedTaskId(taskId);
      handleShowModal('update');
  }

  function onConfirmUpdate(name: string) {
      dispatch(update({id: selectedTaskId, name}));
      handleCloseModal();
  }

  function onRemove(taskId: number) {
    console.log('onRemove', modalType);
      setSelectedTaskId(taskId);
      handleShowModal('delete');
  }

  function onConfirmRemove() {
      dispatch(remove(selectedTaskId));
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
