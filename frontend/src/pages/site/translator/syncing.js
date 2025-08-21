import React from "react";
import { Link } from "react-router-dom";

function Syncing(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            Syncing
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
              <h2 className="text-right font-extralight text-2xl">
                CLI Command
              </h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                In the terminal write the following command.
                <button
                  onClick={() => navigator.clipboard.writeText("clixdev sync")}
                  className="code w-full mx-4 md:mx-auto mt-4 flex-shrink-0"
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
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Parameters
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                You can pass an optional --path flag to specify a specific
                directory where you want to generate the project in.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                How it works
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                The Syncing process takes place behind closed doors so you will
                never notice them. Every time you make a change on your
                Dashboard you can run the Syncing command and suddenly all your
                changes are effective.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Purpose</h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p>
                With the possibility of Syncing being removed in the future the
                Syncing command serves as a super highway between the Dashboard
                and code.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Syncing;
