import { CloseIcon, Modal, ModalText } from "./alertTimeStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react";

const AlertTime = ({text, handleSend}) => {

	useEffect(() => {
		setTimeout(() => {
			handleCloseAlert()
		}, 3000)
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
export default AlertTime
