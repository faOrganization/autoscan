import React from 'react';
import {createModal, destroyModal} from '../../../util/modal';

const ForgetPasswordBtn = () => {
    const openModal = () => {
        destroyModal();
        createModal('ResetPwdEmail');
    }
    return (
        <button type='button' onClick={openModal} className='text-[#C5C5C5] transition-colors hover:text-gray-500 text-xs font-medium'>Şifrəni unutdun?</button>
    )
}

export default ForgetPasswordBtn