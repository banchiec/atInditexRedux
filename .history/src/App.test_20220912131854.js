/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import App from './App'

describe('Test de App render', () => {
	test('Test', () => {
		const app = document.getElementById('root');
		expect(app).not.toBeNul();
	})
})