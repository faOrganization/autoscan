import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const InputField = ({...data}) => {
  const {pwdInp, type, ...attrs} = data;  
  const [showPwd, setShowPwd] = useState(false);
 
  const handleClickShowPwd = () => {
    setShowPwd(prev => !prev)
  }

  return (
    <div className='relative h-10'>
      <input type={showPwd ? 'text' : type} {...attrs} className='input-field border-[#E5E5E5] focus:border-black  ring-black' />
      { pwdInp && <button onClick={handleClickShowPwd} className='absolute my-auto inset-y-auto size-5 right-3 bottom-0 top-0' type='button' >
        <img src={showPwd ? assets.eye_slash_ic : assets.eye_ic} alt="eye" className='size-full' />
        </button>}
    </div>
  )
}

export default InputField