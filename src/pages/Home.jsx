import React, { useEffect, useState } from 'react'
import Centrecard from '../components/Centercard/Centrecard'
import Navbar from '../components/Navbar/Navbar'
import Profilebox from '../components/Profilebox/Profilebox'
import Sidebar from '../components/Sidebar/Sidebar'
import SideFooter from '../components/SideFooter/SideFooter'
import './Home.scss'

const Home = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const getposts = async ()=>{
      try{
        await fetch("http://localhost:4444/api/posts/", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json())
        .then((data) => {
          setData(data)
          // console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }catch(err){
        console.log(err)
      }
    };
    getposts();
  },[])
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
        {data.map((dataValue)=>{
          // console.log(dataValue.userId)
          return <Centrecard title={dataValue.title} img={dataValue.img} body={dataValue.body} userId={dataValue.userId} key={dataValue._id}/>
        })}
        
      </div>
      <div className='sidefooterdiv'>
        <SideFooter/>
      </div>
    </div>
  )
}

export default Home