import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, deleteContacts, redactContacts } from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => handleRejected(state, action))

      .addCase(addContacts.pending, state => handlePending(state))
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => handleRejected(state, action))

      .addCase(deleteContacts.pending, state => handlePending(state))
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => handleRejected(state, action))

      .addCase(redactContacts.pending, state => handlePending(state))
      .addCase(redactContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.number = action.payload.number;
          }
          return item;
        });
      })
      .addCase(redactContacts.rejected, (state, action) => handleRejected(state, action));
  },
});

export const contactsReducer = contactsSlice.reducer;
