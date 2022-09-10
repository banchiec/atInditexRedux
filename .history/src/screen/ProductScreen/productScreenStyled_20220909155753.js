import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0;
`
export const ContainerCards =  styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;
	align-items: center;
	@media (min-width: 768px){
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
	}
`