import React, { useContext, useRef, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import Connectify from '../other/Connectify'
import './Signin.scss'
import { loginCall } from "../../../apiCalls";
import {AuthContext} from '../../context/AuthContext'
const Signin = () => {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const handleClick = (e)=>{
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value},dispatch)
    // console.log(user)
  };
  return (
    <div>
      <Connectify/>
        <div className="signin">
            <h1>Signin</h1>
            <form className='inputdiv' onSubmit={handleClick}>
                <input 
                  type="email"
                  required
                  placeholder="Email"
                  ref={email}/>
                <input 
                  type="password"
                  required
                  placeholder="Password"
                  minLength={6}
                  ref={password}/>
                <button type="submit" disabled={isFetching}>{isFetching ? "Loading" : "Login"}</button>
            </form>
        </div>
        <div className="exists" disabled={isFetching}>
            <span>Create new Account</span>
            <Link to="/signup" className='link'>Signup</Link>
        </div>
    </div>
  )
}

export default Signin



// const Navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password,setPassword] = useState("");

//   let fetchdata = async ()=>{
//     try{
//       let response= await fetch("http://localhost:4444/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password
//         }),
//       })
//       const data = await response.json();
//       console.log(data)
//     }catch(err){
//       console.log(err)
//     }
//   }