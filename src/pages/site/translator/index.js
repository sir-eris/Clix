import React from "react";
import { Link } from "react-router-dom";

function Translator(props) {
  return (
    <>
      {props.helmet}
      <main className="mt-10 lg:mt-12">
        {/* PILLARS */}
        <section className="py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full text-[#002147]">
          <div className="text-center mb-10 lg:mb-20">
            <p className="font-thin text-xs lg:text-sm">Node-to-Code</p>
            <h1 className="text-2xl lg:text-5xl font-bold py-3 lg:py-5">
              The Most Advanced
              <br />
              Bidirectional Translator
            </h1>
            <p className="font-thin text-xs lg:text-sm">Code-to-Node</p>
          </div>
          <div className="w-full h-full mb-10 lg:mb-20">
            <ol className="w-full grid grid-rows-4 lg:grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-3">
              <Link to="/translator/cli">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">CLI</h3>
                  <p>The gateway between your Dashboard and code.</p>
                </li>
              </Link>
              <Link to="/translator/syncing">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Syncing</h3>
                  <p>
                    With one command, changes made in your Dashboard will
                    seamlessly translate to code.
                  </p>
                </li>
              </Link>
              <Link to="/translator/languages">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Languages</h3>
                  <p>
                    The technologies Clix is compatible with. What's coming
                    next?
                  </p>
                </li>
              </Link>
              <Link to="/translator/local-development">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg cursor-pointer bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Local Development</h3>
                  <p>
                    Explore ways to build on top of Clix and expand a project.
                  </p>
                </li>
              </Link>
            </ol>
          </div>
          <h2 className="text-base lg:text-xl text-center leading-6 lg:leading-7 my-7">
            The smoothest transition from node to code <br /> and back. Simply
            sync after you make a change.
          </h2>
          <div className="flex flex-wrap justify-center items-center w-full gap-x-3 lg:gap-x-8">
            <Link
              to="/translator/cli"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Learn More
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/register"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Try for Free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Translator;
