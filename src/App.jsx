import { React,useContext } from "react"
import CreatePost from "./components/CreatePost/CreatePost"
import Profile from "./components/Profile/Profile"
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup"
import Home from "./pages/Home"
import { Navigate } from 'react-router';
import {  createBrowserRouter,  RouterProvider, Outlet} from "react-router-dom";
import Landing from "./pages/Landing"
import Messenger from "./components/Messenger/Messenger"
import { AuthContext } from "./context/AuthContext"
function App() {
  const { user } = useContext(AuthContext)
  const Layout=()=>{
    return (
      <div className="app">  
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {  
          path: "/",
          element: user ? <Home/> : <Signin/>
        },
        {  
          path: "/signup",
          element: user ? <Navigate to="/" /> : <Signup/>
        },
        {  
          path: "/signin",
          element: user ? <Navigate to="/" /> : <Signin/>
        },
        {  
          path: "/createpost",
          element: user ? <CreatePost/> : <Navigate to="/" />
        },
        {  
          path: "/profile",
          element: user ? <Profile/> : <Navigate to="/" /> 
        },
        {
          path: "/message",
          element: user ? <Messenger/> : <Navigate to="/" /> 
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
