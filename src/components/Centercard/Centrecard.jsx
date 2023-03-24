import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Centrecard.scss'

const Centrecard = ({title, img , body, userId, postId}) => {
    // if(userId){
    //     console.log(userId)
    // }
    const { user } = useContext(AuthContext);

    const [follow,setFollow]=useState(true);
    const [followBtn,isFollowed]=useState(false)

    const [like,setLike]=useState(false);
    const [likeBtn,isLiked]=useState(false) 
    
    const [displayComments,setdiplayComments]=useState(false);
    const [btn,isCliked]=useState(false)
    
    const [userData,setUserData]=useState()
    const [postData,setPostData]=useState()
    const [followers,setFollowers]=useState(0)
    

    const followclick = ()=>{
        const follow = async ()=>{
            const currentUserId ={ userId: user._id}
            // console.log("http://localhost:4444/api/users/" + userId +"/follow")
            try{
                await fetch("http://localhost:4444/api/users/" + userId +"/follow", {
                    method: "PUT",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                })
            }catch(err){
                console.log(err)
            }
        };
        follow();
        isFollowed(!followBtn)

    }

    const unfollowclick = ()=>{
        const unFollow = async ()=>{
            const currentUserId ={ userId: user._id}
            // console.log("http://localhost:4444/api/users/" + userId +"/unfollow")
            try{
                await fetch("http://localhost:4444/api/users/" + userId +"/unfollow", {
                    method: "PUT",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                })
            }catch(err){
                console.log(err)
            }
        };
        unFollow();
        isFollowed(!followBtn)

    }


    const likeclick = ()=>{
        const like = async ()=>{
            const currentUserId ={ userId: user._id}
            // console.log("http://localhost:4444/api/users/" + postId +"/unfollow")
            try{
                await fetch("http://localhost:4444/api/posts/" + postId +"/like", {
                    method: "PUT",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                })
            }catch(err){
                console.log(err)
            }
        };
        like();
        isLiked(!likeBtn)

    }


    const unlikeclick = ()=>{
        const unlike = async ()=>{
            const currentUserId ={ userId: user._id}
            // console.log("http://localhost:4444/api/users/" + postId +"/unfollow")
            try{
                await fetch("http://localhost:4444/api/posts/" + postId +"/unlike", {
                    method: "PUT",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                })
            }catch(err){
                console.log(err)
            }
        };
        unlike();
        isLiked(!likeBtn)

    }

    const deleteClick = ()=>{
        const deletePost = async ()=>{
            const currentUserId ={ userId: user._id}
            try{
                await fetch("http://localhost:4444/api/posts/" + postId, {
                    method: "DELETE",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                })
            }catch(err){
                console.log(err)
            }
        };
        deletePost();
    }

    const repostClick = ()=>{
        const rePost = async ()=>{
            const rePostData ={ 
                userId: user._id,
                title:title,
                body:body,
                img:img,
            }
            try{
                await fetch("http://localhost:4444/api/posts/", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(rePostData),
                })
                // const data = await response.json();
                Navigate('/')
            }catch(err){
                console.log(err)
            }
        };
        rePost();
    }

    useEffect(()=>{
        const getUserDetails = async ()=>{
            try{
                await fetch("http://localhost:4444/api/users/" + userId, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                }).then((response) => response.json())
                .then((data) => {
                    setUserData(data)
                    // console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }catch(err){
                console.log(err)
            }
        };
        getUserDetails();
    },[])

    useEffect(()=>{
        const getPostDetails = async ()=>{
            try{
                await fetch("http://localhost:4444/api/posts/" + postId, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                }).then((response) => response.json())
                .then((data) => {
                    setPostData(data)
                    // console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }catch(err){
                console.log(err)
            }
        };
        getPostDetails();
    },[])

    useEffect(() => {
        setFollow(!follow);
        setFollowers(userData?.followers.length)
    },[followBtn])
    useEffect(() => {
        setLike(!like);
    },[likeBtn])

    useEffect(() => {
        setdiplayComments(!displayComments);
    },[btn])

    useEffect(()=>{
        const isFollowing = async ()=>{
            const currentUserId ={ userId: user._id}
            try{
                await fetch("http://localhost:4444/api/users/" + userId + "/isfollowing", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                }).then((response) => response.json())
                .then((data) => {
                    setFollow(data)
                    // console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }catch(err){
                console.log(err)
            }
        };
        isFollowing();
        setFollowers(userData?.followers.length)
        console.log(userData?.followers.length)
    },[])

    useEffect(()=>{
        const isLiking = async ()=>{
            const currentUserId ={ userId: user._id}
            try{
                await fetch("http://localhost:4444/api/posts/" + postId + "/isliked", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserId),
                }).then((response) => response.json())
                .then((data) => {
                    setLike(data)
                    // console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }catch(err){
                console.log(err)
            }
        };
        isLiking();
    },[])

    
    
  return (
    <div>
        <div className='cardcontainer'>
            <span className='cardhead'>
                <img src={userData?.profilePicture} alt=""/>
                <div className='userDetails'>
                    <h2>{userData?.username}</h2>
                    <span>{userData?.followers.length} followers</span>
                </div>
                {(postData?.userId  !== user._id) && <button onClick={!follow? followclick : unfollowclick }>{!follow ? (<><i className="fa-solid fa-plus"></i> Follow</> ): "Following"}</button> }
                {(postData?.userId  === user._id) && <button onClick={deleteClick}>{<><i className="fa-solid fa-trash-can"> </i> Delete</>}</button> }
            </span>
            <span className='title'>{title}</span>
            <span className='description'>{body}</span>
            <div className='postimg' >
                <img src={img} alt="" />
            </div>
            <div className='likes'>
                <span onClick={!like? likeclick : unlikeclick}>
                    {!like ? <><i className="fa-regular fa-heart"></i> Like</>:<><i className="fa-solid fa-heart  filled"></i> Liked</>}
                </span>
                {/* <span>
                    <i class="fa-solid fa-share"></i>
                    Share
                </span> */}
                <span onClick={()=>{isCliked(!btn) }}>
                <i className="fa-sharp fa-regular fa-comment"></i>
                    Comments
                </span>
                <span onClick={repostClick}>
                    <i className="fa-solid fa-retweet"></i>
                    Repost
                </span>
            </div>
            <span className={displayComments? "commentsbox hidecomments": "commentsbox"}>
                <h3>Comments</h3>
                <div className='commenthere'>    
                    <input type="text" placeholder='Comment here'/>
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </div>
                <span><b> Mr. Beast:</b>Great!!!</span>
                {/* comment wala yaha karna */}
            </span>
        </div>
    </div>
  )
}

export default Centrecard