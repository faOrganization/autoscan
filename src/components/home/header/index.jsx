import MobileMenu from './mobile-menu/MobileMenu';
import DesktopNav from './DesktopNav';
import { assets } from '../../../assets/assets';
import React, { useState } from 'react';
import Logo from '../../ui/Logo';
import LoginBtn from './LoginBtn';
import UserAvatar from '../../ui/UserAvatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import AvatarBtn from '../../ui/AvatarBtn'

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector(selectCurrentUser);

  return (
    <header className="container">
      <nav className="border-b border-silver -mx-4 lg:mx-0">
        <div className='flex items-center p-4 lg:py-5 lg:px-0'>
          <div className="mr-4">
            <Logo />
          </div>
          <DesktopNav />
          <div className="flex items-center ml-auto">
            <div></div>
            <div className="hidden lg:block ml-8">
              {
                user ? <Link to='/dashboard'><UserAvatar/></Link> : <LoginBtn />

              }
            </div>
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden size-10 rounded-md hover:bg-gray-50">
              <img src={assets.bars_ic} alt="bars" className="w-[18px] h-3 m-auto" />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isMenuOpen={mobileMenuOpen} setMenuOpen={setMobileMenuOpen} />
    </header>
  )
}
export default Index