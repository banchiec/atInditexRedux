import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid blue;
	img {
		padding:  20px;
		margin: 0;
		width: 60%;
		border: 1px solid green;
	}
`
export const Description = styled.div`
	border: 1px solid green;
	padding: 10px;
	list-style: none;
`
export const Features = styled.div`
	border: 1px solid red;
	ul{
		list-style: none;
		padding: 10px;
}
`