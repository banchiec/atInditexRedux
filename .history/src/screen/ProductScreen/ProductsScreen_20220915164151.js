import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import Loader from "../../components/Loader/Loader";
import { fetchProducts } from "../../features/product/productSlice";
import { Container, ContainerCards, Filter, Search } from "./productScreenStyled";

const ProductScreen = () => {
	const dispatch = useDispatch()
  const { loadingListProducts, products }= useSelector((state) => state.product)
	const [value, setValue] = useState('')
	const [currentProducts, setCurrentProducts] = useState([])
	const [product]

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	useEffect(() => {
		if(products){
			setCurrentProducts(products)
		}
	}, [])

	const handleSearchProduct = (e) => {
		setValue(e.target.value)
	}
	const filter = () => {
		let resutlsSearch = productsSearch.filter((product) => {
      if(product.brand.toString().toLowerCase().includes(searchText.toLowerCase())
        || product.model.toString().toLowerCase().includes(searchText.toLowerCase())){
        return product
      }
    })
    setProducts(resutlsSearch)
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
			
		</div>
	)

}
export default ProductScreen