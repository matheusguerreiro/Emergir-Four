import './nav.css'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to='/'>home</NavLink>
      <NavLink to='/about'>sobre</NavLink>
    </nav>
  )
}

export default Nav