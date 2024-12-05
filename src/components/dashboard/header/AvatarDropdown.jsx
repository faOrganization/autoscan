import React, { useContext, useEffect, useRef } from 'react'
import { createModal, destroyAllModal, destroyModal, isActive, setInactive } from '../../../util/modal';
import SideNavBtns from '../sidebar/SideNavBtns';
import { assets } from '../../../assets/assets';
import SideNavItems from '../sidebar/SideNavItems';
import { Context } from '../../../context/RefContext';
import useClosePopup from '../../../hook/useClosePopup';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../features/auth/authSlice';

const AvatarDropdown = () => {
  const user = useSelector(selectCurrentUser);
  const Fullname = user.firstname + ' ' + user.lastname;
  const dropdownRef = useRef();
  useClosePopup(dropdownRef)
  const navBtnsData = [
    {
      icon: assets.left_from_bracket_ic,
      text: 'Çıxış',
      clickHandler: () => { destroyModal(); createModal('Logout'); }
    }
  ]

  const navLinks = [
    {
      icon: assets.user_circle_ic,
      text: 'Məlumatlarım',
      link: 'profile',
      
    }
  ]

  const isActiveModal = isActive();
  return (
    <div ref={dropdownRef} className={'avatar-dropdown bg-white w-56 rounded-lg shadow-2xl px-2 py-3 absolute top-14 right-6 ' + (isActiveModal ? 'slideBottomIn' : 'slideBottomOut')}>
      <div className='font-semibold py-2 mx-3 mb-2.5 truncate border-b border-silver'>{Fullname}</div>
      <SideNavItems data={navLinks}/>
      <SideNavBtns data={navBtnsData} />
    </div>
  )
}

export default AvatarDropdown