import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import Connectify from './Connectify'
import './Signin.scss'
const Signin = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const signindata = ()=>{
    // fetching the data
    // The Fetch API provides a JavaScript interface for accessing 
    // and manipulating parts of the protocol, such as requests and responses. 
    // It also provides a global fetch() method that provides an easy, 
    // logical way to fetch resources asynchronously across the network.
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email){
        M.toast({html:"invalid email",classes:"#e53935 red darken-1"})
        return;
    }
    fetch('/signin',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            M.toast({html:data.error,classes:"#e53935 red darken-1"})
        }
        else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            M.toast({html:"Yayyy! your are into the world of Connectify",classes:"#00c853 green accent-4"})
            Navigate('/')
        }
    }).catch(err=>{
      console.log(err)
    })

    
  }
  return (
    <div>
      <Connectify/>
        <div className="signin">
            <h1>Signin</h1>
            <div className='inputdiv'>
                <input type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={()=>signindata()} id="btn">Log in</button>
            </div>
        </div>
        <div className="exists">
            <span>Create new Account</span>
            <Link to="/signup" className='link'>Signup</Link>
        </div>
    </div>
  )
}

export default Signin