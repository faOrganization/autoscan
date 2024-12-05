import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createModal } from '../../util/modal';
import { useDispatch } from 'react-redux';
import { setResetPwdInfo } from '../../features/resetPasswordInfoSlice';

const UpdatePassword = () => {
    const params = useParams();
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    useEffect(() => {
        if(params == '') {
            navigate('/')
        } else {
            const url = params['*']            
            const divider = url.indexOf('/');
            const id = url.substring(0, divider);
            const resetToken = url.substring(divider + 1, url.length)
            if (id && resetToken) {
                const resetPwdInfo = {userId: id, resetToken: resetToken}
                dispatch(setResetPwdInfo(resetPwdInfo));
                createModal('NewPassword');
            }
            navigate('/')            
        }
    }, [])
  return (
    <></>
  )
}
export default UpdatePassword