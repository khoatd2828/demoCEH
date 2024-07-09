import { Route, Routes } from 'react-router-dom'
import './App.css'
import './main.scss'
import './styles/tainwind.css'
import { Login } from './assets/components/Login/Login'
import { MainLayout } from './assets/components/layouts/MainLayout'
import { Home } from './assets/components/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
