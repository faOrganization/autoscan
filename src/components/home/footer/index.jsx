import React from 'react'
import Logo from '../../ui/Logo'

const Index = () => {
  return (
    <footer className='container mt-auto'>
        <div className='lg:flex items-center justify-between border-t border-silver pt-8 pb-12 lg:pb-28'>
            <div className='mb-6 lg:mb-0'>
                <Logo/>
            </div>
            <p className='font-normal text-base text-slate'>© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Index