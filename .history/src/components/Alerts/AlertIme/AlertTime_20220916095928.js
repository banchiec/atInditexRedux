import { CloseIcon, Modal, ModalText } from "./alertTimeStyled"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { useEffect } from "react";

const AlertTime = ({text}) => {

	return(
		<Modal>
			<CloseIcon onClick={() => han()}>
				<AiOutlineCloseCircle/>
			</CloseIcon>
			<ModalText>
				{text}
			</ModalText>
		</Modal>
	)
}
export default AlertTime