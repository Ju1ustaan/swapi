import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: { value: 1 },
    reducers: {
        next: (state) => {
            state.value += 1;
        },
        prev: (state) => {
            state.value -= 1;
        },
        removePagination: (state) => {
            state.value = 1;
        }
    },
});

export const { next, prev, removePagination } = paginationSlice.actions;
export default paginationSlice.reducer;
