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
		width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* padding: 2em; */
    /* margin: 0 2em; */
		margin: 10px 0;
    h4{
      padding: 5px 10px;
      margin: 0;
    }
  }
`
export const Search = styled.input`
	@media (min-width:768px){
    text-align: end;
    padding: 0 20px;
    border: none;
    background: whitesmoke;
    border-radius:  5px;
  }
`
