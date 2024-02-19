import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setContactsFilter(state, action) {
      state.name = action.payload;
    },
  },
  // const visibleUsers = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
  // );
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
