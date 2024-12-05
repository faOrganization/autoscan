import React, { useEffect, useState } from 'react'
import SectionHeader from '../SectionHeader'
import Accordions from '../../ui/accordion'
import {faq} from '../../../data/accordionsData'

const Faq = () => {
  const h_props = {
    title: 'Tez-tez verilən suallar',
    desc: 'Autoscan.ai haqqında ən çox verilən suallarla tanış ola bilərsiniz.',
  }

  return (
    <section id='faq' className='pt-8 lg:pt-12'>
      <SectionHeader header_props={h_props} />
      <div className='space-y-p1 divide-y max-w-3xl mx-auto mt-12 lg:mt-16'>
        <Accordions data={faq} version='1' />
      </div>
    </section>
  )
}

export default Faq