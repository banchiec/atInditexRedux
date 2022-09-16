import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Image = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	img {
		padding:  20px;
		margin: 0;
		width: 70%;
	}
`
export const Description = styled.div`
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