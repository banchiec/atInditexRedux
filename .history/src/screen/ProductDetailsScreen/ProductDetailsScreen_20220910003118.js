import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"

const ProductDetailsScreen = () => {
	const {id} = useParams()
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchProductDetail(id))
	}, [])

	return(
		<h1>Details</h1>
	)
}
export default  ProductDetailsScreen
