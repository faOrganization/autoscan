import React from 'react'

const FeatureInnerTxts = ({data}) => {
    const {title, desc} = data;
    return (
        <div className='max-w-sm mx-auto'>
            <h3 className='mb-2 text-xl font-semibold text-[#101828]'>{title}</h3>
            <p className='text-lg text-slate'>{desc}</p>
        </div>
    )
}

export default FeatureInnerTxts