import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataList } from 'shared/api/DataList';


export const fetchDataList = createAsyncThunk('data/fetchList', async ({ categories, page }, { rejectWithValue, getState }) => {
    try {
        
        const response = await getDataList(categories, page);
        if (response.status !== 200) {
            throw new Error('Ошибка загрузки списка');
        }
        return await response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const dataListSlice = createSlice({
    name: 'dataList',
    initialState: { 
        dataList: null, 
        loading: false, 
        error: null 
    },
    reducers: {
        removeList: (state) => {
            state.dataList = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataList.fulfilled, (state, action) => {
                state.loading = false;
                state.dataList = action.payload;
            })
            .addCase(fetchDataList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { removeList } = dataListSlice.actions;
export default dataListSlice.reducer;
