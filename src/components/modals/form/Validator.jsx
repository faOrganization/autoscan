import React from 'react'
import { assets } from '../../../assets/assets'

const Validator = ({error}) => {
  
  return (
    <div className='flex items-center mt-2 fadeIn'>
      <img src={assets.info_ic} alt="Info" className='size-5 mr-2' />
      <span className='text-red-600 text-xs font-medium'>{error}</span>
    </div>
  )
}

export default Validator