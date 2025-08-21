import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import { UserCircleIcon } from "@heroicons/react/outline";



function Docs(props) {
  let location = useLocation();

  const body = () => {
    switch (location.pathname.split("/documentation")[1]) {
      case "/getting-started":
        return <p>Getting Started</p>;
      case "/frameworks":
        return <p>Frameworks</p>;
      case "/use-cases":
        return <p>Use Cases</p>;
      case "/terminal":
        return <p>Commands</p>;
      default:
        return <p>Home</p>;
    }
  };

    return (
      <>
        {props.helmet}
        <main className="relative w-full min-h-screen pt-12">
          {/* Sidebar */}
          <div className="w-full h-12 fixed top-12 border-y bg-[#fff]">
            <div className="h-full flex justify-center items-center gap-x-6">
              <NavLink
                to="get-started"
                className={({ isActive }) =>
                  `block side-link transition-all text-sm hover:underline hover:text-[#00bfff] ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Project
              </NavLink>
              <NavLink
                to="frameworks"
                className={({ isActive }) =>
                  `block side-link transition-all text-sm hover:underline hover:text-[#00bfff] ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Data
              </NavLink>
              <NavLink
                to="terminal"
                className={({ isActive }) =>
                  `block side-link transition-all text-sm hover:underline hover:text-[#00bfff] ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Endpoint
              </NavLink>
              <NavLink
                to="use-cases"
                className={({ isActive }) =>
                  `block side-link transition-all text-sm hover:underline hover:text-[#00bfff] ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Logic
              </NavLink>
            </div>
          </div>

          {/* Content */}
          <div className="w-full mx-4 sm:mx-10 md:mx-16 lg:mx-28 p-6">
            <ol className="mb-20">
              <li>
                <h1 className="text-xl md:text-2xl font-thi text-[gray] mb-4 border-b text-right pb-3">
                  Clix Documentation
                </h1>
                <p className="mb-8 text-sm md:text-base pr-48">
                  The Clix Documentation walks you through every important
                  section of the Clix app. You can also discover how to download
                  and use the Clix cli. If you prefer a less verbose version you
                  can follow the steps in{" "}
                  <Link
                    to="/get-started"
                    className="text-[#00bfff] hover:underline"
                  >
                    Getting Started
                  </Link>
                  .
                </p>
              </li>
              <li>
                <h2 className="font-thi text-[gray] text-lg md:text-xl mb-6 border-b text-right pb-1">
                  The Dashboard
                </h2>
                <p className="mb-8 text-sm md:text-base pr-48">
                  Your dashboard is divided into 5 main tabs: Endpoints, Models,
                  Settings, Projects, and Account.
                </p>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-base md:text-lg mb-6 border-b text-right pb-1">
                  Endpoints
                </h3>
                <p className="mb-4 text-sm md:text-base pr-48">
                  Here you can Manage your project's endpoints. You have
                  complete freedom over every parameter of your endpoints. You
                  can get started with adding a name for your endpoint and
                  inserting endpoint request method, origin host, and URI.
                </p>
                <p className="mb-8 mr-48 text-xs md:text-lg text-[#FF7B00] text-center bg-[#FF7B00] bg-opacity-5 rounded border-[#FF7B00] border-2 py-4">
                  If your endpoint is going to be receiving any number of
                  headers, params, or body payload you can configure the
                  endpoint as you see fit.
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  The Request
                </h4>
                <p className="mb-8 text-sm md:text-base pr-48">
                  Start by giving the endpoint a name. Then select the{" "}
                  <i>request method</i>, <i>request host (localhost or not)</i>,
                  and the <i>request uri</i>.
                  <br />
                  <small className="mt-2 block text-[#36474d]">
                    Please note the <i>clix</i> app has a base uri of{" "}
                    <i>/api</i>
                  </small>
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Request Headers
                </h4>
                <p className="mb-8 text-sm md:text-base pr-48">
                  You can add, remove and modify any number of headers that the
                  endpoint will be expecting. Choose a name for the header{" "}
                  <span className="text-[#00bfff]">
                    (ex. <i>x-auth-token</i>)
                  </span>{" "}
                  followed by its type.
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Request Parameters
                </h4>
                <p className="mb-8 text-sm md:text-base pr-48">
                  You can add, remove and modify any number of uri parameters
                  that the endpoint will be expecting. Choose a name for the
                  parameter{" "}
                  <span className="text-[#00bfff]">
                    (ex. <i>product_id</i>)
                  </span>{" "}
                  followed by its type.
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Payload
                </h4>
                <p className="mb-8 text-sm md:text-base pr-48">
                  The payload always expects either <i>none</i> or <i>json</i>{" "}
                  format. You can add, remove and modify any number of payload
                  items that the endpoint will be processing. Choose a name for
                  the item{" "}
                  <span className="text-[#00bfff]">
                    (ex. <i>old_password</i>, <i>new_password</i>)
                  </span>{" "}
                  followed by its type.
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Response
                </h4>
                <p className="mb-8 text-sm md:text-base pr-48">
                  You can select a json response http status code and a message
                  - indicating the final resolution of the request.
                </p>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-base md:text-lg mb-6 border-b text-right pb-1">
                  Data Models
                </h3>
                <p className="mb-8 text-sm md:text-base pr-48">
                  Data Models define your database tables' schemas. For each
                  table you can add any number of fields and modify thier
                  constraints directly. You can select field type, default
                  value, verbose name, is null, is blank, is primary key, and is
                  unique.
                </p>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-base md:text-lg mb-6 border-b text-right pb-1">
                  Settings
                </h3>
                <p className="mb-8 text-sm md:text-base pr-48">
                  The Settings section is a direct access to your settings file
                  of your project. You can add an arbitrary number of fields
                  along with their values to be reflected directly on you
                  settings file. (Each field's name will be set to equal to the
                  field's value as you define them.)
                </p>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-base md:text-lg mb-6 border-b text-right pb-1">
                  Projects
                </h3>
                <p className="mb-8 text-sm md:text-base pr-48">
                  In your projects tab you can view your open projects and some
                  details about them. On the far left of each project is your{" "}
                  <span className="font-bold text-[#00bfff]">
                    {"<project_token>"}
                  </span>
                  . You will need this for later during the code generation
                  process.
                  <br />
                  <small className="mt-2 block text-[#36474d]">
                    + You can copy your project token to your clipboard by
                    simply clicking it.
                  </small>
                </p>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-base md:text-lg mb-6 border-b text-right pb-1">
                  Account
                </h3>
                <p className="mb-8 text-sm md:text-base pr-48">
                  The most important section of your account page is your{" "}
                  <span className="font-bold text-[#00bfff]">
                    {"<terminal_token>"}
                  </span>
                  . You will need this for later during the code generation
                  process.
                  <br />
                  <small className="mt-2 block text-[#36474d]">
                    + You can copy your terminal token to your clipboard by
                    simply clicking it.
                  </small>
                </p>
              </li>
              <li className="ml-4">
                <h2 className="font-thi text-[gray] text-lg md:text-xl mb-6 border-b text-right pb-1">
                  Download
                </h2>
                <p className="mb-4 text-sm md:text-base pr-48">
                  After you modify your project endpoints, data models, and
                  settings you can head over to your local environment to
                  generate the source code of your project.
                </p>
                <p className="mb-8 text-sm md:text-base pr-48">
                  Open a terminal and install the pip package using the
                  following command.
                </p>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "pip install --upgrade clixdev"
                    )
                  }
                  className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                >
                  <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                  <code className="flex-1 text-xs md:text-sm">
                    pip install clixdev
                  </code>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </li>
              <li className="ml-4">
                <h3 className="font-thi text-[gray] text-lg md:text-xl mb-6 border-b text-right pb-1">
                  CLI
                </h3>
                <p className="mb-8 text-sm md:text-base pr-48">
                  The cli gives you great freedom over what you can do with your
                  project. You can start by translating your project into code
                  using the <i>generate</i> function. While development you can
                  run <i>sync</i> to update all of your changes into code. For
                  creating a fast and simple json formatted documentation for
                  your API you can run the <i>docs</i> command.
                </p>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Generate
                </h4>
                <p className="mb-4 px-7 text-sm md:text-base">
                  In the terminal write the following command.
                </p>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("clixdev generate")
                  }
                  className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                >
                  <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                  <code className="flex-1 text-xs md:text-sm">
                    clixdev <span className="text-[#00bfff]">generate</span>{" "}
                    <span className="text-[#FF7B00]">
                      {"<TOKEN1>"} {"<TOKEN2>"}
                    </span>
                  </code>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <small className="mt-2 block text-[#36474d] mb-8">
                  + You can pass an optional --path flag to specify a specific
                  directory where you want to generate the project in.
                </small>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Sync
                </h4>
                <p className="mb-4 px-7 text-sm md:text-base">
                  In the terminal write the following command.
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText("clixdev sync")}
                  className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                >
                  <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                  <code className="flex-1 text-xs md:text-sm">
                    clixdev <span className="text-[#00bfff]">sync</span>{" "}
                    <span className="text-[#FF7B00]">
                      {"<TOKEN1>"} {"<TOKEN2>"}
                    </span>
                  </code>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <small className="mt-2 block text-[#36474d] mb-8">
                  + You can pass an optional --path flag to specify a specific
                  directory where you want to generate the project in.
                </small>
              </li>
              <li className="ml-4">
                <h4 className="font-thi text-[gray] text-sm md:text-base mb-6 border-b text-right pb-1">
                  Documentation
                </h4>
                <p className="mb-4 px-7 text-sm md:text-base">
                  In the terminal write the following command.
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText("clixdev docs")}
                  className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                >
                  <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                  <code className="flex-1 text-xs md:text-sm">
                    clixdev <span className="text-[#00bfff]">docs</span>{" "}
                    <span className="text-[#FF7B00]">
                      {"<TOKEN1>"} {"<TOKEN2>"}
                    </span>
                  </code>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <small className="mt-2 block text-[#36474d] mb-8">
                  + You can pass an optional --path flag to specify a specific
                  directory where you want to generate the project in.
                </small>
              </li>
            </ol>
          </div>
        </main>
      </>
    );
}


export default Docs