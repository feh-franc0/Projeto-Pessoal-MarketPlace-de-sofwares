import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  // ? <Outlet /> = um espaço para ser inserido algum conteúdo
  return (
    <LayoutContainer>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  )
}
