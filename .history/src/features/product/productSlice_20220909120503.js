import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	loadingListProducts: false,
  successListProducts: false,
  errorListProducts: false,
	products: [],
}

export const fetchProducts  = createAsyncThunk('product/fetchProducts', () => {
	return axios
		.get('https://front-test-api.herokuapp.com/api/product')
		.then((response) => response.map((product) => product.kljsadlfkja))
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loadingListProducts= true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loadingListProducts = false 
      state.successListProducts = true
      state.errorListProducts = false
      state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) =>{
      state.loadingListProducts= false
      state.successListProducts = false
      state.errorListProducts = true
      state.products = []
      state.errorListProducts = action.error.message 
    })
  }
})

// export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer