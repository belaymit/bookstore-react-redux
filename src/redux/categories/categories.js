import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {},
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.categories = payload;
    },
  },
});

export const { addCategories } = categorySlice.actions;
export default categorySlice.reducer;
