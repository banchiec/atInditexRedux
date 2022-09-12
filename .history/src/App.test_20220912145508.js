import { render as rtlRender, screen } from "@testing-library/react"
import App from './App'
import {Provider} from 'react-redux'
import { store } from './App/store';
import CardProduct from "./components/Cards/CardProduct/CardProduct";

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
test('render card', () => {
	render(<CardProduct/>)
})