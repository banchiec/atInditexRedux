import { CloseIcon, Modal, ModalText } from "./alertTimeStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react";

const AlertTime = ({text}) => {

	return(
		<Modal>
			<CloseIcon>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			<button>Solicitar</button>
			</ModalText>
		</Modal>
	)
}
export default AlertTime
