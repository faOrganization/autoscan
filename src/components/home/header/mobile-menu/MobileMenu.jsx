import React from 'react'
import { assets } from '../../../../assets/assets';
import MobileNavItems from './MobileNavItems';
import LoginBtn from '../LoginBtn';

const MobileMenu = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <div className={'group w-0 lg:hidden ' + (isMenuOpen && 'active-menu w-auto')}>
      <div className='fixed -left-full group-[.active-menu]:left-0 transition-[left] inset-y-0 z-20 w-full overflow-y-auto bg-white p-6 max-w-xs border-r border-silver'>
        <div className='flex justify-end'>
          <button type='button' onClick={() => setMenuOpen(false)} className='p-1.5 -m-1.5 rounded-md hover:bg-gray-50 hover:transition-colors'>
            <img src={assets.x_ic} alt="close" className='h-6' />
          </button>
        </div>
        <div className='divide-y divide-silver'>
          <MobileNavItems />
          <div className='py-6 '>
            <LoginBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MobileMenu