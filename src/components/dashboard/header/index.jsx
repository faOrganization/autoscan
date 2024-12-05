import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../features/auth/authSlice'
import AvatarBtn from '../../ui/AvatarBtn'

const Index = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h3 className='text-2xl font-semibold text-[#1C1C1C] mb-1'>Salam, {user.firstname}!</h3>
      </div>
      <div className='mr-4'><AvatarBtn/></div>
    </div>
  )
}

export default Index