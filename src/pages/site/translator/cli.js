import React from "react";
import { Link } from "react-router-dom";

function CLI(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            CLI
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
            <Link
              to="/translator/cli"
              className="text-[#00bfff] hover:underline text-lg"
            >
              CLI
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/syncing"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Syncing
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/local-development"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Local Development
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/languages"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Languages
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pt-16">
              <h2 className="text-right font-extralight text-2xl">Download</h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                The cli gives you great freedom over what you can do with your
                project. You can start by translating your project into code
                using the <i>generate</i> function. While development you can
                run <i>sync</i> to update all of your changes into code. For
                creating a fast and simple json formatted documentation for your
                API you can run the <i>docs</i> command. After you modify your
                project endpoints, data models, settings, and Logic you can head
                over to your local environment to generate the source code of
                your project. Open a terminal and install the pip package using
                the following command.{" "}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "pip install --upgrade clixdev"
                    )
                  }
                  className="code w-full mx-4 mb-4 md:mx-auto flex-shrink-0 mt-4"
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
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Command: Generate New Project
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                In the terminal write the following command.
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("clixdev generate")
                  }
                  className="code w-full mx-4 mb-4 md:mx-auto mt-4 flex-shrink-0"
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
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Command: Sync Project
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                In the terminal write the following command.
                <button
                  onClick={() => navigator.clipboard.writeText("clixdev sync")}
                  className="code w-full mx-4 mb-4 md:mx-auto mt-4 flex-shrink-0"
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
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Command: Generate Documentaton
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                In the terminal write the following command.
                <button
                  onClick={() => navigator.clipboard.writeText("clixdev docs")}
                  className="code w-full mx-4 mb-4 md:mx-auto mt-4 flex-shrink-0"
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
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CLI;
