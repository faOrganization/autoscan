import React from 'react'
const NavItem = ({ data }) => {
    const {text, link} = data;
    return (
        <a href={link}>
            <span className='font-semibold text-base text-slate block rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors'>
                {text}
            </span>
        </a>
    )
}
export default NavItem