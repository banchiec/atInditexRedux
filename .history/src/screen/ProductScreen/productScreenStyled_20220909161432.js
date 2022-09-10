import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`
export const ContainerCards =  styled.div`
	padding: 0;
	display: grid;
	grid-template-columns: repeat(2,1fr) ;
	gap: 10px;

	@media (min-width: 768px){
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
	}
`