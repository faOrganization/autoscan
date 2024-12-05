import React from 'react'

const ReportImgs = ({ data }) => {
    const imagesLength = data.length;
    const imagesBig = data.filter((img, index) => {
        if (index < 2) {
            return img
        }
    })
    const imagesSmall = data.filter((img, index) => {
        if (index > 1) {
            return img
        }
    })
    return (
        <div className='bg-white p-3 rounded-lg h-[360px] w-full flex gap-3'>
            {
                imagesBig.map((img, index) => (
                    <div key={index} className='h-full relative w-full '>
                        <img src={img} alt='' className='inset-0 absolute size-full object-cover rounded-md' />
                    </div>
                ))
            }
            {
                imagesLength > 2 && <div className='flex flex-col h-full w-full gap-3'>
                    {
                        imagesSmall.map((img, index) => (
                            <div key={index} className='h-full relative w-full'>
                                <img src={img} alt='' className='inset-0 absolute size-full object-cover rounded-md' />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default ReportImgs