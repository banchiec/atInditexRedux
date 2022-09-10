import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import Loader from "../../components/Loader/Loader";
import { fetchProducts } from "../../features/product/productSlice";
import { Container, ContainerCards } from "./productScreenStyled";

const ProductScreen = () => {
	const dispatch = useDispatch()
  const { loadingListProducts, successListProducts, products }= useSelector((state) => state.product)

	console.log(products);

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	console.log(loadingListProducts);
	console.log(successListProducts);

	return (
		<div>
			{loadingListProducts? (
				<Loader/>
			): (
				<Container>
					<ContainerCards>
						{ products.map((product) => {
							return(
								<CardProduct
									key={product.id}
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