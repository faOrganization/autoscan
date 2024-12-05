import UserAvatar from './UserAvatar'
import React, { useContext, useRef } from 'react'
import { createModal, destroyModal } from '../../util/modal';
import { Context } from '../../context/RefContext';

const AvatarBtn = () => {
    const { setRef } = useContext(Context);
    const avatarRef = useRef();
    const clickHandler = () => {
        destroyModal();
        createModal('AvatarDropdown');
        setRef(avatarRef);
    }
    return (
        <button ref={avatarRef} type='button' onClick={clickHandler} >
            <UserAvatar />
        </button>
    )
}

export default AvatarBtn