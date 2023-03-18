import React from 'react'
import './Sidebar.scss'
const Sidebar = () => {
  return (
    <div>
        <div className="sidecontainer">
            <span><i className="fa-solid fa-paper-plane"></i> My Posts</span>
            <span><i className="fa-solid fa-chart-line"></i> Activity</span>
            <span><i className="fa-solid fa-shop"></i> Marketplace</span>
            <span><i className="fa-solid fa-memory"></i> Memories</span>
            <span><i className="fa-solid fa-calendar-days"></i> Event</span>
            <span><i className="fa-solid fa-circle-play"></i>Live Videos</span>
            <span><i className="fa-solid fa-hand-holding-heart"></i>Support</span>
            <span><i className="fa-sharp fa-solid fa-gear"></i>Settings</span>
        </div>
    </div>
  )
}

export default Sidebar