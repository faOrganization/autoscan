import React from 'react';
import Accordion from '../../ui/accordion'
import {TermsAndConds} from '../../../data/accordionsData'

const Index = () => {


    return (
        <div className='bg-white w-full rounded-lg p-7 cont-h'>
            <div className='space-y-2 max-w-3xl'>
                <Accordion data={TermsAndConds} version='2' />
            </div>
        </div>
    )
}

export default Index