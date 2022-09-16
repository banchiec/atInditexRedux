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
				<img src='https://img2.freepng.es/20180816/uwf/kisspng-logo-vodafone-brand-portable-network-graphics-doruk-finans-danmanlk-her-trl-ihtiyac-5b74fcbe935ee0.5251724415343935346036.jpg' alt=""/>
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
