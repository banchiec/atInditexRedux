import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"
import { Container } from "./productDetailsScreenStyled"

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
			<h1>{productDetails.name}</h1>
			<img src="" />
		</Container>
	)
}
export default  ProductDetailsScreen
