import React from 'react';
import {createModal, destroyModal} from '../../../util/modal';

const FormSwitch = ({data}) => {
  const {questionTxt, modalType, btnTxt} = data;
  const openModal = () => {
    destroyModal();
    createModal(modalType);
  }
  return (
    <p className='text-xs font-normal text-center mt-5'><span className='text-[#999999]'>{questionTxt}</span> <button type='button' onClick={openModal} className='text-primary hover:text-blue-900'>{btnTxt}</button></p>
  )
}

export default FormSwitch