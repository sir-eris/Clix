import React, { useState, Fragment } from "react";

import store from "../../app/store";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { register } from "../../app/actions/Auth";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


const levels = {
  1: "Less than a year",
  2: "1-2 years",
  3: "2-3 years",
  4: "More than 3 years",
};

function Register(props) {
  const [error, setError] = useState([0, 0, 0, 0, 0, 0]);
  // const [plan, setPlan] = useState(null);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  const [level, setLevel] = useState(0);
  const [agree, setAgree] = useState(false);
  // const location = useLocation();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (email) => {
    // return true;
    return String(email)
      .toLowerCase()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/);
  };

  const btnClick = () => {
    // [fname, lname, email, password, passwordConf, agree, plan].forEach(
    [fname, lname, email, password, passwordConf, agree].forEach(
      (field, i) => {
        if (
          field === undefined ||
          field === null ||
          field === "" ||
          field === false
        ) {
          error[i] = 1;
        } else {
          error[i] = 0;
        }
      }
    );

    let validEmail = 0;
    let validPass = 0;
    let validConfPass = 0;

    if (!validateEmail(email)) {
      validEmail = 1;
    }

    if (!validatePassword(password)) {
      validPass = 1;
    }

    if (password && password !== passwordConf) {
      validConfPass = 1;
    }

    setError([
      error[0],
      error[1],
      error[2] || validEmail,
      error[3] || validPass,
      error[4] || validConfPass,
      error[5],
      // error[6],
    ]);

    if (
      error[0] +
        error[1] +
        validEmail +
        validPass +
        validConfPass +
        error[5] !==
      0
    )
      return;

    let level_key =
      Object.keys(levels).find((key) => levels[key] === level) || 0;
    // props.register({ plan, fname, lname, email, password, level_key });
    props.register({ fname, lname, email, password, level_key });
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  return props.redirectTo ? (
    <Navigate replace to={props.redirectTo} />
  ) : (
    // <GoogleOAuthProvider clientId="191928363267-7klc640b4rvn7quef8tsfmhtsbdu3hac.apps.googleusercontent.com">
    <>
      {props.helmet}
      <div className="w-full">
        <div className="md:w-1/2 xl:w-1/3 mx-auto min-h-[85vh] py-12 px-8">
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
            Start a new account
          </h1>
          <hr className="mb-6" />
          {/* plan */}
          {/* <div className="transition-all pt-6 border-b mb-6">
            <div className="flex justify-between">
              <label className="text-sm mb-2 block">Select A Plan</label>
              {error[6] ? (
                <small className="text-[red] text-[11px]">
                  Please select a plan
                </small>
              ) : null}
            </div>
            {plan === null || plan === "smallTeam" ? (
              <button
                className="block w-full text-left"
                name="smallTeam"
                onClick={() => setPlan("smallTeam")}
              >
                <div
                  className={`w-full h-28 select-none flex bg-[#fff] rounded-lg border-2 ${
                    plan === "smallTeam"
                      ? "border-[#4BFB80]"
                      : "border-[lightgray]"
                  } ring-4 ring-gray-100 shadow-md mb-6`}
                >
                  <div className="w-5/6 h-full flex flex-col justify-between py-2 pl-8 text-gray-900">
                    <div className="">
                      <small className="block text-[12px] font-thin">
                        Small Teams (34 and less)
                      </small>
                      <small className="block text-xs font-medium">
                        $10 / Dev per month
                      </small>
                    </div>
                    <div>
                      <small className="text-xs font-thin text-[gray]">
                        + 2 months free
                      </small>
                      <p className="text-sm">5 Projects + 300 Endpoints</p>
                    </div>
                  </div>
                  <div className="w-1/6 flex h-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={plan === "smallTeam" ? "#4BFB80" : "lightgray"}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ) : null}

            {plan === null || plan === "largeTeam" ? (
              <button
                className="block w-full text-left"
                name="largeTeam"
                onClick={() => setPlan("largeTeam")}
              >
                <div
                  className={`w-full h-28 select-none flex bg-[#fff] rounded-lg border-2 ${
                    plan === "largeTeam"
                      ? "border-[#4BFB80]"
                      : "border-[lightgray]"
                  } ring-4 ring-gray-100 shadow-md mb-6`}
                >
                  <div className="w-5/6 h-full flex flex-col justify-between py-2 pl-8 text-gray-900">
                    <div className="">
                      <small className="block text-[12px] font-thin">
                        Large Teams (35 and more)
                      </small>
                      <small className="block text-xs font-medium">
                        $20 / Dev per month
                      </small>
                    </div>
                    <div>
                      <small className="text-xs font-thin text-[gray]">
                        + 2 months free
                      </small>
                      <p className="text-sm">Unlimited Everything</p>
                    </div>
                  </div>
                  <div className="w-1/6 flex h-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={plan === "largeTeam" ? "#4BFB80" : "lightgray"}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ) : null}

            {plan === null || plan === "student" ? (
              <button
                className="block w-full text-left"
                name="student"
                onClick={() => setPlan("student")}
              >
                <div
                  className={`w-full h-28 select-none flex bg-[#fff] rounded-lg border-2 ${
                    plan === "student"
                      ? "border-[#4BFB80]"
                      : "border-[lightgray]"
                  } ring-4 ring-gray-100 shadow-md mb-6`}
                >
                  <div className="w-5/6 h-full flex flex-col justify-between py-2 pl-8 text-gray-900">
                    <div className="">
                      <small className="block text-[12px] font-thin">
                        Students
                      </small>
                      <small className="block text-xs font-medium">
                        $5 per month
                      </small>
                    </div>
                    <div>
                      <small className="text-xs font-thin text-[gray]">
                        + 2 months free
                      </small>
                      <p className="text-sm">Unlimited Everything</p>
                    </div>
                  </div>
                  <div className="w-1/6 flex h-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={plan === "student" ? "#4BFB80" : "lightgray"}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ) : null}


            <div className="flex justify-between items-center mb-2">
              <small className="text-xs text-[gray]/70">
                No payment information is needed at this time.
              </small>
              {plan !== null ? (
                <button
                  onClick={() => {
                    setPlan(null);
                  }}
                  className="text-[#FF8500] text-xs hover:underline"
                >
                  Change Plan
                </button>
              ) : null}
            </div>
          </div> */}

          {props.registerError === true ? (
            props.statusCode === 406 ? (
              <small className="block text-[#FF7B00] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#FF7B00] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                Your email is already registered. Please{" "}
                <Link to="/login" className="underline">
                  Sign In
                </Link>
                .
              </small>
            ) : (
              <small className="block text-[red] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[red] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                Please try again.
              </small>
            )
          ) : null}

          {/* first, last name */}
          <div className="mb-4 grid grid-cols-2 gap-x-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1">First Name</label>
              <input
                type="text"
                name="fname"
                onChange={(e) => setFname(e.target.value)}
                className={`input ${error[0] ? "red-ring" : ""}`}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lname"
                onChange={(e) => setLname(e.target.value)}
                className={`input ${error[1] ? "red-ring" : ""}`}
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col mb-4">
            <label className="flex justify-between items-center text-sm mb-1">
              Email Address{" "}
              {error[2] ? (
                <small className="text-[red] text-[11px]">
                  Not a valid email address
                </small>
              ) : null}
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`input ${error[2] ? "red-ring" : ""}`}
            />
          </div>

          {/* password */}
          <div className="flex flex-col mb-4">
            <label className="flex justify-between items-center text-sm mb-1">
              Password
              {error[3] ? (
                <small className="text-[red] text-[11px]">
                  8-16 long, !@#$%^&*, numbers, and letters
                </small>
              ) : null}
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className={`input ${error[3] ? "red-ring" : ""}`}
            />
          </div>

          {/* password confirm */}
          <div className="flex flex-col mb-4">
            <label className="flex justify-between items-center text-sm mb-1">
              Confirm Password{" "}
              {error[4] ? (
                <small className="text-[red] text-[11px]">
                  Passwords don't match
                </small>
              ) : null}
            </label>
            <input
              type="password"
              name="passwordConf"
              onChange={(e) => setPasswordConf(e.target.value)}
              className={`input ${error[4] ? "red-ring" : ""}`}
            />
          </div>

          {/* experience */}
          <div className="flex flex-col mb-5">
            <div className="flex flex-col">
              <div className="block mb-2">
                <p className="text-xs flex justify-between">
                  API Development Experience{" "}
                  <i className="text-[gray] text-[10px]">optional</i>
                </p>
              </div>
              <Listbox name="template" value={level} onChange={setLevel}>
                <div className="relative">
                  <Listbox.Button className="flex relative w-full cursor-default hover:cursor-pointer rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md border">
                    <span className="block text-xs">
                      {level ? level : "select"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg border z-20">
                      {Object.values(levels).map((item, itemIdx) => (
                        <Listbox.Option
                          key={itemIdx}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 px-4 ${
                              active
                                ? "bg-[#00bfff] text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ level }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  level ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item}
                              </span>
                              {level ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          {/* agree */}
          <div className="flex items-center mb-4">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              onChange={(e) => setAgree(!agree)}
            />
            <label
              for="agree"
              className={`block text-xs ml-1 select-none ${
                error[5] ? "text-[red]" : ""
              }`}
            >
              I agree to Clix.dev's terms and policies.
            </label>
          </div>

          {/* button */}
          <div className="flex flex-col mb-1">
            <button onClick={btnClick} className="custom-btn btn-3 my-2">
              {props.loading === true ? (
                <span>Setting up your account...</span>
              ) : (
                <span>Start</span>
              )}
            </button>
          </div>

          {/* login link */}
          <div className="flex justify-between items-end text-xs text-[gray]">
            <a href="/login" className="hover:underline">
              Sign in
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

const mapStateToProps = (state) => ({
  loading: store.getState().authReducer.isLoading,
  statusCode: store.getState().authReducer.statusCode,
  redirectTo: store.getState().authReducer.redirectTo,
  registerError: store.getState().authReducer.registerError,
});

export default connect(mapStateToProps, {
  register,
})(Register);
