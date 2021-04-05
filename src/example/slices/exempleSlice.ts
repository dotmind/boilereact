import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExempleState {
  dogs: string[];
}

const initialState: ExempleState = {
  dogs: [],
};

export const exempleSlice = createSlice({
  name: 'exemple',
  initialState,
  reducers: {
    addDog: (state, action: PayloadAction<string>) => {
      state.dogs = [
        ...state.dogs,
        action.payload,
      ];
    },
  },
});

export const { addDog } = exempleSlice.actions;

export default exempleSlice.reducer;
