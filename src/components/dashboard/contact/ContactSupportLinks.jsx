import React from 'react'

const ContactSupportLinks = ({ data }) => {
    return (
        <ul className='space-y-6 text-black font-semibold text-sm'>
            {
                data.map((data, index) => (
                    <li key={index} className='flex items-center'><a href={data.link} className='flex items-center'><img src={data.icon} alt="Email" className='mr-4' /> <span>{data.text}</span></a></li>
                ))
            }
        </ul>
    )
}

export default ContactSupportLinks