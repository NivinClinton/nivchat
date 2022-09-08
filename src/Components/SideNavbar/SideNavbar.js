import React, { useContext } from 'react'
import './SideNavbar.css'
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../Context/AuthContext'

function SideNavbar() {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className='sideNavbar'>
            <span className="logo">NivChat</span>
            <div className="user">
            <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>logout</button>

            </div>
        </div>
    )
}

export default SideNavbar