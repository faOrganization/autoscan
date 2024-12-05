import React from 'react'

const TextBox = ({data}) => {
    const {label_txt, ...attrs} = data;
    return (
        <>
            <label htmlFor="" className='mb-2 text-sm font-medium text-[#1C1C1C] block'>{label_txt}</label>
            <input  {...attrs} required className='input-field border-0 bg-[#FAFAFA] outline-none focus:ring-2 focus:ring-gray-100' />
        </>
    )
}

export default TextBox