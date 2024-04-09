import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import BlogPost from './components/BlogPost/BlogPost.jsx'
import Contact from './components/Contact/Contact.jsx'
import Elements from './components/Elements/Elements.jsx'
import ReceipePost from './components/ReceipePost/ReceipePost.jsx'
import Search from './components/Search/Search.jsx'
import App from './App.jsx'
import SignUp from './components/SignUp.jsx'
import LoginPage from './components/LoginPage.jsx'
import PhoneNumber from './components/PhoneNumber.jsx'

const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='home' element={<Home/>}></Route>
      <Route path='about' element={<AboutUs/>}></Route>
      <Route path='blog-post' element={<BlogPost/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='elements' element={<Elements/>}></Route>
      <Route path='receipe-post' element={<ReceipePost/>}></Route>
      <Route path='search' element={<Search/>}></Route>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='login' element={<LoginPage/>}></Route>
      <Route path='recoverPassword' element={<PhoneNumber/>}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router1} />
  </React.StrictMode>,
)
