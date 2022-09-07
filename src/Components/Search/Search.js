import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          
        />
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

export default Search