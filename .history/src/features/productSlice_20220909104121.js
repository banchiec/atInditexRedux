import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
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
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer