import React from 'react'
import { assets } from '../../../../assets/assets'

const BannerImg = () => {
    return (
        <div className='size-40 lg:size-[264px] mx-auto b-animation flex relative'>
            <img src={assets.car_top_img} alt="Car" className='size-16 lg:size-28 m-auto'/>
        </div>
    )
}

export default BannerImg