import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:  0 1.4em;
	height: 8vh;
	border-bottom: 1px solid gray;
	@media (min-width: 768px) {
	}
`

export const Logo = styled.div`
	display: flex;
	@media (min-width: 768px){
		img{
		}
	}
`
export const Menu = styled.div`
	font-size: 1.4em;
	margin: 0 10px ;
	svg {
		padding: 0 10px;
	}
	@media (min-width: 768px){
		display: none;
		svg {
		}
	}
`
