import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      console.log(data);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  authrnticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
