import styled from 'styled-components'

export const Button = styled.button`
	@media(min-width:768px){
		width: 50px;
		height: 50px;
		margin:  8px;
		border-radius: 10px;
		text-align: center;
		cursor: pointer;
		background-color: ${ prop => prop.backgroundcolor};
		:hover,:focus {
			transform: translateY(-1.3px);
		}
		.active_option {
			border: 4px solid green;
			transform: translateY(-1.3px);
		}
		.no-active {
			border: none;
		}
		
	}
`