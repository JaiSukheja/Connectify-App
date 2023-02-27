import React from 'react'
import Centrecard from '../components/Centrecard'
import Navbar from '../components/Navbar'
import Profilebox from '../components/Profilebox'
import Sidebar from '../components/Sidebar'
import SideFooter from '../components/SideFooter'
import './Main.scss'
const Main = () => {
  return (
    <div className='main'>
      <div className='navbardiv'>
        <Navbar/>
      </div>
      <div className='sidebardiv'>
        <Profilebox/>
        <Sidebar/>
      </div>
      <div className='centrediv'>
        <Centrecard/>
        <Centrecard/>
        <Centrecard/>
        <Centrecard/>
        <Centrecard/>
      </div>
      <div className='sidefooterdiv'>
        <SideFooter/>
      </div>
    </div>
  )
}

export default Main