import React from "react";
import { Link } from "react-router-dom";

function Tools(props) {
  return (
    <>
      {props.helmet}
      <main className="mt-10 lg:mt-12">
        {/* PILLARS */}
        <section className="py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full bg-gray-100 border-b text-[#002147]">
          <div className="text-center mb-10 lg:mb-20">
            <p className="font-thin text-xs lg:text-sm">
              Because Engineering Rocks
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              The Main Pillars
            </h1>
            <p className="font-thin text-xs lg:text-sm">
              Endlessness Made Possible{" "}
            </p>
          </div>
          <div className="w-full h-full mb-14 lg:mb-20">
            <ol className="w-full grid grid-rows-4 lg:grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-3">
              <Link to="/tools/endpoint">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Endpoint</h3>
                  <p>
                    This is the schema of your API that consists of the headers,
                    params, payload, etc.
                  </p>
                </li>
              </Link>
              <Link to="/tools/data-model">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Data Model</h3>
                  <p>
                    The data schema of your project defines the connection
                    between each data structure.
                  </p>
                </li>
              </Link>
              <Link to="/tools/the-logic">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none cursor-pointer rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">The Logic</h3>
                  <p>
                    The Logic is how you are going to resolve the Endpoint and
                    return a payload back.
                  </p>
                </li>
              </Link>
              <Link to="/tools/configuration">
                <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg cursor-pointer bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                  <h3 className="font-bold text-2xl mb-2">Configuration</h3>
                  <p>
                    Your project setting is where you can define or modify the
                    behavior of your project as whole.
                  </p>
                </li>
              </Link>
            </ol>
          </div>
          <h2 className="text-lg lg:text-xl text-center leading-6 lg:leading-7 my-7">
            With state of the art system architecture, <br />
            Clix makes it <b>10x</b> easier to build APIs.
          </h2>

          {/* links */}
          <div className="flex flex-wrap justify-center items-center w-full gap-x-3 lg:gap-x-8">
            <Link
              to="/tools/endpoint"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Learn More
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="/translator"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Translator
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="API-versioning"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Tools Set
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="/register"
              className="hover:underline text-sm lg:text-lg text-[#00BFFF]"
            >
              Try for Free
            </Link>
          </div>
        </section>

        {/* TRANSLATOR */}
        <section className="py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full border-b text-[#002147]">
          <div className="text-center mb-10 lg:mb-20">
            <p className="font-thin text-xs lg:text-sm">Asynchronous</p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              The Most Intelligent
              <br />
              Node-to-Code Translator
            </h1>
            <p className="font-thin text-xs lg:text-sm">Seamless</p>
          </div>

          {/* links */}
          <div className="flex justify-center items-center w-full gap-x-5 lg:gap-x-8">
            <Link
              to="/translator"
              className="hover:underline text-base lg:text-lg text-[#FF8800]"
            >
              Learn More
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#FF8800]"></span>
            <Link
              to="/translator/cli"
              className="hover:underline text-base lg:text-lg text-[#FF8800]"
            >
              CLI
            </Link>
          </div>
        </section>

        {/* TOOLS SET */}
        <section className="relative block px-9 sm:px-16 md:px-24 lg:px-30 w-full py-20 text-[#002147]">
          <div className="text-center mb-10">
            <p className="font-thin text-xs lg:text-sm">A Complete Tools-Set</p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              Build Your Own Flow
            </h1>
            <p className="font-thin text-xs lg:text-sm"></p>
          </div>
          {/* links */}
          <div className="flex justify-center items-center w-full gap-x-3 lg:gap-x-8 mb-10">
            <Link
              to="/tools/API-versioning"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg w-36 text-center"
            >
              Learn More
            </Link>
            {/* <span className="block w-1 h-1 rounded-full bg-[#00BFFF] ml-[3px]"></span>
            <Link
              to="/tools/new"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg w-36 text-left pl-[6px]"
            >
              Build Your Own
            </Link> */}
          </div>
          <div className="w-full min-h-[35vh] grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 mb-10">
            {/* row 1 */}
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0">
              <p className="mb-4">API Versioning</p>
              <Link to="API-versioning">
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/draft.png"
                  className="w-full h-40 mb-4 border shadow-sm object-cover"
                  alt="Clix.dev API Versioning feature for building better REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="API-versioning"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">Project to Template</p>
              <Link to="templates">
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/template.png"
                  className="w-full h-40 mb-4 border shadow-sm object-cover"
                  alt="Clix.dev ability to make templates from projects to reuse when building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="templates"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">The BadgeBanner</p>
              <Link to="the-badgeBanner">
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/the-badgebanner.png"
                  className="w-full h-40 mb-4 border shadow-sm object-contain"
                  alt="The BadgeBanner is the developer's Assistant while building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="the-badgeBanner"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            {/* <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">Environment Settings</p>
              <Link to="environment-settings">
                <img
                  src=""
                  className="w-full h-40 mb-4 border shadow-sm"
                  alt="Clix.dev can be set according to developer's preference when building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="environment-settings"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div> */}
          </div>
          {/* description */}
          <h2 className="text-lg lg:text-xl text-center leading:6 lg:leading-7 mb-5">
            The most flexible modular environment <br /> for a smooth build.
          </h2>
          {/* CTAs */}
          <div className="flex justify-center items-center w-full gap-x-8">
            <Link to="/register" className="hover:underline text-[#00BFFF]">
              Try for Free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Tools;
