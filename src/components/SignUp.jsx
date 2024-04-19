import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useLogin from "./Context/Context";
import "../Auth.css";

// video
import bgVideo from "../components/Video/foodbg.mp4";

function SignUp() {
  const navigate = useNavigate();

  let auth = getAuth();
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      data ? setIsLoggedIn(true) : setIsLoggedIn(false);
    })
  },[])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleemailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAccount = (e) => {
    e.preventDefault();
    const termsAndCondition = document.querySelector(`input[id="accept"]`);

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill all the field");
    } else if (!email.toLowerCase().includes('@gmail.com')) {
      toast.error("email format not accepted");
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
    } else if (confirmPassword !== password) {
      toast.error("Password and Confirm Password doesn't match");
    } else if (!termsAndCondition.checked) {
      toast.error("Accept Terms and Condition");
    }  else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Successfully Signed Up");
          setIsLoggedIn(true);
          navigate('/home');
        })
        .catch((err) => {
          toast.error("email already exist");
        });
    }
  };

  return (
    <> 
    {
      !isLoggedIn ? (
        <>

<div className="signup">
        <video src={bgVideo} muted autoPlay loop></video>
        <div className="box">
          <h2>Signup</h2>
          <form>

            <div>
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email.."
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password.."
              />
            </div>

            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password.."
              />
            </div>

            <div className="tc">
              <label id="accept">
                <input type="checkbox" id="accept" />
                <p>
                  I agree to Food Blog's <span>Terms of Service</span>,&nbsp;
                  <span>Privacy Policy</span> and &nbsp;
                  <span>Content Policies</span>
                </p>
              </label>
            </div>

            <div className="createAcc">
              <button onClick={handleAccount}>Create account</button>
            </div>

            <hr />

            <div className="loggedin">
              <p>Already have an account?</p>
              <Link to={"/login"}>Log in</Link>
            </div>
          </form>
        </div>
      </div>

        </>
      )
        : (
          <> 
            {navigate('/home')}
          </>
        )
    }
    </>
  );
}

export default SignUp;
