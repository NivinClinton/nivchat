import React from 'react'
import './ChatList.css'

function ChatList() {
    return (
        <div className="chats">
            <div className="userChat" >
                <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg' alt="" />
                <div className="userChatInfo">
                    <span>Niv</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat" >
                <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg' alt="" />
                <div className="userChatInfo">
                    <span>Niv</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat" >
                <img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg' alt="" />
                <div className="userChatInfo">
                    <span>Niv</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList