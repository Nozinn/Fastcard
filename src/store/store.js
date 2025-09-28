import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../reducers/categorySlice'
import  productSlice  from '../reducers/productSlice'
import  cartSlice  from '../reducers/cartSlice'

export const store = configureStore({
	reducer: {
		category: categorySlice,
		product: productSlice,
		cart: cartSlice,
		
	},
})
