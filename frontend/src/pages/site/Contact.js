import React, { useState, Fragment } from "react";
import store from "../../app/store";
import { connect } from "react-redux";
import { contact } from "../../app/actions/Auth";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function Contact(props) {
  const [email, setEmail] = useState(null);
  const [topic, setTopic] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState([0, 0, 0]);

  const btnClick = () => {
    [email, topic, message].forEach((field, i) => {
      if (field === undefined || field === null || field === "") {
        error[i] = 1;
      } else {
        error[i] = 0;
      }
    });
    setError([error[0], error[1], error[2]]);

    if (error[0] + error[1] + error[2] > 0) return;

    props.contact({ email, topic, message });
    setEmail("");
    setTopic("");
    setMessage("");
  };

  return (
    <>
      {props.helmet}

      <main className="mt-12 flex w-full min-h-[85vh]">
        <div className="w-full h-full sm:w-2/3 lg:w-2/3 xl:w-1/3 mx-auto py-12 px-8 md:px-16">
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
            Connect with us
          </h1>
          <hr className="mb-6" />
          {props.auth.contactSuccess === false ? (
            <small className="block text-[red] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[red] shadow-md ring-[#fff] ring-1 border-2 mb-6">
              Please try again.
            </small>
          ) : null}
          {props.auth.contactSuccess === true ? (
            <small className="block text-[#4BFB80] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#4BFB80] shadow-md ring-[#fff] ring-1 border-2 mb-6">
              Thanks for contacting us.
            </small>
          ) : null}
          <div className="flex flex-col mb-4">
            <label className={"text-sm mb-1"}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input ${error[0] === 1 ? "red-ring" : ""}`}
            />
          </div>
          <div className={"flex flex-col mb-4"}>
            <label className="text-sm mb-1">Topic</label>
            <Listbox name="topic" value={topic} onChange={setTopic}>
              <div className="relative">
                <Listbox.Button
                  className={`flex relative w-full cursor-default hover:cursor-pointer rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md border ${
                    error[1] === 1 ? "red-ring" : ""
                  }`}
                >
                  <span className="block text-xs">
                    {topic ? topic : "select"}
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
                    {["New Account", "Tools", "Translator", "Teams", "Up Coming", "Other"].map((item, itemIdx) => (
                      <Listbox.Option
                        key={itemIdx}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 px-4 ${
                            active ? "bg-[#00bfff] text-white" : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ topic }) => (
                          <>
                            <span
                              className={`block truncate ${
                                topic ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item}
                            </span>
                            {topic ? (
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
          <div className={"flex flex-col mb-4"}>
            <label className="text-sm mb-1">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              rows="7"
              onChange={(e) => setMessage(e.target.value)}
              className={`input ${error[2] === 1 ? "red-ring" : ""}`}
            ></textarea>
          </div>
          <div className="flex flex-col mb-1">
            <button onClick={btnClick} className="custom-btn btn-3 my-2">
              <span>Send</span>
            </button>
          </div>
          {props.isAuthenticated ? (
            <div className="flex justify-between items-end text-xs text-[gray]">
              <a href="/endpoints" className="hover:underline">
                Dashboard
              </a>
            </div>
          ) : (
            <div className="flex justify-between items-end text-xs text-[gray]">
              <a href="/login" className="hover:underline">
                Sign in
              </a>
              <a href="/register" className="hover:underline">
                Create Account
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: store.getState().authReducer,
});

export default connect(mapStateToProps, {
  contact,
})(Contact);
