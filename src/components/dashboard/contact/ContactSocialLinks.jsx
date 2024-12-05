import React from 'react'

const ContactSocialLinks = ({ data }) => {
    return (
        <ul className='flex space-x-3'>
            {
                data.map((data, index) => (
                    <li key={index}><a href={data.link}><span className='rounded-full bg-primary-t size-5 flex'>
                        <img src={data.icon} alt="Linkedin" className='m-auto' />
                    </span></a>
                    </li>
                ))
            }
        </ul>
    )
}

export default ContactSocialLinks