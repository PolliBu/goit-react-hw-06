import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setContactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
