import { useState } from "react"
import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)
	console.log();

	console.log(item);


	const handleToggleActive = (e) => {
		if(active){
			handleSelectionOptions(name, e.target.name)
		}else{
			handleSelectionOptions(name, e.target.name)
		}
	}
	return(
		<Button
			color={name}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			name={name}
		>
			{item.name}
		</Button>
	)
}
export default SelectButton 