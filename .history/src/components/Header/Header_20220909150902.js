import { Content, Logo, Menu } from "./headerStyled"
import {ImMenu} from 'react-icons/im'
import {BiLogIn, BiLogInCircle} from 'react-icons/bi'

const Header = () => {
	return(
		<Content>
			<Logo>
				<img src='https://www.cclaveronica.com/wp-content/uploads/2016/08/logo-lefties.png' alt=""/>
			</Logo>
			<Menu>
				<BiLogIn/>
				<ImMenu/>
			</Menu>
		</Content>
	)
}
export default Header