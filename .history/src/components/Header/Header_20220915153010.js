import { Content, Logo, Menu } from "./headerStyled"
import { ImMenu } from 'react-icons/im'
import { BiLogIn } from 'react-icons/bi'
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Header = () => {
	const {count} = useSelector((state) => state.cart)

	return(
		<Content>
			<Logo>
				<img src='' alt=""/>
			</Logo>
			<Menu>
				{count}
				<BiLogIn/>
				<ImMenu/>
			</Menu>
		</Content>
	)
}
export default Header
