import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"
import { Container, Description, Features } from "./productDetailsScreenStyled"

const ProductDetailsScreen = () => {
	const {id} = useParams()
	const dispatch = useDispatch()
	const { loadingDetailsProduct, successDetailsProduct, productDetails } = useSelector((state) => state.product)
	useEffect(() => {
		dispatch(fetchProductDetail(id))
	}, [])

	return(
		<Container>
			{ productDetails ? (
				<>
					<img src={productDetails.imgUrl}/>
					<Description>
						<Features>
							<ul>
								<li data-test='brand'>Marca: {productDetails.brand}</li>
								<li data-test='model'>Modelo: {productDetails.model}</li>
								<li data-test='price'>Precio: {productDetails.price}</li>
								<li data-test='cpu'>CPU: {productDetails.cpu}</li>
								<li data-test='ram'>RAM: {productDetails.ram}</li>
								<li data-test=''>Dimensiones: {productDetails.dimentions}</li>
								<li>Dimensiones: {productDetails.dimentions}</li>
								<li>Dimensiones: {productDetails.dimentions}</li>
							</ul>
						</Features>
					</Description>
				</>
			):(
				<h1>Loader</h1>
			)}
		</Container>
	)
}
export default  ProductDetailsScreen
