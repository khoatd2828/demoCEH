import { Route, Routes } from 'react-router-dom'
import { Login } from './assets/components/Login/Login'
import { MainLayout } from './assets/components/layouts/MainLayout'
import { AuthLayout } from './assets/components/layouts/AuthLayout'
import { DashBoard } from './assets/components/DashBoard/DashBoard'
import { Register } from './assets/components/Register/Register'
import './App.css'
import './main.scss'
import './styles/tainwind.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<DashBoard />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
