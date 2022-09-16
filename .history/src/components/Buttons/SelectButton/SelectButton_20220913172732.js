import { useState } from "react"
import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)
	console.log(name);



	const handleToggleActive = (e) => {
		console.log(e.target.name);
		if(active){
			handleSelectionOptions(name, e.target.name)
		}else{
			handleSelectionOptions(name, e.target.name)
		}
	}
	return(
		<Button
			backgroundcolor={item.name}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			nameSelector={name}
		>
			{item.name}
		</Button>
	)
}
export default SelectButton 