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
				<img src='https://img2.freepng.es/20180613/ij/kisspng-vodafone-germany-mobile-phones-vodafone-business-s-vodafone-turkey-5b20a34046efc7.1466233715288656002906.jpg' alt="logo_vodafone"/>
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
