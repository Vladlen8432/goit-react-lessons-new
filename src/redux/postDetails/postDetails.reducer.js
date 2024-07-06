import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostDetails = createAsyncThunk(
  'postDetails/get',
  async (postId, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchPostDetails2 = createAsyncThunk(
  'postDetails2/get',
  async (postId, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  postDetails: null,
  isLoading: false,
  error: null,
};

const postDetailsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchPostDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postDetails = payload;
      })
      .addCase(fetchPostDetails2.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addMatcher(
        isAnyOf(fetchPostDetails2.pending, fetchPostDetails.pending),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchPostDetails2.rejected, fetchPostDetails.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const postDetailsReducer = postDetailsSlice.reducer;
