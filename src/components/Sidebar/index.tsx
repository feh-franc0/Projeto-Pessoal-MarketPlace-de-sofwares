import { NavLink } from 'react-router-dom'
import { SidebarContainer } from './styles'
import { Header } from '../Header'
// import { Timer, Scroll } from 'phosphor-react'

export function Sidebar() {
  return (
    <>
      <Header></Header>
      <SidebarContainer>
        <h1>Home</h1>
        <p>SolucoesAqui.com</p>
        <hr />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </SidebarContainer>
    </>
  )
}
