import React from 'react'
import './Sidebar.scss'
const Sidebar = () => {
  return (
    <div>
        <div className="sidecontainer">
            <span><i class="fa-solid fa-paper-plane"></i> My Posts</span>
            <span><i class="fa-solid fa-chart-line"></i> Activity</span>
            <span><i class="fa-solid fa-shop"></i> Marketplace</span>
            <span><i class="fa-solid fa-memory"></i> Memories</span>
            <span><i class="fa-solid fa-calendar-days"></i> Event</span>
            <span><i class="fa-solid fa-circle-play"></i>Live Videos</span>
            <span><i class="fa-solid fa-hand-holding-heart"></i>Support</span>
            <span><i class="fa-sharp fa-solid fa-gear"></i>Settings</span>
        </div>
    </div>
  )
}

export default Sidebar