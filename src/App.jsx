import React from "react"
import CreatePost from "./components/CreatePost"
import Profile from "./components/Profile"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./pages/Home"
import {  createBrowserRouter,  RouterProvider, Outlet} from "react-router-dom";
import Landing from "./pages/Landing"

function App() {
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
          element:<Landing/>
        },
        {  
          path: "/signup",
          element:<Signup/>
        },
        {  
          path: "/signin",
          element:<Signin/>
        },
        {  
          path: "/createpost",
          element:<CreatePost/>
        },
        {  
          path: "/profile",
          element:<Profile/>
        },
        {  
          path: "/home",
          element:<Home/>
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
