import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
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
	flex-direction: row;
	justify-content: ;
`