import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"
import { Container, Description, Features } from "./productDetailsScreenStyled"

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
			<img src={productDetails.imgUrl}/>
			<h1>{productDetails.brand}</h1>
			<Description>
				<Features>
					<ul>
						<li>{productDetails.dimentions}</li>
					</ul>
				</Features>
			</Description>
		</Container>
	)
}
export default  ProductDetailsScreen
