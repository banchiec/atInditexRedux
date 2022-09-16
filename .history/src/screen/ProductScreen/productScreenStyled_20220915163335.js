import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: column;
	}
`
export const ContainerCards =  styled.div`
	margin: 15px 0;
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
export const Filter = styled.div`
  @media (min-width:768px){
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
    margin: 0 2em;
		border: 1px solid green;
    h4{
      padding: 10px;
      margin: 0;
    }
  }
`
