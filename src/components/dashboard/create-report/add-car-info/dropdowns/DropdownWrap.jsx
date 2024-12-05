import React from 'react'

const DropdownWrap = ({title, children}) => {
    return (
        <div className='flex flex-col w-full dropdown'>
            <label htmlFor="" className='mb-2 text-sm font-medium text-[#1C1C1C]'>{title}</label>
            <div className='relative text-left inline-block w-full max-w-[368px] text-sm font-normal text-[#1C1C1C]'>
                {children}
            </div>
        </div>
    )
}

export default DropdownWrap