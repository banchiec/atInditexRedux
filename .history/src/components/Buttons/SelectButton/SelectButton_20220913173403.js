import { useState } from "react"
import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)
	console.log(name);

	const handleToggleActive = (e) => {
		console.log(e);
		if(active){
			handleSelectionOptions(name, e.target.name)
		}else{
			handleSelectionOptions(nameSelector, e.target.name)
		}
	}
	return(
		<Button
			backgroundcolor={item.name}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			name= {item?.name}

		>
			{item.name}
		</Button>
	)
}
export default SelectButton 