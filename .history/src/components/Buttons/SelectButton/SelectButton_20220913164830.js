import { is } from "immer/dist/internal"
import { Button } from "./selectButtonStyled"

const SelectButton = ({name, item, color, handleSelectionOptions}) => {
	const [active, setActive] = useState(true)

	const handleToggleActive = (e) => {
		if(active){
			handleSelectionOptions={name, e.target.name}
		}else{
			handleSelectionOptions={name, e.target.name}
		}
	}
	return(
		<Button
			color={color}
			onClick={(e) => handleToggleActive(e)}
			className={item?.active === true  ? 'active_option' : 'no_active'}
			name={item.name}
		>
			{name}
		</Button>
	)
}
export default SelectButton 