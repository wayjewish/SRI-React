import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketState {
  title: string | null;
  genre: string | null;
  cinema: string | null;
}

const initialState: IBasketState = {
  title: null,
  genre: null,
  cinema: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    setFilterGenre: (state, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
    setFilterCinema: (state, action: PayloadAction<string | null>) => {
      state.cinema = action.payload;
    },
  },
});

export const { setFilterTitle, setFilterGenre, setFilterCinema } =
  filtersSlice.actions;

export default filtersSlice.reducer;
