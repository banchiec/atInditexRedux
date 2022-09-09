import styled from "styled-components";

export const Content = styled.div`
	border: 1px solid green;
	display: grid;
	grid-template-columns: repeat(2, 1fr) ;
	grid-template-rows:  100px 100px;
	grid-template-areas: 
		"a a b",
		"a a b";
	h1{
		grid-area: b;
	}
	h2{
		grid-area: a;
	}
`