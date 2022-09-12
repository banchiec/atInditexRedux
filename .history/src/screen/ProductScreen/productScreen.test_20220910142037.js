import { render } from '@testing-library/react'
import { Router } from 'express'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../../App'
import ProductScreen from './ProductsScreen'
test ('renders App', async () => {
	render(
		<Router>
			<ProductScreen/>
		</Router>
	)
})