import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
	count: 0,
	loadingRegisterCart : false,
	succesRegisterCart : false,
	errrorRegisterCart :  false
}


export const fetchSetItemCart = createAsyncThunk('cart/fetchSetItemCart', (itemCart) => {
	return axios
		.post(`https://front-test-api.herokuapp.com/api/cart`, itemCart)
		.then((response) => response.data.count)
}) 
export const cartSlice = createSlice ({
	name: 'cart',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchSetItemCart.pending, (state) => {
			state.loadingRegisterCart = true
		})	
		builder.addCase(fetchSetItemCart.fulfilled, (state, action) => {
			state.loadingRegisterCart = false 
			state.succesRegisterCart = true
			console.log(state.count);
			state.count = state.count + action.payload
			console.log(state.count);
		})
	}
})