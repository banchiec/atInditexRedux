import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	.active {
		background-color: #ffaaba;
		color: white;
	}
	.active_option {
		border: 2.8px solid green;
	}
	.no_active {
		border: 1px solid gray;
	}
	@media (min-width:768px){
		display: grid;
		justify-content: center;
		border: 1px solid green;
	}
`
export const ContainerDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	@media (min-width:768px){

	}
`

export const Image = styled.div`
	width: 95.3%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	h3{
		padding: 0;
		margin-top: 0px;
	}
	img {
		padding:  20px;
		margin: 0;
		width: 70%;
	}
`

export const Description = styled.div`
	width: 95.3%;
	padding: 10px;
	list-style: none;
`

export const Features = styled.div`
	padding: 20px;
	border-radius: 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	ul{
		list-style: none;
		padding: 10px;
	}
	li{
		font-size: 12px;
		padding: 5px 0;
		text-align: start;
		strong{
			font-size: 12.4px;
			padding-right: 10px;
		}
	}
`

export const Actions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 0 10px 0;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 20px;
	margin: 20px 0;
`

export const Options = styled.div`
	display: flexrow;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding:  15px;
	:hover{
		cursor: pointer;
	}
` 
export const Selections = styled.div`
	padding: 10px;
	border: none;
	margin: 0 10px;
	cursor: pointer;
	:hover, :focus {
		transform: translate(-1.3px);
	}
`
export const Selector = styled.button`
	border: none;
	padding: 5px 15px;
	border-radius:  5px;
	margin: 0 5px 20px 5px;
	@media (min-width:768px){
		padding: 10px;
		border-radius: 10px;
		border: none;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		margin: 0 10px;
		cursor: pointer;
		:hover,:focus {
			transform: translateY(-1.3px);
		}
	}
`
export const Button = styled.button`
	width: 80%;
	padding: 10px 15px;
	font-size: 14px;
	border: none;
	border-radius: 8px;
	font-weight: 400;
	cursor: pointer;
`
