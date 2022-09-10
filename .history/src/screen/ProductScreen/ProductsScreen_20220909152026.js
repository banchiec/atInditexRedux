import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const ProductScreen = () => {
	const dispatch = useDispatch()
	const {products} = useSelector((state) => state.product) 

	console.log(products);
	useEffect(() => {

	}, [])

	return (
		<div>
			ProductScreen
		</div>
	)

}
export default ProductScreen