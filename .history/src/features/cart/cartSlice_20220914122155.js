import axios from "axios"

export const fetchSetProductCart = createAsyncThunk('cart/fetchSetProductCart', (itemCart) => {
	return axios
		.post(`https://front-test-api.herokuapp.com/api/product`)
}) 