import { CloseIcon, Modal, ModalText } from "./cartAlertStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react";

const CartAlert = ({text, handleCloseAlert}) => {
	console.log(text);

	useEffect(() => {
		return(
			setTimeout(() => {
				handleCloseAlert()
			}, 2000)
		)
	}, [])

	return(
		<Modal>
			<CloseIcon onClick={() => handleCloseAlert()}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default CartAlert
