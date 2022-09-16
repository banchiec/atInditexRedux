import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	return(
		<Button
			name={item.name}
		>
			{name}
		</Button>
	)
}
export default SelectButton 