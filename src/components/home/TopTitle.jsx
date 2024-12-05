import React from 'react'

const TopTitle = ({text}) => {
    return (
        <div className='bg-primary-t inline-block mb-4 lg:mb-12 text-center text-primary rounded-2xl text-sm font-medium py-1 px-3'>
            {text}
        </div>
    )
}

export default TopTitle