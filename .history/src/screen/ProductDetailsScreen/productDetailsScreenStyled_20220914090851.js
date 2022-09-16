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
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border: 1px solid green;
`

export const Options = styled.div`
	display: flexrow;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding:  15px;
	border: 1px solid green;
	:hover{
		cursor: pointer;
	}
` 
export const Selections = styled.div`
	padding: 10px;
	border-radius: 10px;
	border: none;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	margin: 10px;
	cursor: pointer;
	:hover, :focus {
		transform: translate(-1.3px);
	}
`
export const Selector = styled.button`
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
	width: 100%;
	padding: 10px 15px;
	
`