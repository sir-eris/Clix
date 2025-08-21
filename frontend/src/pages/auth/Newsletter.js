import React, { useState } from "react";
import store from "../../app/store";
import { connect } from "react-redux";
import { Switch } from "@headlessui/react";
import { Navigate } from "react-router-dom";
import { joinNewsletter } from "../../app/actions/Auth";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function Newsletter(props) {
  const [email, setEmail] = useState();
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([false, false]);

  const joinNewsletter = () => {
    let emailError,
      topicsError = false;
    if (email === "" || email === undefined || email === null) {
      emailError = true;
    }
    if (topics.length === 0) {
      topicsError = true;
    }
    if (emailError || topicsError) {
      setError([emailError, topicsError]);
      return;
    }

    props.joinNewsletter({ email: email, topics: topics.join() });
    setError([false, false]);
    setEmail("");
    setTopics([]);
  };

  const updateTopics = (topic) => {
    if (topics.includes(topic)) {
      topics.splice(topics.indexOf(topic), 1);
      setTopics(topics);
      return;
    } else {
      let t = topics.concat(topic);
      setTopics(t);
      return;
    }
  };

  if (props.redirectTo) {
    return <Navigate replace to={props.redirectTo} />;
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
              Join Our Newsletter
            </h1>
            <hr className="mb-6" />
            {props.newsletter === true ? (
              <small className="block text-[#4BFB80] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#4BFB80] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                You have successfully joined our newsletter.
              </small>
            ) : null}
            {props.newsletter === false ? (
              <small className="block text-[red] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[red] shadow-md ring-[#fff] ring-1 border-2 mb-6">
                Please check your credentials and try again.
              </small>
            ) : null}

            <div>
              {/* email */}
              <div className="flex flex-col mb-3">
                <label className="text-sm mb-1 flex justify-between items-center">
                  Email
                  {error[0] === true ? (
                    <small className="text-[red] text-[11px]">
                      Not a valid email address
                    </small>
                  ) : null}
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input ${error[0] === true ? "red-ring" : ""}`}
                />
              </div>

              {/* list */}
              <div className="w-full h-2 mb-2">
                {error[1] === true ? (
                  <p className="block mx-auto text-[red] text-xs text-right">
                    Please select a topic
                  </p>
                ) : null}
              </div>
              <ul className="w-full mb-4">
                <li>
                  <div className="flex w-full justify-between items-center h-16 px-4 border-b">
                    <div>
                      <p className="text-sm">Teams Features</p>
                      <small className="block mb-2 text-xs text-gray-500">
                        Get notified when Teams features are released.
                      </small>
                    </div>
                    <div>
                      <Switch
                        checked={topics.includes("team_features")}
                        onChange={() => updateTopics("team_features")}
                        name="team_features"
                        className={`${
                          topics.includes("team_features")
                            ? "bg-[#4BFB80]"
                            : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span
                          className={`${
                            topics.includes("team_features")
                              ? "translate-x-6"
                              : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex w-full justify-between items-center h-16 px-4 border-b">
                    <div>
                      <p className="text-sm">Software Updates</p>
                      <small className="block mb-2 text-xs text-gray-500">
                        Stay up to date with every update we release.
                      </small>
                    </div>
                    <div>
                      <Switch
                        checked={topics.includes("software_updates")}
                        onChange={() => updateTopics("software_updates")}
                        name="software_updates"
                        className={`${
                          topics.includes("software_updates")
                            ? "bg-[#4BFB80]"
                            : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span
                          className={`${
                            topics.includes("software_updates")
                              ? "translate-x-6"
                              : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex w-full justify-between items-center h-16 px-4 border-b">
                    <div>
                      <p className="text-sm">Carriers</p>
                      <small className="block mb-2 text-xs text-gray-500">
                        Explore available opportunities at Clix.dev.
                      </small>
                    </div>
                    <div>
                      <Switch
                        checked={topics.includes("carriers")}
                        onChange={() => updateTopics("carriers")}
                        name="carriers"
                        className={`${
                          topics.includes("carriers")
                            ? "bg-[#4BFB80]"
                            : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span
                          className={`${
                            topics.includes("carriers")
                              ? "translate-x-6"
                              : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <button
              onClick={joinNewsletter}
              className="custom-btn w-full btn-3 my-2"
            >
              <span>Join Newsletter</span>
            </button>
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
  newsletter: store.getState().authReducer.newsletter,
  redirectTo: store.getState().authReducer.redirectTo,
});

export default connect(mapStateToProps, {
  joinNewsletter,
})(Newsletter);
