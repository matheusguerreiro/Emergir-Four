import { NavLink } from "react-router-dom"
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to='/'>P1</NavLink>
      <NavLink to='/p2'>P2</NavLink>
      <NavLink to='/p3'>P3</NavLink>
    </nav>
  )
}

export default Nav