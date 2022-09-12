import { render as rtlRender, screen } from "@testing-library/react"
import App from './App'
import {Provider} from 'react-redux'
import { store } from './App/store';

const render = components
<Provider store={store}>
	<App/>
</Provider>



describe('Test de App render', () => {
	test('Test', () => {
		const app = document.getElementById('root')
		render(<App/>)
	})
})