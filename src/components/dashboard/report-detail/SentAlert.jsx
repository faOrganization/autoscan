import React from 'react'
import { assets } from '../../../assets/assets'
import Button from '../../ui/Button'
import { destroyAllModal, isActive, setInactive } from '../../../util/modal'
import { useDispatch } from 'react-redux'

const SentAlert = () => {
    const dispatch = useDispatch();
    const isActiveModal = isActive();           
    const closeBtnData = {
        text: 'Bağla',
        classNames: 'btn btn-primary w-[141px] h-10 font-medium',
        clickHandler: () => {setInactive(); destroyAllModal()}
    }
    return (
        <div className={'rounded-lg fixed inset-0 m-auto bg-white shadow-2xl max-w-[311px] h-[251px] ' + ( isActiveModal ? 'zoomIn' : 'zoomOut')}>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='bg-primary-t rounded-lg p-3'>
                    <img src={assets.check_square_ic} alt="Check" />
                </div>
                <p className='my-6 text-xl text-center text-[#1C1C1C] font-normal'>
                    Hesabat email adresinizə
                    göndərildi
                </p>
                <div>
                    <Button data={closeBtnData} />
                </div>
            </div>
        </div>
    )
}

export default SentAlert