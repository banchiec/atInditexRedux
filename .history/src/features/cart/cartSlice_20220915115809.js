import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchSetProductCart = createAsyncThunk('cart/fetchSetProductCart', (itemCart) => {
	return axios
		.post(`https://front-test-api.herokuapp.com/api/cart`, itemCart)
		.then((response) => {
			console.log(response.data);
		})
}) 
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	extraReducers:(builder) => {
		
	}
})