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
		.then((response) => response.data.map((product) => product))
     
     .catch((error) => console.log(error))
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = true
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) =>{
      state.isLoading = false
      state.products = []
      state.error = action.error.message 
    })
  }
})

// export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer