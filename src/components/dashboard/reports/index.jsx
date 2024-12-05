import React from 'react'
import TableOne from '../table/TableOne'

const Index = () => {
  
  return (
    <div className='bg-white w-full rounded-lg p-7 cont-h'>
    <div className='border-b border-silver mb-8 py-6'>
      <h3 className='font-semibold text=[#1C1C1C] text-lg'>Əvvəlki hesabatlar</h3>
    </div>

    <div>
        <TableOne/>
    </div>
    
  </div>
  )
}

export default Index