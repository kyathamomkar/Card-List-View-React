import { GroupIcon } from "../Icons"
import { Text } from "../DomElements"
import "./style.css"

const NavBarContent = ({ Icon, headerText }) => {
  return (
    <>
      <Icon color="#2081C3" />
      <Text fontSize="max(2vw, 18px)" textTransform="upperCase">
        {headerText}
      </Text>
    </>
  )
}

const NavBar = () => {
  return (
    <div className="navBox">
      <NavBarContent Icon={GroupIcon} headerText="users" />
    </div>
  )
}

export default NavBar
