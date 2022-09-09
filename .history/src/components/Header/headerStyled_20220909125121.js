import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	padding:  0 3.4em;
	@media (min-width: 768px) {
		border: 1px solid green;
	}
	.brand{
		border: 1px solid blue;
		grid-area: c;
	}

	.header_menu{
		border: 1px solid red;
		grid-area: a;
	}
`

export const Logo = styled.div`
	border: 1px solid green;
`
