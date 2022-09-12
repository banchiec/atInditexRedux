import { render as rtlRender } from "@testing-library/react"
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../App/store';
import { createMemoryHistory } from "history";
import ProductScreen from './ProductsScreen.js'
import ProductDetailsScreen from "../ProductDetailsScreen/ProductDetailsScreen";

const render = component => rtlRender(
	<Provider store={store}>
		{component}
	</Provider>
)

describe('Checking routes' ,() => {
	})
	test('Render ProductDetailsScreen component', () => {
	test('Render ProductScreen component', () => {
		const history = createMemoryHistory('/product/details/:id')
		render(
			<Router history={history}>
				<ProductDetailsScreen />
			</Router>
		)
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<ProductDetailsScreen />
			</Router>
		)
	})
})