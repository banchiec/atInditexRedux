import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
	count: 0,
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
		builder.addCase(fetch)
	}
})