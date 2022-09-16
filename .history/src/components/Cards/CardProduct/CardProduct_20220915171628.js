import { Link } from 'react-router-dom'
import {Card} from './cardProductStyled.js'

const CardProduct = ({ id, imgUrl, model, price, brand}) => {
	return(
		<Card>
			<Link to={`/product/details/${id}`}>
				<div>
					<img src={imgUrl} alt={imgUrl}/>
					<h4>{model}</h4>
				</div>
				<article>
					<h5 className='card_brand'>{`Marca:  ${brand}`}</h5>
					<p>con tu tarifa Móvil desde <span>{`€${price}`}</span></p>
				</article>
			</Link>
		</Card>
	)
} 
export default CardProduct