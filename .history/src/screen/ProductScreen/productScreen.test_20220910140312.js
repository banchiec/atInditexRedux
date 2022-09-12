import { render } from '@testing-library/react'
import CardProduct from '../../components/Cards/CardProduct/CardProduct'
test ('renders cardProduct', () => {
	const component = render(<CardProduct/>)
	console.log(component);
})