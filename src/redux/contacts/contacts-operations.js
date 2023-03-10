import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import { instance } from '../auth/auth-operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get('/contacts', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
  try {
    const response = await instance.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
