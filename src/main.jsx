import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';

const routes = createBrowserRouter([
  {
    path: "/",
    element : <Home></Home>,
    children : [
      {
        path : "/",
        element : <Shop></Shop>
      },
      {
        path : "/shop",
        element : <Shop></Shop>
      },
      {
        path : "login",
        element : <Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
