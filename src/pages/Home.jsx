import React from 'react'
import Centrecard from '../components/Centrecard'
import Navbar from '../components/Navbar'
import Profilebox from '../components/Profilebox'
import Sidebar from '../components/Sidebar'
import SideFooter from '../components/SideFooter'
import './Home.scss'
import '../components/gradient.scss'

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