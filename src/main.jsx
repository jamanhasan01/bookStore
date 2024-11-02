import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
     { 
      path:'/',
      element:<Home/>
    },
     { 
      path:'about',
      element:<About/>
    },
     { 
      path:'contact',
      element:<Contact/>
    }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
