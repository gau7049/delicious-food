import React, { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import ReactToTop from './components/ReactToTop'
import useLogin, { LoginProvider } from './components/Context/Context'
import LoginPage from './components/LoginPage'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function Layout() {
  let auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return (
      onAuthStateChanged(auth, (data) => {
        data ? setIsLoggedIn(true) : setIsLoggedIn(false);
      })
    )
  })

  return (
    <>
    <LoginProvider value={{isLoggedIn, setIsLoggedIn}}>
    {
      isLoggedIn ? (
        <>
          <Header />
          <ReactToTop />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Outlet />
      )
      
    }
    </LoginProvider>
    </>
  )
}

export default Layout