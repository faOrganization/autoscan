import modalsData from '../../lib/modalsData';
import { useModals, isActive } from '../../util/modal';
import CloseBtn from './CloseBtn';
import {useEffect, useState} from 'react';

const Index = () => {
    const modals = useModals();
    const isActiveModal = isActive();       
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = isActiveModal ? "hidden" : "auto";
        }
        window.scrollTo(0, 0);
    }, [isActiveModal]);

    useEffect(() => {

    }, [])

    return (
        <div className='absolute size-full inset-0 overflow-y-auto z-40' style={{ display: modals.length > 0 ? "block" : "none" }} >
            <div className={'bg-[#000000b6] fixed inset-0 z-40 ' + (isActiveModal ? 'fadeIn' : 'fadeOut')}></div>
            <div className='relative w-full min-h-full flex justify-center items-center z-50'>
                <div className={'flex bg-white rounded-none sm:rounded-lg sm:overflow-hidden overflow-y-auto size-full sm:w-[448px] fixed sm:relative z-20 ' +( isActiveModal ? 'max-sm:slideIn sm:zoomIn' : 'max-sm:slideOut sm:zoomOut') }>
                    <CloseBtn/>
                    <div className='sm:max-w-full max-w-[424px] w-full m-auto sm:p-11 p-8'>
                        {
                            modals.map((modal, index) => {
                                const m = modalsData.find((m) => m.name == modal.name);
                                return <m.element key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index