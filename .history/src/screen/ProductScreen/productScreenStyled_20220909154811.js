import styled from "styled-components";

export const Container = styled.div`

`
export const ContainerCards =  styled.div`
	@media (min-width: 768px){
		display: grid;
		grid-template-columns: repeat(4, 1fr)
	}
`