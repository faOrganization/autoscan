import React, { useContext } from 'react';
import {Context} from '../../../context/RefContext'

const SideNavBtn = ({ data }) => {
    const { icon, text, clickHandler, ref } = data;
    return (
        <button ref={ref} type='button' onClick={clickHandler} className='flex items-center mt-2 w-full rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors font-semibold text-sm text-black'>
            <img src={icon} alt={icon} className='mr-4' />
            {text}
        </button>
    )
}

export default SideNavBtn