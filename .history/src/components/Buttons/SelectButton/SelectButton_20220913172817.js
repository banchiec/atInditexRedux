import { useState } from "react"
import { Button } from "./selectButtonStyled"

const SelectButton = ({nameSelector, item, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)
	console.log(nameSelector);



	const handleToggleActive = (e) => {
		console.log(e.target.name);
		if(active){
			handleSelectionOptions(nameSelector, e.target.name)
		}else{
			handleSelectionOptions(nameSelector, e.target.name)
		}
	}
	return(
		<Button
			backgroundcolor={item.name}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			nameSelector={Selector}
		>
			{item.name}
		</Button>
	)
}
export default SelectButton 