import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './NewsBox.scss'
const NewsBox = () => {
  const [news, setNews]= useState([]);
  useEffect(()=>{
      const getNews = async ()=>{
          try{
            await fetch("https://inshorts.deta.dev/news?category=all" , {
              method: "GET",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((response) => response.json())
            .then((data) => {
              setNews(data.data)
              // console.log(friends)
              // console.log("Success:", data.data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          }catch(err){
            console.log(err)
          }
        };
        getNews();
    },[])
  return (
    <div className='newsBox'>
      <h1>Happening Today</h1>
        <div className='allnews'>
        { news && 
            news.map((n)=>{
              // console.log(n);
              return(
              <div className='news' key={n.id}>
                <div className='img'><img src={n.imageUrl} alt="" /></div>
                <div className='content'><span>{n.content}</span></div>
                <div className='author'>Author: {n.author}</div>
                <Link to={n.url} target="_blank">Read More</Link>
              </div>);
          })}
          </div>
    </div>
  )
}

export default NewsBox