import styled from "styled-components";

export const Card = styled.div`
	width: 45vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 7px;
	a {
		text-decoration: none;
		color: black;
	}
	div{
		text-align: center;
		padding: 10px 0;
		img{
			width: 80%;
		}
	}
	img{
		margin: 0px;
	}
	h4{
		font-size: 1.5em;
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.card_brand{
			margin: 0;
		}
		p {
			font-size: 12px;
			padding: 4px 0;
			margin: 0px;
		}
		span{
			font-weight: 500;
		}
	}
	@media (min-width:768px){
		width: auto;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		p {
			font-size: ;
		}
	}
`
