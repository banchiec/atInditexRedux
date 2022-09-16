import { CloseIcon, Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'

const CartAlert = ({text, handleCloseAlert}) => {
	console.log(text);

	useEffect(() => {

	})
	return(
		<Modal>
			<CloseIcon onClick={(e) => handleCloseAlert(e)}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert
