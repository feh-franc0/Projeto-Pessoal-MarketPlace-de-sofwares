import { Outlet } from 'react-router-dom'
import { SidebarAdmin } from '../../components/SidebarAdmin'
import { LayoutAdminContainer } from './styles'

export function AdminLayout() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <LayoutAdminContainer>
      <SidebarAdmin />
      <Outlet />
    </LayoutAdminContainer>
  )
}
