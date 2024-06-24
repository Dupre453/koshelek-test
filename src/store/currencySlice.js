import { createSlice } from '@reduxjs/toolkit';
import '../styles/components/_currency.css'
export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        usd: '',
        eur: '',
        validationError: ''
    },
    reducers: {
        setUsd: (state, action) => {
            state.usd = action.payload;
            state.eur = (action.payload / 1.07).toFixed(2);
        },
        setEur: (state, action) => {
            state.eur = action.payload;
            state.usd = (action.payload * 1.07).toFixed(2);
        }
    }
});

export const { setUsd, setEur } = currencySlice.actions;

export default currencySlice.reducer;