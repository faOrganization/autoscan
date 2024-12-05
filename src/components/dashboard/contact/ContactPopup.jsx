import { useContext, useEffect, useRef } from 'react';
import { assets } from '../../../assets/assets';
import ContactSocialLinks from './ContactSocialLinks';
import ContactSupportLinks from './ContactSupportLinks';
import { destroyAllModal, isActive, setInactive } from '../../../util/modal';
import { Context } from '../../../context/RefContext';
import useClosePopup from '../../../hook/useClosePopup';

const ContactPopup = () => {
    const isActiveModal = isActive();
    const contactPopup = useRef();
    useClosePopup(contactPopup)
    const contactLinskData = [
        {
            icon: assets.linkedin_ic,
            link: ''
        },
        {
            icon: assets.instagram_ic,
            link: ''
        },
        {
            icon: assets.youtube_ic,
            link: ''
        },
        {
            icon: assets.tiktok_ic,
            link: ''
        }
    ]

    const contactSupportskData = [
        {
            icon: assets.mail_circle_ic,
            text: 'support@autoscan.az',
            link: ''
        },
        {
            icon: assets.whatsapp_small_ic,
            text: 'WhatsApp-a yazmaq',
            link: ''
        },
        {
            icon: assets.telegram_logo,
            text: 'Telegrama-a yazmaq',
            link: ''
        }
    ]

    return (
        <div className={'bg-white rounded-lg p-10 max-w-64 fixed z-50 bottom-20 left-56 shadow-lg ' + (isActiveModal ? 'slideRightIn' : 'slideRightOut')} ref={contactPopup}>
            <h5 className='text-[#1C1C1C] text-xl font-medium'>Dəstək</h5>
            <div className='my-6'>
                <ContactSupportLinks data={contactSupportskData} />
            </div>
            <div>
                <h6 className='text-sm mb-3 text-[#1C1C1C] font-medium'>Bizi sosial mediada izlə</h6>
                <ContactSocialLinks data={contactLinskData} />
            </div>
        </div>
    )
}

export default ContactPopup