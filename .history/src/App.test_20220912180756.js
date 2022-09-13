import { render as rtlRender, screen } from "@testing-library/react"
import App from './App'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './App/store';
import { createMemoryHistory } from "history";
import ProductScreen from "./screen/ProductScreen/ProductsScreen";

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

describe('Render ProductScreen' ,() => {
	test('render card', () => {
		const history = createMemoryHistory('/')
		render(
			<Router history={history}>
				<ProductScreen/>
			</Router>
		)
})
})