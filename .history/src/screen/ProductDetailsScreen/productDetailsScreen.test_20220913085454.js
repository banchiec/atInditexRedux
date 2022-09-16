import { render as rtlRender } from "@testing-library/react"
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../App/store';
import { createMemoryHistory } from "history";
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import ProductDetailsScreen from "./ProductDetailsScreen";

const render = component => rtlRender(
	<Provider store={store}>
		{component}
	</Provider>
)

describe(`Checking render ProductScreen in route '/product/details/:id'` ,() => {
	test('Render ProductScreen component', () => {
		const history = createMemoryHistory('/product/details/:id')
		render(
			<Router history={history}>
				<ProductDetailsScreen />
			</Router>
		)
	}),
	test('Check texts in list', () => {

	})
})
