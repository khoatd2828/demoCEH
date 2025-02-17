import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../Menu/SideMenu'

export const MainLayout = () => {
  return (
    <div>
        <div>
          <SideMenu/>
        </div>
        <div>
           <Outlet/>
        </div>
    </div>
)
}
