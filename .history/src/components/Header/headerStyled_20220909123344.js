import styled from "styled-components";

export const Content = styled.div`
	border: 1px solid green;
	display: grid;
	grid-template-columns: repeat(3, 1fr) ;
	grid-template-rows:  5px 5px;
	grid-template-areas: 
		"a b c",
		"a b c";
	div{
		grid-area: a;
	}
	h2{
		grid-area: c;
	}
`