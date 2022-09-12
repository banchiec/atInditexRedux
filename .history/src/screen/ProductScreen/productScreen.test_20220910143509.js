import { render } from '@testing-library/react'
import { Router } from 'express'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductScreen from './ProductsScreen'
test ('renders App', async () => {
	render(
		<ProductScreen/>
	)
})