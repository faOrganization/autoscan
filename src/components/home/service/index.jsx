import React from 'react'
import TopTitle from '../topTitle'
import SectionHeader from '../SectionHeader'
import Banner from './Banner';
import Features from '../../ui/feature'
import { assets } from '../../../assets/assets';

const Index = () => {
  const h_props = {
    title: 'Avtomobil zədələrini saniyələr içində aşkar et!',
    desc: 'AI sistemimizlə qəza sonrası zədələri sürətlə və dəqiqliklə müəyyən edə biləcəksiniz!',
  }

  const data = [{
    icon: assets.expand_h_ic,
    title: 'Zədənin təhlili',
    desc: 'Avtomobil zədələrini analiz edərək, zərər və təmir ehtiyaclarını müəyyən edirik.'
  },
  {
    icon: assets.bolt_h_ic,
    title: 'Sürətli nəticələr',
    desc: 'AI ilə qiymətləndirmə saniyələr içində edilir, beləliklə, təmirə vaxtında başlaya bilərsiniz.'
  },
  {
    icon: assets.chart_h_ic,
    title: 'Dəqiq Hesablama',
    desc: 'AI texnologiyası zərərin dəqiq hesablanmasını təmin edir və sizə ən uyğun həlli təqdim edir.'
  }]


  return (
    <section id='features' className='pt-8 lg:pt-12'>
      <div className='text-center'>
        <TopTitle text='Xüsusiyyətlər' />
      </div>
      <SectionHeader header_props={h_props} />
      <div className='mt-12 lg:mt-16 mb-16 lg:mb-24'>
        <Features data={data} />
      </div>
      <Banner />
    </section>
  )
}

export default Index