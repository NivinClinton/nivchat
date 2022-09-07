import React from 'react'
import './SideNavbar.css'

function SideNavbar() {
    return (
        <div className='sideNavbar'>
            <span className="logo">NivChat</span>
            <div className="user">
                <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg    ' alt="" />
                <span>Niv</span>
                <button >logout</button>

            </div>
        </div>
    )
}

export default SideNavbar