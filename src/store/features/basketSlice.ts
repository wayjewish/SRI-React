import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketState {
  test: 'test';
}

const initialState: IBasketState = {
  test: 'test',
};

export const filmsSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
});

// export const {} = filmsSlice.actions;

export default filmsSlice.reducer;
