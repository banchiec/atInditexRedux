import { render as rtlRender } from "@testing-library/react"
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../App/store';
import { createMemoryHistory } from "history";
import ProductScreen from './'

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