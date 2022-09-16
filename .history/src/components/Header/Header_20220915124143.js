import { Content, Logo, Menu } from "./headerStyled"
import { ImMenu } from 'react-icons/im'
import { BiLogIn } from 'react-icons/bi'
import { useSelector } from "react-redux"

const Header = () => {
	const {count} = useSelector((state) => state.cart)
	useEf

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
