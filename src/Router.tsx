import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { DashBoard } from './pages/DashBoard'
import { Products } from './pages/Products'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { AdminLayout } from './layouts/AdminLayout/index'
import { Modificacoes } from './pages/Modificacoes'
import { Contato } from './pages/Contato'
import { Login } from './pages/Login'

export function Router() {
  //* Apartir do "/" coloque o estilo DefaultLayout <Route path="/" element={<DefaultLayout />}>

  //* Apartir do "/admin" coloque o estilo AdminLayout <Route path="/" element={<AdminLayout />}>
  // ? para acessa a rota de produtos use /admin/products

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/addModificacoes" element={<Modificacoes />} />
      </Route>
    </Routes>
  )
}
