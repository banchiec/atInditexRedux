import styled from "styled-components"

export const Modal = styled.div`
	position: absolute;
  top: 50%;
  /* left: 35%; */
  height: 250px;
  width: 350px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  background: white;
`
export const ModalText = styled.h2`
	text-align: center;
	font-size: 10px;
	transform: translateY(60px);
`
export const CloseIcon =  styled.button`
	border: none;
	cursor: pointer;
	svg {
		position: absolute;
		right: 15px;
		color: gray;
		font-size: 1.8em;
	}
	@media (min-width:768px){
		border: none;
		cursor: pointer;
		svg {
			position: absolute;
			right: 15px;
			color: gray;
			font-size: 1.8em;
		}
	}
`
export const Button = styled.button`
	@media (min-width:768px){
		padding: 10px 50px;
		transform: translate(170px, 80px);
		border-radius: 20px;
		font-family: Inria sans;
		font-size: 18px;
		outline: none;
		/* border: 1px solid white; */
		transition:0.2s ease-in-out all;
		cursor:pointer;
		:hover,:focus {
			background-color: #ffaaba;
			color: whitesmoke;
		}
}
`