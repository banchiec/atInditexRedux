import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../features/counter/counterSlice'
import cartReducer from '../features/cart/'
import productReducer  from '../features/product/productSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		product: productReducer,
		cart: cartReducer
	}
})