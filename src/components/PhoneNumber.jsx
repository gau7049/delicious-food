import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useLogin from "./Context/Context";
import "../Auth.css";

import bgVideo from "../components/Video/foodbg.mp4";
import {
  getAuth,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import "react-phone-input-2/lib/style.css";
import OtpInput from "otp-input-react";

function PhoneNumber() {
  let auth = getAuth();
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [countryCode, setCountryCode] = useState("91");

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (data) => {
        data ? setIsLoggedIn(true) : setIsLoggedIn(false);
      });
    };
  }, []);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup(e) {
    e.preventDefault();
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    if (phoneNumber.length + countryCode.length !== 12) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    const formatPh = "+" + countryCode + phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        toast.error("Try Again, later");
        console.log(error);
      });
  }

  function onOTPVerify(e) {
    e.preventDefault();
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setUser(res.user);
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Try Again, later");
        console.log(err)
      });
  }

  return (
    <>
      <div className="ph-num">
        <video src={bgVideo} muted autoPlay loop></video>
        <div className="box">
          <div id="recaptcha-container"></div>
          {isLoggedIn ? (
            navigate("/home")
          ) : (
            <>
              {showOTP ? (
                <>
                  <h4>Enter OTP</h4>
                  <form className="OTP">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                    ></OtpInput>

                    <div className="btn-ph">
                      <button onClick={onOTPVerify}>Verify</button>
                    </div>
                    <div className="back">
                      <NavLink to={"/login"}>Back</NavLink>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h4>Verify your Phone Number:</h4>
                  <form>
                    <div className="mobile-num">
                      <input
                        type="number"
                        className="country-co"
                        value={countryCode}
                        placeholder="91"
                        onChange={(e) => setCountryCode(e.target.value)}
                      />
                      <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone number"
                      />
                    </div>

                    <div className="btn-ph">
                      <button onClick={onSignup}>
                        <span>Send code via SMS</span>
                      </button>
                    </div>
                    <div className="back">
                      <NavLink to={"/login"}>Back</NavLink>
                    </div>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PhoneNumber;
