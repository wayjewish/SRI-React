import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';
import filtersReducer from './features/filtersSlice';
import { movieApi } from './services/movieApi';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    basket: basketReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
