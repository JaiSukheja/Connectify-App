import React from 'react'
import Centrecard from '../components/Centercard/Centrecard'
import Navbar from '../components/Navbar/Navbar'
import Profilebox from '../components/Profilebox/Profilebox'
import Sidebar from '../components/Sidebar/Sidebar'
import SideFooter from '../components/SideFooter/SideFooter'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
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

export default Home