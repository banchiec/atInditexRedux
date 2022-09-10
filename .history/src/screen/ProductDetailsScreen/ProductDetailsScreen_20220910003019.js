import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProductDetail } from "../../features/product/productSlice"

const ProductDetailsScreen = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchProductDetail())
	}, [])

	return(
		<h1>Details</h1>
	)
}
export default  ProductDetailsScreen
