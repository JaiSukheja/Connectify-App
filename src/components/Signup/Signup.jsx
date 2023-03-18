import React, { useRef } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Connectify from '../other/Connectify'
import M from 'materialize-css'
import './Signup.scss'
const Signup = () => {
    const navigateTo = useNavigate();
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const handleClick = (e)=>{
      e.preventDefault();
      if(password.current.value !== confirmPassword.current.value){
        console.log(password.current.value ,confirmPassword.current.value)
        confirmPassword.current.setCustomValidity("Password don't match!")
      }else{
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        }
        let fetchdata = async ()=>{
          try{
            let response= await fetch("http://localhost:4444/api/auth/signup", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            })
            const data = await response.json();
            // console.log(data);
            navigateTo('/')
          }catch(err){
            console.log(err)
          }
        }
        fetchdata();

      }
    };
  return (
    <div>
      <Connectify/>
        <div className="signup">
            <h1>Signup</h1>
            <form className='inputdiv' onSubmit={handleClick}>
                <input type="email"
                  required
                  placeholder="Email"
                  ref={email}
                  />
                <input type="text"
                  required
                  placeholder="Username"
                  ref={username}
                  />
                <input type="password"
                  required
                  placeholder="Password"
                  ref={password}
                  />
                <input type="Password"
                  required
                  placeholder=" Confirm Password"
                  ref={confirmPassword}
                  />
                <button type="submit">Sign up</button>
            </form>
        </div>
        <div className="exists">
            <span>Already Have an Account </span>
            <Link to="/signin" className='link'>Signin</Link>
        </div>
    </div>
  )
}

export default Signup



// const Navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [username,SetUsername] = useState("");
//     let fetchdata = async ()=>{
//       try{
//         let response= await fetch("http://localhost:4444/api/auth/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username,
//             name,
//             email,
//             password
//           }),
//         })
//         const data = await response.json();
//         console.log(data)
//       }catch(err){
//         console.log(err)
//       }
//     }
    