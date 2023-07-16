import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../components/SearchForm/countrySlice';

const createStore = () => configureStore({
    reducer: {
        country: countryReducer,
    },
});

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
