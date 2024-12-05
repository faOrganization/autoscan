import BannerInnerTxts from './BannerInnerTxts';
import BannerImg from './BannerImg';
import React from 'react'

const Index = () => {
    return (
        <div className='rounded-2xl w-full bg-gradient-to-r from-[#D697F6] to-[#2C36A9] pt-5 pb-16 px-4'>
            <BannerImg/>
            <BannerInnerTxts/>
        </div>
    )
}

export default Index;