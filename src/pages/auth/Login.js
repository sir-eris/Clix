import React, { useState } from "react";

import store from "../../app/store";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../app/actions/Auth";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


function Login(props) {
  const [error, setError] = useState([0, 0]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const btnClick = () => {
    if (
      (email === "" || email === undefined || email === null) &&
      password !== "" &&
      password !== undefined &&
      password !== null
    ) {
      setError([1, 0]);
      return;
    }
    if (
      (password === "" || password === undefined || password === null) &&
      email !== "" &&
      email !== undefined &&
      email !== null
    ) {
      setError([0, 1]);
      return;
    }
    if (
      (email === "" || email === undefined || email === null) &&
      (password === "" || password === undefined || password === null)
    ) {
      setError([1, 1]);
      return;
    }
    if (
      (email !== "" || email !== undefined || email !== null) &&
      (password !== "" || password !== undefined || password !== null)
    ) {
      setError([0, 0]);
    }
    props.login(email, password);
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  if (props.auth?.redirectTo !== undefined && props.auth.redirectTo !== '/login') {
    return <Navigate replace to={props.auth.redirectTo} />;
  } else if (
    props.account?.redirectTo !== undefined &&
    props.account.redirectTo !== "/login"
  ) {
    return <Navigate replace to={props.account.redirectTo} />;
  } else {
    return (
      // <GoogleOAuthProvider clientId="191928363267-7klc640b4rvn7quef8tsfmhtsbdu3hac.apps.googleusercontent.com">
      <>
        {props.helmet}
        <div className="w-full">
          <div className="md:w-1/3 mx-auto min-h-[85vh] py-12 px-8 md:px-16">
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
              Sign in to your account
            </h1>
            <hr className="mb-6" />
            {props.auth.loginError === true ? (
              <small className="block text-[red] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[red] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                Please check your credentials and try again.
              </small>
            ) : null}
            <div className="flex flex-col mb-4">
              <label className={"text-sm mb-1"}>Email Address</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className={`input ${error[0] === 1 ? "red-ring" : ""}`}
              />
            </div>
            <div className={"flex flex-col mb-4"}>
              <label className="text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className={`input ${error[1] === 1 ? "red-ring" : ""}`}
              />
            </div>
            <div className="flex flex-col mb-1">
              <button onClick={btnClick} className="custom-btn btn-3 my-2">
                {props.loading === true ? (
                  <span>loading...</span>
                ) : (
                  <span>Sign in</span>
                )}
              </button>
            </div>
            <div className="flex justify-between items-end text-xs text-[gray]">
              <a href="/register" className="hover:underline">
                Create Account
              </a>
              <a href="/forgot-password" className="hover:underline">
                Forgot Password
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
  auth: store.getState().authReducer,
  loading: store.getState().authReducer.isLoading,
  account: store.getState().accountReducer,
});

export default connect(mapStateToProps, {
  login,
})(Login);
