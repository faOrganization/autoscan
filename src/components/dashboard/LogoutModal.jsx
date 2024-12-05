import React from 'react'
import { assets } from '../../assets/assets'
import Button from '../ui/Button'
import { destroyAllModal, isActive, setInactive } from '../../util/modal'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectCurrentUser } from '../../features/auth/authSlice'
import { useLogoutMutation } from '../../services/mainApi'
import { object } from 'yup'
import { useNavigate } from 'react-router-dom'


const LogoutModal = () => {
    const dispatch = useDispatch();
    const isActiveModal = isActive();
    const [logout] = useLogoutMutation();
    const user = useSelector(selectCurrentUser);
    
    const navigate = useNavigate();
    const logoutHandler = () => {
        const userEmail = user?.email;
        logout({ email: userEmail }).unwrap();
        navigate('/')
        setInactive()
        destroyAllModal()
        dispatch(logOut())
    }

    const btnsData = {
        cancelBtnData: {
            text: 'Xeyr',
            classNames: 'btn-outline w-[141px] h-10 mr-4 font-medium',
            clickHandler: () => { setInactive(); destroyAllModal(true) }
        },
        confirmBtnData: {
            text: 'Çıxmaq',
            classNames: 'btn-primary w-[141px] h-10 font-medium',
            clickHandler: () => { logoutHandler() }
        }
    }
    return (
        <div className='fixed z-50 inset-0'>
            <div className={'bg-white inline-block px-10 py-12 fixed rounded shadow-2xl max-w-[378px] h-[269px] inset-0  m-auto z-40 ' + (isActiveModal ? 'zoomIn' : 'zoomOut')}>
                <div className='flex justify-center items-center flex-col'>
                    <div className='p-3 rounded-lg bg-primary-t flex'>
                        <img src={assets.warning_triangle_ic} alt="Warning" className='m-auto' />
                    </div>
                    <p className='font-medium text-xl text-[#1C1C1C] my-6'>Çıxmaq istədiyinizdən əminsiniz?</p>
                    <div className='flex'>
                        <Button data={btnsData.cancelBtnData} />
                        <Button data={btnsData.confirmBtnData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal