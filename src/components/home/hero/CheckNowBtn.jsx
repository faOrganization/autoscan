import React from 'react';
import { assets } from '../../../assets/assets';
import { createModal } from '../../../util/modal';

const CheckNowBtn = () => {
  return (
    <button type='button' onClick={() => createModal('Login')} className='btn bg-gradient-to-r from-[#2C36A9] to-[#111543] w-11/12 sm:w-8/12 md:w-auto lg:text-lg h-[60px] px-[71px] mt-8 lg:mt-12 mb-12 lg:mb-16 mx-auto'>
        <img src={assets.phone_camera_ic} alt="image" className='mr-2' />
        İndi Yoxla
    </button>
  )
}

export default CheckNowBtn;