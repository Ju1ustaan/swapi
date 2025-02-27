import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAdditional } from 'shared/api/Additional';

export const fetchAdditional = createAsyncThunk('additional/fetchAdditional', async (url, { rejectWithValue }) => {
    try {
        const response = await getAdditional(url);
        if (response.status !== 200) {
            throw new Error('Ошибка загрузки дополнительной информации');
        }
        return await response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const additionalSlice = createSlice({
    name: 'additional',
    initialState: {
        loading: false, 
        error: null,
        result: null,
        films: [],
        pilots: [],
        starships: [],
        vehicles: [],
        residents: [],
        species: [],
    },
    reducers: {
        removeAdditional: (state) => {
            state.result = null;
           state.films = [] 
           state.pilots = [] 
           state.starships = [] 
           state.vehicles = [] 
           state.residents = [] 
            state.species = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdditional.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdditional.fulfilled, (state, action) => {
                if(action.meta.arg.includes('films')){
                    state.films = [...state.films, action.payload];
                }else if(action.meta.arg.includes('pilots')){
                    state.pilots = [...state.pilots, action.payload];
                }else if(action.meta.arg.includes('starships')){
                    state.starships = [...state.starships, action.payload];
                }else if(action.meta.arg.includes('vehicles')){
                    state.vehicles = [...state.vehicles, action.payload];
                }else if(action.meta.arg.includes('residents')){
                    state.residents = [...state.residents, action.payload];
                }else{
                    state.species = [...state.species, action.payload];
                }
                
                state.loading = false;
                state.result = action.payload;
            })
            .addCase(fetchAdditional.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { removeAdditional } = additionalSlice.actions;
export default additionalSlice.reducer;
