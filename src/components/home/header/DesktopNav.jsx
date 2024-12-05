import React from 'react'
import NavItems from './NavItems'

const DesktopNav = () => {
  return (
    <div className='lg:flex gap-2 hidden'>
      <NavItems />
    </div>
  )
} 

export default DesktopNav;