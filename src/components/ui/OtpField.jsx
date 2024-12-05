import React from 'react'

const OtpField = ({inpRef, ...attrs}) => {
  return (
    <input {...attrs} ref={inpRef} required type='number' placeholder='' autoComplete='on' min="0" max="9" className='h-12 text-2xl rounded-lg text-center no-spinner border-[#E5E5E5] border-2 w-12 transition-shadow focus:border-black focus:ring-1 ring-black'/>
  )
}

export default OtpField