import { render as rtlRender, screen } from "@testing-library/react"
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../Ap';
import { createMemoryHistory } from "history";
import ProductScreen from "./screen/ProductScreen/ProductsScreen";

const render = component => rtlRender(
	<Provider store={store}>
		{component}
	</Provider>
)
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