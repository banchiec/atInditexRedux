import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../features/counter/counterSlice'
import cartReducer
import productReducer  from '../features/product/productSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		product: productReducer,
		cart: cartReducer
	}
})