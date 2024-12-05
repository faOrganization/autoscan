import React from 'react'
import SideNavBtn from './SideNavBtn'
import Provider from '../../../context/RefContext'

const SideNavBtns = ({ data }) => {
    return (
            <div>
            {
                data.map((data, index) => (
                    <SideNavBtn key={index} data={data} />
                ))
            }
        </div>
    )
}

export default SideNavBtns