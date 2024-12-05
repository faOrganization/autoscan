import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';

const UserAvatar = () => {
    const user = useSelector(selectCurrentUser);
    const name = user.firstname.substring(0,1)
    const lastname = user.lastname.substring(0,1)
    const avatarTxt = name + lastname;
    return (
            <span className='rounded-full size-[38px] bg-primary flex outline-none border-0'>
             <span className='font-semibold text-white text-sm m-auto uppercase'>{avatarTxt}</span>
            </span>
    )
}

export default UserAvatar