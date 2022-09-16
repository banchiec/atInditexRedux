import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import Loader from "../../components/Loader/Loader";
import { fetchProducts } from "../../features/product/productSlice";
import { Container, ContainerCards, Filter } from "./productScreenStyled";

const ProductScreen = () => {
	const dispatch = useDispatch()
  const { loadingListProducts, products }= useSelector((state) => state.product)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	const handleSearchProduct = (e) => {
	}
	return (
		<div>
			{loadingListProducts? (
				<Loader/>
			): (
				<Container>
					<Filter>
						<h4>Buscar Productos</h4>

					</Filter>
					<ContainerCards>
						{ products.map((product) => {
							return(
								<CardProduct
									id={product.id}	
									key={product.id}
									imgUrl = {product.imgUrl}
									model={product.model}
									price={product.price}
									brand={product.brand}
								/>
							)
						})}

					</ContainerCards>
				</Container>
			)}
			
		</div>
	)

}
export default ProductScreen