import React from 'react'
import './Message.css'

function Message() {
    return (

        <div className="message owner">
            <div className="messageInfo">
                <img
                    src="https://c.ndtvimg.com/2020-05/tkqluj48_virat-kohli-afp_625x300_30_May_20.jpg"
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Good Morning</p>
                <img src="https://images.hindustantimes.com/img/2022/08/11/550x309/kohli-not-pleased-getty_1658856757123_1660225554990_1660225554990.jpg" alt="" />
            </div>
        </div>
    )
}

export default Message