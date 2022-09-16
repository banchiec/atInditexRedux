import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import SelectButton from "../../components/Buttons/SelectButton/SelectButton"
import { fetchProductDetail } from "../../features/product/productSlice"
import { setWithExpiry } from "../../utils/localStorage"
import { Actions, Button, Container, Description, Features, Image, Option, Selections } from "./productDetailsScreenStyled"

const ProductDetailsScreen = () => {
	const {id} = useParams()
	const dispatch = useDispatch()

	const { loadingDetailsProduct, successDetailsProduct, productDetails } = useSelector((state) => state.product)
	const [optionColors, setOptionColors] = useState({})
	const [optionStorage, setOptionStorage] = useState({})
	const [colors, setColors] = useState(true)
	const [alert, setAlert] = useState(false)

	useEffect(() => {
		dispatch(fetchProductDetail(id))
	}, [])

	useEffect(() => {
		if(successDetailsProduct){
			console.log(productDetails);
			const colors = productDetails?.colors?.map((color) => {
				return({
					name: color,
					active: false
				})
			})
			setOptionColors({
				name: 'colors',
				values: colors
			})

			const stored = productDetails?.internalMemory?.map((store) => {
				return({
					name: store,
					values: false,
				})
			})
			setOptionStorage({
				name:'storage',
				values: stored
			})
		}
	}, [successDetailsProduct])

	useEffect(() => {
	 	!setWithExpiry('productDetails') ? setAlert(false) : setAlert(true) 
	}, [alert])

	const handleSelectionOptions = (name, option) => {
		if(name === 'colors'){
      const newValuesColors =  optionColors.values.map((color) => {
        color.active = false
        if(color.name === option){
          color.active = !color.active
        }
        return color 
      }) 
      setOptionColors({ 
        name: 'colors',
        valuesColors: newValuesColors
      })
    }
    if(name === 'storage'){
      const newValuesStorage =  optionStorage.values.map((item) => {
        item.active = false
        if(item.name === option){
          item.active = !item.active 
        }
        return item 
      }) 
      setSelectorStorage({ 
        name: 'storage',
        valuesStorage: newValuesStorage 
      })
    }
	}

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
						<Actions>
							<Selections>
								{ colors && optionColors?.colors?.map((item) => {
									return(
										<SelectButton 
											key={item.name}
											name={item.name}
											color={item.name}
											item={item}
											handleSelectionOptions={handleSelectionOptions}
										/>
									)
								})}
							</Selections>
						</Actions>
					</Description>
				</>
			):(
				<h1>Loader</h1>
			)}
			{alert}
		</Container>
	)
}
export default  ProductDetailsScreen
