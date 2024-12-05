import React from 'react'
import SideNavItem from './SideNavItem'

const SideNavItems = ({data}) => {
  return (
    <ul className='font-semibold space-y-2 text-sm text-black'>
        {
            data?.map((data, index) => (
                <SideNavItem data={data} key={index}/>
            ))
        }
    </ul>
  )
}

export default SideNavItems