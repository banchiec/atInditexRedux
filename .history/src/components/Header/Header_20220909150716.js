import { Content, Logo, Menu } from "./headerStyled"
import {ImMenu} from 'react-icons/im'
import {FiLogin} from 'react-icons/fi'

const Header = () => {
	return(
		<Content>
			<Logo>
				<img src='https://www.cclaveronica.com/wp-content/uploads/2016/08/logo-lefties.png' alt=""/>
			</Logo>
			<Menu>
				<FiLogin/>
				<ImMenu/>
			</Menu>
		</Content>
	)
}
export default Header