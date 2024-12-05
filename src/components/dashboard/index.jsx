import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Modals from './modals/'

const Index = () => {
  return (
    <div className='h-full p-3 fadeIn'>
      <div className='inset-0 fixed bg-[#EEEEEE] -z-10'></div>
      <Sidebar />
      <div className='ml-[216px] h-full'>
        <Header />
        <div className='mt-3'>
          <Outlet />
          <Modals/>
        </div>
      </div>
    </div>
  )
}

export default Index