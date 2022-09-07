import React from 'react'
import ChatList from '../ChatList/ChatList'
import Search from '../Search/Search'
import SideNavbar from '../SideNavbar/SideNavbar'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SideNavbar/>
        <Search/>
        <ChatList/>
    </div>
  )
}

export default Sidebar