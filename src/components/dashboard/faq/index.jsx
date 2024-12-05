import React from 'react'
import Accordion from '../../ui/accordion'
import {faq} from '../../../data/accordionsData'

const Index = () => {

  return (
    <div className='bg-white w-full rounded-lg p-7 cont-h'>
      <div className='border-b border-silver mb-8 py-6'>
        <h3 className='font-semibold text=[#1C1C1C] text-lg'>Tez-tez verilən suallar</h3>
      </div>
      <div className='space-y-2'>
        <Accordion data={faq} version='2' />
      </div>
    </div>
  )
}

export default Index