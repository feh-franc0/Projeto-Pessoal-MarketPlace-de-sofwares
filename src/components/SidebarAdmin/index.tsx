import { NavLink } from 'react-router-dom'
import { SidebarAdminContainer } from './styled'

export function SidebarAdmin() {
  return (
    <SidebarAdminContainer>
      <h1>Header Admin</h1>
      <p> Bem vindo a area Administrativa</p>
      <hr />
      <nav>
        <NavLink to="/admin/addModificacoes">Modificacoes</NavLink>
        <NavLink to="/admin/products">Products</NavLink>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/">Sair</NavLink>
      </nav>
    </SidebarAdminContainer>
  )
}
