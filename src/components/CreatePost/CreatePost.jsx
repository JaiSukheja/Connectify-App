import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './CreatePost.scss'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from "../../context/AuthContext";
const CreatePost = () => {
  const { user } = useContext(AuthContext)
  const navigateTo = useNavigate();
  const title = useRef();
  const body = useRef();
  const [url,setUrl] = useState("");
  const [image, setImage] = useState("");
  useEffect(()=>{
    if(url){
      const post = {
        userId: user._id,
        title: title.current.value,
        body: body.current.value,
        img: url,
      }
      let fetchdata = async ()=>{
        try{
          let response= await fetch("http://localhost:4444/api/posts/", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
          })
          const data = await response.json();
          console.log(data);
          navigateTo('/')
        }catch(err){
          console.log(err)
        }
      }
      fetchdata();
    }
  },[url])
  const handleClick = (e)=>{
    e.preventDefault();
    const postdata = () => {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "connectify");
      data.append("cloud_name", "du1pi2myd");
  
      fetch("https://api.cloudinary.com/v1_1/du1pi2myd/image/upload", {
        method: "post",
        body: data,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setUrl(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    postdata();
  };
  return (
    <div>
      <Navbar/>
        <div className="createPost">
            <h1>Create Your Post</h1>
            <form className='inputdiv' onSubmit={handleClick}>
                <input className="title"
                  type="text"
                  required
                  placeholder="Title"
                  ref={title}/>
                <input className="body"
                  type="text"
                  placeholder="Description"
                  ref={body}/>
                <div className='uploaddiv'>
                    <button>Browse</button>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='Image'/>
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePost



// const Navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");

//   useEffect(() => {
//     if (url) {
//       fetch('/createpost',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//             //  "Authorization": "Bearer " + localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             title,
//             body,
//             url: url  
//         })
//     })
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           if (data.error) {
//             M.toast({ html: data.error, classes: "#e53935 red darken-1" });
//           }
//           else {
//             M.toast({
//               html: "Posted Successfully :)",
//               classes: "#00c853 green accent-4",
//             });
//             Navigate("/");
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [url]);
//   const postdata = () => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "connectify");
//     data.append("cloud_name", "du1pi2myd");

//     fetch("https://api.cloudinary.com/v1_1/du1pi2myd/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setUrl(data.url);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };