import { useSelector } from "react-redux"

const ProductScreen = () => {
	const {products} = useSelector((state) => state.product) 

	return (
		<div>
			ProductScreen
		</div>
	)
}
export default ProductScreen