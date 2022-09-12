import { render } from '@testing-library/react'
import { Router } from 'express'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../../App'
test ('renders App', async () => {
	render(
		<Router>
			<App/>
		</Router>
	)
})