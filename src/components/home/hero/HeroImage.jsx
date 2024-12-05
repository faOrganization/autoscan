import React from 'react'
import { assets } from "../../../assets/assets";

const HeroImage = () => {
    return (
        <div className='rounded-2xl md:rounded-[20px] overflow-hidden'>
            <img src={assets.hero_img} alt="Car" />
        </div>
    )
}

export default HeroImage