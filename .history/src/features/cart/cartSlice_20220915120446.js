import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
	count: 0,
	loadingRegisterCart : false,
	succesRegisterCart : false,
	errrorRegisterCart :  false
}


export const fetchSetProductCart = createAsyncThunk('cart/fetchSetProductCart', (itemCart) => {
	return axios
		.post(`https://front-test-api.herokuapp.com/api/cart`, itemCart)
		.then((response) => {
			console.log(response.data);
		})
}) 
export const cartSlice = createSlice ({
	name: 'cart',
	initialState,
	extraReducers:(builder) => {
		builder.addCase(fetchSetProductCart.pending, (state) => {
			state.loadingRegisterCart = true
		}),
		builder.addCase(fetchSetProductCart.fulfilled, (state, action) => {
			state.loadingRegisterCart = false,
			state.succesRegisterCart = true,
			state.count = action
		})
	}
})