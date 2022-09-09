import { Content, Logo, Menu } from "./headerStyled"
import {ImMenu} from 'react-icons/im'

const Header = () => {
	return(
		<Content>
			<Logo>
				<img src='https://www.cclaveronica.com/wp-content/uploads/2016/08/logo-lefties.png' alt=""/>
			</Logo>
			<Menu>
				<ImMenu/>
			</Menu>
		</Content>
	)
}
export default Header