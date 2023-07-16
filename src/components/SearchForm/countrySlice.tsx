import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CountryResponse } from '../../types/country-response'
import { getRequest } from '../../services/requests';
import { AppDispatch } from '../../store/store';

interface CountryState {
    data: CountryResponse[] | [];
    loading: boolean;
    error: string | null;
}

const initialState: CountryState = {
    data: [],
    loading: false,
    error: null,
};

export const countrySlice = createSlice({
    name: 'capital',
    initialState,
    reducers: {
        fetchCountryStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCountrySuccess: (state, action: PayloadAction<CountryResponse[]>) => {
            state.data = action.payload;
            state.loading = false;
        },
        fetchCountryFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const { fetchCountryStart, fetchCountrySuccess, fetchCountryFailure } = countrySlice.actions;

type AppThunk = (dispatch: AppDispatch) => Promise<void>;

export const fetchCountry = (capital: string): AppThunk => async (dispatch): Promise<void> => {
    try {
        dispatch(fetchCountryStart());
        const response = await getRequest(`https://restcountries.com/v2/capital/${capital}`);
        dispatch(fetchCountrySuccess(response));
    } catch (error) {
        dispatch(fetchCountryFailure((error as Error).message));
    }
};

export default countrySlice.reducer
