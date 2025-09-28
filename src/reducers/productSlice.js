import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../api/api'

export const getProduct = createAsyncThunk(
	'productData/getProduct',
	async () => {
		try {
			const { data } = await axios.get(`${API}/Product/get-products`)
			return data.data
		} catch (error) {
			console.error(error)
		}
	}
)

export const productById = createAsyncThunk(
	'productData/productById',
	async (id) => {
		try {
			const { data } = await axios.get(`${API}/Product/get-product-by-id?id=${id}`)
			return data.data  
		} catch (error) {
			console.error(error)
   
		}
	}
)

const initialState = {
	isLoading: false,
	error: null,
	productData: [],
	productDataById: [],
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProduct.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.isLoading = false
				state.productData = action.payload
				state.error = null
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
			.addCase(productById.fulfilled, (state, action) => {
				state.productDataById = action.payload
			})
	},
})

export default productSlice.reducer
