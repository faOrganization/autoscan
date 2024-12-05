import React, { useContext, useRef } from 'react'
import Logo from '../../ui/Logo'
import { assets } from '../../../assets/assets'
import SideNavItems from './SideNavItems'
import SideNavBtns from './SideNavBtns'
import { useDispatch } from 'react-redux'
import { createModal, destroyModal } from '../../../util/modal'
import { Context } from '../../../context/RefContext'

const Index = () => {
  const dispatch = useDispatch();
  const contactBtn = useRef();
  const navLinks1 = [
    {
      icon: assets.grid_ic,
      text: 'Hesabat yarat',
      link: '/dashboard',
    },
    {
      icon: assets.circle_question_ic,
      text: 'FAQ',
      link: 'faq'
    },
    {
      icon: assets.arrow_down_box_ic,
      text: 'Tarixçə',
      link: 'history'
    }
  ]

  const navLinks2 = [
    {
      icon: assets.user_circle_ic,
      text: 'Məlumatlarım',
      link: 'profile'
    },
    {
      icon: assets.empty_folder_ic,
      text: 'Sənədlər',
      link: 'documents'
    }
  ]
  const { setRef } = useContext(Context);
  const contactBtnClick = () => {
    setRef(contactBtn)
    destroyModal();
    createModal('Contact');
  }

  const navBtnsData = [
    {
      icon: assets.phone_volume_ic,
      text: 'Əlaqə',
      ref: contactBtn,
      clickHandler: () => { contactBtnClick() }
    },
    {
      icon: assets.left_from_bracket_ic,
      text: 'Çıxış',
      clickHandler: () => { destroyModal(); createModal('Logout'); }
    }
  ]
  return (
    <div className='bg-white flex flex-col sb-h fixed left-3 top-3 pl-6 pt-6 pr-[34px] pb-12 rounded-lg w-[204px] overflow-y-auto'>
      <div className='mb-12 flex justify-center mt-2'>
        <Logo />
      </div>
      <div className='mb-7 -mx-3'>
        <SideNavItems data={navLinks1} />
      </div>
      <div className='mt-auto -mx-3'>
        <SideNavItems data={navLinks2} />
        <div>
          <SideNavBtns data={navBtnsData} />
        </div>
      </div>
    </div>
  )
}

export default Index