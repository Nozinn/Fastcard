import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosNozina } from '../utils/token'

export const addToCart = createAsyncThunk("cart/addToCart", async (id) => {
    try {
        let { data } = await AxiosNozina.post(`/Cart/add-product-to-cart?id=${id}`)
        return data.data
    } catch (error) {
        console.error(error)
    }
})

export const getCart = createAsyncThunk("cart/getCart", async () => {
    try {
        let { data } = await AxiosNozina.get("/Cart/get-products-from-cart")
        return data.data
    } catch (error) {
        console.error(error)
    }
})

export const deleteProductFromCart = createAsyncThunk('cart/deleteProductFromCart', async (id, {dispatch}) => {
	try {
		await AxiosNozina.delete(`/Cart/delete-product-from-cart?id=${id}`)
		dispatch(getCart())
	} catch (error) {
		console.error(error)
	}
})


export const ClearCart = createAsyncThunk("cart/ClearCart", async () => {
	try {
		let {data} = await AxiosNozina.delete(`/Cart/clear-cart`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
})

const initialState = {
    cartData: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers(builder) {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cartData = action.payload
        })
    }
})

export default cartSlice.reducer