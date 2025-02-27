import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDetails } from 'shared/api/Details';

export const fetchDetails = createAsyncThunk('details/fetchDetails', async (url, { rejectWithValue }) => {
    try {
        const response = await getDetails(url);
        if (response.status !== 200) {
            throw new Error('Ошибка загрузки дополнительной информации');
        }
        return await response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const detailsSlice = createSlice({
    name: 'details',
    initialState: { 
        details: null, 
        loading: false, 
        error: null,
        films: [],
        species: [],
        pilots: [],
        starships: [],
        vehicles: [],
        residents: [],
    },
    reducers: {
        removeList: (state) => {
            state.details = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload.films;
                state.species = action.payload.species;
                state.pilots = action.payload.pilots;
                state.starships = action.payload.starships;
                state.vehicles = action.payload.vehicles;
                state.residents = action.payload.residents;
                state.details = action.payload;
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { removeList } = detailsSlice.actions;
export default detailsSlice.reducer;
