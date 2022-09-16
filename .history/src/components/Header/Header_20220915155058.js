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
				<img src='https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/8852/1280px-Vodafone_2017_logo.svg.png?1557142016' alt=""/>
			</Logo>
			<div></div>
				{count}
			<Menu>
				<BiLogIn/>
				<ImMenu/>
			</Menu>
		</Content>
	)
}
export default Header
