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
								<li data-test='brand'><strong>Marca:</strong>{productDetails.brand}</li>
								<li data-test='model'><strong>Modelo:</strong>{productDetails.model}</li>
								<li data-test='price'><strong>Precio:</strong>{productDetails.price}</li>
								<li data-test='cpu'><strong>CPU:</strong>{productDetails.cpu}</li>
								<li data-test='ram'><strong>RAM:</strong>{productDetails.ram}</li>
								<li data-test='OS'><stron></stron>Sistema operativo: {productDetails.os}</li>
								<li data-test='display-resolution'>Resolución de pantalla: {productDetails.displayResolution}</li>
								<li data-test='batery'>Bateria: {productDetails.batery}</li>
								<li data-test='primary-camera'>Cámara principal: {productDetails.primaryCamera}</li>
								<li data-test='secondary-camera'>Cámara secundaria: {productDetails.decondaryCmera}</li>
								<li data-test='dimentions'>Dimesiones: {productDetails.dimentions}</li>
								<li data-test='weight'>Peso: {productDetails.weight}</li>
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
