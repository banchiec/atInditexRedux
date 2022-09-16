import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	return(
		<Button
			color={color}
			name={item.name}
		>
			{name}
		</Button>
	)
}
export default SelectButton 