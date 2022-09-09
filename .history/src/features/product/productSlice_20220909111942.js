import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	isLoading: false,
	products: [],
  error: '',
}

export const fetchProducts  = createAsyncThunk('product/fetchProducts', () => {
	return axios
		.get('https://front-test-api.herokuapp.com/api/product')
		.then((response) => response.data.map((product) => product.id))
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending ,(state) => {
      state.isLoading = true
    },
    productSuccess: (state) => {
      state.value -= 1
    },
    productFail: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer