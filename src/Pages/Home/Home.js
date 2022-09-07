import React from 'react'
import ChatSection from '../../Components/ChatSection/ChatSection'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='container'>
              <Sidebar/>
              <ChatSection/>
            </div>
        </div>
    )
}

export default Home