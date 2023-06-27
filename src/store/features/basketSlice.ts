import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasketState {
  [index: string]: number;
}

const initialState: IBasketState = {};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addOneBasket: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      if (state[key] !== undefined) {
        if (state[key] < 30) state[key]++;
      } else {
        state[key] = 1;
      }
    },
    removeOneBasket: (state, action: PayloadAction<string>) => {
      const key = action.payload;

      if (state[key] > 0) state[key] -= 1;
      if (state[key] <= 0) delete state[key];
    },
    removeBasket: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      delete state[key];
    },
  },
});

export const { addOneBasket, removeOneBasket, removeBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
