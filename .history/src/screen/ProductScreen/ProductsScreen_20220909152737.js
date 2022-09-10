import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../features/product/productSlice";

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
				<h1>Loading</h1>
			): (
				<h2>cargado</h2>
			) 
			}
		</div>
	)

}
export default ProductScreen