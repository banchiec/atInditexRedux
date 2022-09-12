import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"

const ProductDetailsScreen = () => {
	const {id} = useParams()
	const dispatch = useDispatch()
	const { loadingDetailsProduct, successDetailsProduct, productDetails } = useSelector((state) => state.product)
	
	console.log(productDetails);
	useEffect(() => {
		dispatch(fetchProductDetail(id))
	}, [])

	return(
		<Container>
				<h1>Details</h1>

		</Container>
	)
}
export default  ProductDetailsScreen
