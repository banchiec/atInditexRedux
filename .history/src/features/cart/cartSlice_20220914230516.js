import axios from "axios"

const in

export const fetchSetProductCart = createAsyncThunk('cart/fetchSetProductCart', (itemCart) => {
	return axios
		.post(`https://front-test-api.herokuapp.com/api/cart`, itemCart)
		.then((response) => {
			console.log(response.data);
		})
}) 