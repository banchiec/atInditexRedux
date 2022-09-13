import { render as rtlRender, screen } from "@testing-library/react"
import App from './App'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './App/store';
import { createMemoryHistory } from "history";
import ProductScreen from "./screen/ProductScreen/ProductsScreen";
import ProductDetailsScreen from "./screen/ProductDetailsScreen/ProductDetailsScreen";

const render = component => rtlRender(
	<Provider store={store}>
		{component}
	</Provider>
)



describe('Test de App render', () => {
	test('Test', () => {
		render(<App/>)
	})
})
describe('Checking render ProductScreen in route '/' ,() => {
	test('render card', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<ProductScreen/>
			</Router>
		)
	})
})

describe(`Checking render ProductDetailsScreen in route '/product/details/:id'`, () => {
	test('Render ProductDetailsScreen component', () => {
		const history = createMemoryHistory('/product/details/:id')
		render(
			<Router history={history}>
				<ProductDetailsScreen />
			</Router>
		)
	})
})