import { useState } from "react"
import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)

	const handleToggleActive = (e) => {
		console.log(e.target.n);
		if(active){
			handleSelectionOptions(name, e.target.name)
		}else{
			handleSelectionOptions(name, e.target.name)
		}
	}
	return(
		<Button
			color={color}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			name={item.name}
		>
			{item.name}
		</Button>
	)
}
export default SelectButton 