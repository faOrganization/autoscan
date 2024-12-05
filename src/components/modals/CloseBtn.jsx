import React from 'react';
import { assets } from '../../assets/assets';
import { destroyAllModal, setInactive } from '../../util/modal';

const CloseBtn = () => {
    const closeHandler = () => {
        setInactive()
        destroyAllModal(true);
    }
    return (
        <button type='button' onClick={closeHandler} className='bg-[#1A1A1A] transition-colors hover:bg-black absolute top-4 right-4 rounded-lg p-1 z-30'>
            <img src={assets.x_white_ic} alt="Close" className='size-7' />
        </button>
    )
}

export default CloseBtn