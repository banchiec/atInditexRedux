import styled from "styled-components";

export const Content = styled.div`
	border: 1px solid green;
	display: flex;
	justify-content: space-between;
	padding:  0 3.4em;

	.brand{
		border: 1px solid blue;
		grid-area: c;
	}
	.header_menu{
		border: 1px solid red;
		grid-area: a;
	}
`
