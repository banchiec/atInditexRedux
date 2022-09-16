import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import AlertTime from "../../components/Alerts/AlertIme/AlertTime";
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import Loader from "../../components/Loader/Loader";
import { fetchProducts } from "../../features/product/productSlice";
import { getWithExpiry } from "../../utils/localStorage";
import { Container, ContainerCards, Filter, Search } from "./productScreenStyled";

const ProductScreen = () => {
	const dispatch = useDispatch()
  const { loadingListProducts, products }= useSelector((state) => state.product)

	const [value, setValue] = useState('')
	const [currentProducts, setCurrentProducts] = useState([])
	const [productsSearch, setProductSearch] = useState([])
	const [alert ,setAlert] = useState(null)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	useEffect(() => {
		if(products){
			setCurrentProducts(products)
			setProductSearch(products)
		}
	}, [products])

	useEffect(() => {
		return ( ) => {
			setInterval(() => {
				if(getWithExpiry('products') === null) {
					setAlert(
						<AlertTime
							text='Es necesario volver a solictar los datos.'
							handleGetProduct = {handleGetProduct}
						/>
						)
					setCurrentProducts([])
				}
			}, 4000);
		}
	}, [])

	const handleGetProduct = () => {
		setAlert(null)
		dispatch(fetchProducts())
	}

	const handleSearchProduct = (e) => {
		setValue(e.target.value)
		filter(e.target.value)
	}
	const filter = (searchText) => {
		let resutlsSearch = productsSearch.filter((product) => {
      if(product.brand.toString().toLowerCase().includes(searchText.toLowerCase())
        || product.model.toString().toLowerCase().includes(searchText.toLowerCase())){
        return product
      }
    })
    setCurrentProducts(resutlsSearch)
	}
	return (
		<div>
			{loadingListProducts? (
				<Loader/>
			): (
				<Container>
					<Filter>
						<h4>Buscar Productos</h4>
						<Search
							type='text'
							placeholder="Search"
							value={value}
							onChange={(e) => handleSearchProduct(e)}
						/>
					</Filter>
					<ContainerCards>
						{ currentProducts.map((product) => {
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
			{alert}
		</div>
	)

}
export default ProductScreen