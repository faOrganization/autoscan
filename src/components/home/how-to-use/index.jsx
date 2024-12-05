import React from 'react'
import SectionHeader from '../SectionHeader'
import TopTitle from '../TopTitle'
import { assets } from '../../../assets/assets'
import Features from '../../ui/feature'

const HowToUse = () => {
    const h_props = {
        title: 'AI ilə 3 addımda həll!',
        desc: 'Avtozədələrlə bağlı stress yaşamayın! AI texnologiyamız sizə dərhal kömək edəcək.',
    }

    const data = [{
        icon: assets.user_h_ic,
        title: 'Qeydiyyatdan keçin',
        desc: `Profilinizi yaradın, hesabınıza daxil olun və prosesə başlamaq üçün addımları izləyin.`
    },
    {
        icon: assets.scan_h_ic,
        title: 'Şəkilləri yükləyin',
        desc: `Avtomobilin zədələnmiş hissələrinin şəkillərini yükləyin, AI onları təhlil edəcək.`
    },
    {
        icon: assets.folder_h_ic,
        title:  'Hesabatı əldə edin',
        desc: `Sistem avtomobil zədələrini sürətlə təhlil edib, sizə detallı hesabat təqdim edəcək.`
    }]; 

    return (
        <section id='how-to-use' className='pt-8 lg:pt-12'>
            <div className='border-b border-silver pb-16 lg:pb-24'>
                <div className='text-center'>
                    <TopTitle text='Necə istifadə etməli?' />
                </div>
                <SectionHeader header_props={h_props} />
                <div className='my-12 lg:mt-20 lg:mb-24'>
                    <img src={assets.dashboard_v_img} alt="" />
                </div>
                <Features data={data} />
            </div>
        </section>
    )
}

export default HowToUse
