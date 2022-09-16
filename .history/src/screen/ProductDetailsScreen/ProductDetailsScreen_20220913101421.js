import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchProductDetail } from "../../features/product/productSlice"
import { Actions, Container, Description, Features, Image } from "./productDetailsScreenStyled"

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
					<Image>
						<img src={productDetails.imgUrl}/>
						<h3>{productDetails.model}</h3>
					</Image>
					<Description>
						<Features>
							<ul>
								<li data-test='brand'><strong>Marca:</strong>{productDetails.brand}</li>
								<li data-test='model'><strong>Modelo:</strong>{productDetails.model}</li>
								<li data-test='price'><strong>Precio:</strong>{productDetails.price}</li>
								<li data-test='cpu'><strong>CPU:</strong>{productDetails.cpu}</li>
								<li data-test='ram'><strong>RAM:</strong>{productDetails.ram}</li>
								<li data-test='OS'><strong>Sistema operativo:</strong>{productDetails.os}</li>
								<li data-test='display-resolution'><strong>Resolución de pantalla:</strong>{productDetails.displayResolution}</li>
								<li data-test='battery'><strong>Bateria: </strong>{productDetails.battery}</li>
								<li data-test='primary-camera'><strong>Cámara principal:</strong> {productDetails.primaryCamera}</li>
								<li data-test='secondary-camera'><strong>Cámara secundaria:</strong>{productDetails.secondaryCmera}</li>
								<li data-test='dimentions'><strong>Dimesiones:</strong>{productDetails.dimentions}</li>
								<li data-test='weight'><strong>Peso:</strong>{productDetails.weight}</li>
							</ul>
						</Features>
						<Actions></Actions>
					</Description>
				</>
			):(
				<h1>Loader</h1>
			)}
		</Container>
	)
}
export default  ProductDetailsScreen
