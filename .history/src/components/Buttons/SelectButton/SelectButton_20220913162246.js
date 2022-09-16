import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	return(
		<Button
			color={color}
			className
			name={item.name}
		>
			{name}
		</Button>
	)
}
export default SelectButton 