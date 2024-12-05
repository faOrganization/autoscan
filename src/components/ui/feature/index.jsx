import FeatureInnerTxts from './FeatureInnerTxts'
import FeatureIcon from './FeatureIcon'
import React from 'react'

const Index = ({ data }) => {
    return (
        <div className='space-y-10 md:space-y-0 md:grid grid-cols-1 md:gap-12 lg:grid-cols-3'>
            {
                data?.map((data, index) => (
                    <div key={index} className='text-center'>
                        <FeatureIcon icon={data.icon}/>
                        <FeatureInnerTxts data={data} />
                    </div>
                ))
            }
        </div>
    )
}

export default Index