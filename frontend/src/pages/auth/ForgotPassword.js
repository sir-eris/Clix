import React, { useState } from "react";

import store from "../../app/store";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetPassword, verifyEmail } from "../../app/actions/Auth";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


function ForgotPassword(props) {
  const [email, setEmail] = useState();
  const [tempCode, setTempCode] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [error, setError] = useState([false, false, false, false]);

  const verifyEmail = () => {
    if (email === "" || email === undefined || email === null) {
      setError([true, false, false, false]);
      return;
    }
    props.verifyEmail({email: email});
  }

  const validatePassword = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
  };

  const resetPassword = () => {
    let e, t, np, cp
    if (tempCode === "" || tempCode === undefined || tempCode === null) {
      t = true      
    }
    if (newPassword === "" || newPassword === undefined || newPassword === null) {
      np = true
    }
    if (confPassword === "" || confPassword === undefined || confPassword === null) {
      cp = true
    }
    if (email === "" || email === undefined || email === null) {
      e = true
    }

    let validPass = false
    let validConfPass = false

    if (!validatePassword(newPassword)) {
      validPass = true;
    } else if (validatePassword(newPassword)) {
      validPass = false;
    }
    if (newPassword !== confPassword) {
      validConfPass = true;
    } else if (newPassword === confPassword) {
      validConfPass = false;
    }
    
    if (e || t || np || validPass || cp || validConfPass) {
      setError([e, t, np || validPass, cp || validConfPass]);
      return;
    } else {
      props.resetPassword({
        email: email,
        tempCode: tempCode,
        newPassword: newPassword,
      });
    }
  }

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  if (props.authResetPassword === true) {
    return <Navigate replace to={props.redirectTo} />;
  } else {
    return (
      // <GoogleOAuthProvider clientId="191928363267-7klc640b4rvn7quef8tsfmhtsbdu3hac.apps.googleusercontent.com">
      <>
        {props.helmet}
        <div className="mt-12 w-full">
          <div className="md:w-1/3 mx-auto min-h-[85vh] px-8 md:px-16">
            <a href="/" className="block w-fit mx-auto mb-24">
              <img
                src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
                width={"23px"}
                height={"23px"}
                className="mx-auto mb-2"
                alt="Clix.dev official logo"
              />
              <p className="font-bold text-xs text-[#00BFFF]">Clix.dev</p>
            </a>
            <h1 className="text-center text-xl mb-3 font-thin text-[#36474d]">
              Create new password
            </h1>
            <hr className="mb-6" />
            {props.authSentTempCode === true ? (
              <>
                <small className="block text-[#FF7B00] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#FF7B00] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                  We sent a temporary code to your email.{" "}
                  <button
                    className="ml-1 underline hover:no-underline"
                    onClick={verifyEmail}
                  >
                    resend
                  </button>
                </small>
                <div className="flex flex-col mb-4">
                  <label className={"text-sm mb-1"}>Temp Code</label>
                  <input
                    type="text"
                    name="tempCode"
                    value={tempCode}
                    onChange={(e) => setTempCode(e.target.value)}
                    className={`input ${error[1] ? "red-ring" : ""}`}
                  />
                </div>
                <div className={"flex flex-col mb-4"}>
                  <label className="text-sm mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`input ${error[2] ? "red-ring" : ""}`}
                  />
                </div>
                <div className={"flex flex-col mb-4"}>
                  <label className="text-sm mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confPassword"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    className={`input ${error[3] ? "red-ring" : ""}`}
                  />
                </div>
                <div className="flex flex-col mb-1">
                  <button
                    onClick={resetPassword}
                    className="custom-btn btn-3 my-2"
                  >
                    <span>Create new password</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col mb-4">
                  <label className={"text-sm mb-1"}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`input ${error[0] ? "red-ring" : ""}`}
                  />
                </div>
                <div className="flex flex-col mb-1">
                  <button
                    onClick={verifyEmail}
                    className="custom-btn btn-3 my-2"
                  >
                    <span>Verify email address</span>
                  </button>
                </div>
              </>
            )}

            <div className="flex justify-between items-end text-xs text-[gray]">
              <a href="/login" className="hover:underline">
                Sign in
              </a>
              <a href="/register" className="hover:underline">
                Create Account
              </a>
            </div>
            {/* <hr className="my-6" /> */}
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              cookiePolicy={"single_host_origin"}
              theme={"outline"}
              text={"continue_with"}
              shape={"pill"}
              useOneTap
              cancel_on_tap_outside
            /> */}
          </div>
        </div>
        {/* </GoogleOAuthProvider> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authSentTempCode: store.getState().authReducer.authSentTempCode,
  authResetPassword: store.getState().authReducer.authResetPassword,
  redirectTo: store.getState().authReducer.redirectTo,
});

export default connect(mapStateToProps, {
  verifyEmail,
  resetPassword,
})(ForgotPassword);
