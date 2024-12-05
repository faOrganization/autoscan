import React from 'react';
import modalsData from '../../../lib/modalsData';
import { useModals } from '../../../util/modal';
import Provider from '../../../context/RefContext';

const Index = () => {
    const modals = useModals();
    return (
        <>
            {
                modals.map((modal, index) => {
                    const m = modalsData.find((m) => m.name == modal.name);
                    return <m.element key={index} />
                })
            }
        </>
    )
}
export default Index;