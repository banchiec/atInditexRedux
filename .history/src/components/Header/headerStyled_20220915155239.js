import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:  0 1.4em;
	height: 8vh;
	border-bottom: 1px solid gray;
	@media (min-width: 768px) {
		div {
			display: flex ;
			flex-direction:
		}
	}
`

export const Logo = styled.div`
	display: flex;
	img{
		width: 120px;
	}
	@media (min-width: 768px){
		img{
			width: 150px;
		}
	}
`
export const Menu = styled.div`
	font-size: 1.4em;
	svg {
		padding: 0 5px;
	}
	@media (min-width: 768px){
		display: none;
		svg {
		}
	}
`
