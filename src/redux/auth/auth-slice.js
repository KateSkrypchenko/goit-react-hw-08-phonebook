import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, current } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => handlePending(state))
      .addCase(register.fulfilled, (state, action) => handleFulfilled(state, action))
      .addCase(register.rejected, (state, action) => handleRejected(state, action))

      .addCase(login.pending, state => handlePending(state))
      .addCase(login.fulfilled, (state, action) => handleFulfilled(state, action))
      .addCase(login.rejected, (state, action) => handleRejected(state, action))

      .addCase(logout.pending, state => handlePending(state))
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => handleRejected(state, action))

      .addCase(current.pending, state => handlePending(state))
      .addCase(current.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(current.rejected, (state, action) => handleRejected(state, action));
  },
});

export const authReducer = authSlice.reducer;
