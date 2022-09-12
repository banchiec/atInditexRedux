import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		padding:  20px;
		margin: 0;
		width: 60%;
	}
`
export const Description = styled.div`
	padding: 10px;
	list-style: none;
`
export const Features = styled.div`
	padding: 20px;
	ul{
		list-style: none;
		padding: 10px;
	}
	li{
		font-size: 10px;
		padding: 10px 0;
	}
`