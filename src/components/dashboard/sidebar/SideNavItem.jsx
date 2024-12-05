import React from 'react'
import { NavLink } from 'react-router-dom';

const SideNavItem = ({ data }) => {
    const { text, icon, link } = data;
    return (
        <li>
            <NavLink to={link} end className={({ isActive, isPending }) => (
               isPending ? " pending " : isActive ? " active " : "")  + 'transition-[margin-left] block'
            }>
                <span className="navLink-item flex items-center rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors">
                    <img src={icon} alt={text} className="mr-4" />
                    {text}
                </span>
            </NavLink>
        </li>
    )
}

export default SideNavItem