import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nb'>
      <NavLink to='/' /* className={({isActive}) => (isActive ? 'ativo' : 'naoAtivo')} */>Home</NavLink>
      <NavLink to='/about'>Sobre</NavLink>
      <NavLink to='/product'>Produto</NavLink>
    </nav>
  )
}

export default Navbar