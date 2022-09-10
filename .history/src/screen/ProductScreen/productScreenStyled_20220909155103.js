import styled from "styled-components";

export const Container = styled.div`

`
export const ContainerCards =  styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr) ;
	justify-content: center;
	@media (min-width: 768px){
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
	}
`