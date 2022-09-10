import { useSelector } from "react-redux"

const ProductScreen = () => {
	const {user} = useSelector((state) => state.user) 
	return (
		<div>
			ProductScreen
		</div>
	)
}
export default ProductScreen