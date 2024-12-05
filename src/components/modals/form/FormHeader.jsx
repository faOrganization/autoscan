import React from 'react'

const FormHeader = ({ title }) => {
    return (
        <div className='text-center mb-6'>
            <h4 className='font-bold text-xl text-[#333333] mb-2'>{title}</h4>
            <span className='text-[#999999] font-normal text-base'>Autoscan.az</span>
        </div>
    )
}

export default FormHeader