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
			ProductScreen
		</div>
	)

}
export default ProductScreen