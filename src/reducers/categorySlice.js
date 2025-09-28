import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../api/api'


export const getCategory = createAsyncThunk('categoryData/getCategory', async () => {
  try {
    const {data} = await axios.get(`${API}/Category/get-categories`);
    return data.data
  } catch (error) {
    console.error(error)
  }
})


const initialState = {
  isLoading: false,
  error: null,
  categoryData: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryData = action.payload;
        state.error = null
      })
      .addCase(getCategory.rejected,  (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

  }
})




export default categorySlice.reducer