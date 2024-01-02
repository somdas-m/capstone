import { Nav } from "./Nav"
import logo from "../images/Logo.svg"

export const Header = (props) => {
    return <header>
        <img src={logo}/>
        <Nav/>
    </header>
}