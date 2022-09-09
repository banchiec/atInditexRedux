import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from '../features/productSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})