import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import useLogin from "./Context/Context";
import "../Auth.css";
import {app} from '../firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

import bgVideo from "../components/Video/foodbg.mp4"

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {isLoggedIn, setIsLoggedIn} = useLogin();
  const [forgetPwd, setForgetPwd] = useState(false);

  const navigate = useNavigate();

  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      data ? setIsLoggedIn(true) : setIsLoggedIn(false);
    })
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    if(!username || !password){
      toast.error('Please enter all fields');
    } else if (!username.toLowerCase().includes('@gmail.com')) {
      toast.error("username not found");
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
    } else{
      signInWithEmailAndPassword(auth, username, password)
      .then((response) => {
        toast.success("Successfully Signed In");
        navigate('/home');
      })
      .catch((err) => {
        toast.error("Invalid Username or Password");
        setForgetPwd(true);
      });
    }
  };
  
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then(() => {
      toast.success("Successfully Signed In");
      // setIsLoggedIn(true);
      // localStorage.setItem('myValue', true);
      navigate('/home');
    })
    .catch((err) => {
      toast.error(err);
      console.log(err);
    })
  }

  return (
    <>
    {
      !isLoggedIn ?
      (
        <> 
        <div className="login-page">
      <video src={bgVideo} muted autoPlay loop></video>
      <div className="box">
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <div className="forgetPwd">
            <Link to={'/recoverPassword'}>
              <span>
                {forgetPwd ? "Forget Password ?" : ""}
              </span>
            </Link>
          </div>
          <div className="loginBtn">
            <button type="submit" onClick={handleLogin}>Login</button>
          </div>
          <div className="OR">
            <h6>OR</h6>
          </div>
          <div className="Google">
            <button onClick={handleGoogle}>
              <div className="google-icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
              </div>
              Sign in with Google
            </button>
          </div>
          <hr/>
          <div className="newUser">
            <p>New to Food Blog?</p>
            <Link to={'/signup'}>
              Create an account
            </Link>
          </div>
        </form>
      </div>

    </div>
        </>) : (<>
        {navigate('/home')}
          </>)
    }
    </>
    
  );
};

export default LoginPage;