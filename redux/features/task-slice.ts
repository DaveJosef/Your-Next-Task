import { Task } from '@/types/task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: TasksState;
}

type TasksState = {
    tasks: Task[],
}

const initialState = {
    value: {
        tasks: [],
    } as TasksState,
} as InitialState;

type UpdatePayload = {
    id: number,
    name: string,
};

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const name = action.payload;
            return {
                value: {
                    ...state.value,
                    tasks: [...state.value.tasks, { name, done: false }],
                }
            };
        },
        markAsDone: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            return {
                value: {
                    ...state.value,
                    tasks: state.value.tasks.map((task, index) => index === id ? {...task, done: !task.done} : task),
                },
            };
        },
        update: (state, action: PayloadAction<UpdatePayload>) => {
            const { id, name } = action.payload;
            return {
                value: {
                    ...state.value,
                    tasks: state.value.tasks.map((task, index) => index === id ? {...task, name} : task),
                },
            };
        },
        remove: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            return {
                value: {
                    ...state.value,
                    tasks: state.value.tasks.filter((task, index) => index !== id),
                },
            };
        },
    }
});

export const { add, markAsDone, update, remove } = tasks.actions;
export default tasks.reducer;
