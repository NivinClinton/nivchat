import React from 'react'
import './ChatSection.css'
import Cam from "../../Images/cam.png";
import Add from "../../Images/add.png";
import More from "../../Images/more.png";
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

function ChatSection() {
    return (
        <div className="chatSection">
            <div className="chatInfo">
                <span>Niv</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>

        </div>
    )
}

export default ChatSection