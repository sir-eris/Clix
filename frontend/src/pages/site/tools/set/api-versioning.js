import React from "react";
import { Link } from "react-router-dom";

function APIVersioning(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            API Versioning
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
            <Link
              to="/tools/API-versioning"
              className="text-[#00bfff] hover:underline text-lg"
            >
              API Versioning
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/templates"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Templates
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/the-badgeBanner"
              className="text-[#00bfff] hover:underline text-lg"
            >
              The BadgeBanner
            </Link>
            {/* <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/environment-settings"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Environment Settings
            </Link> */}
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pt-16">
              <h2 className="text-right font-extralight text-2xl">Versions</h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                Each version represents a duplicate of your current version.
                Different versions have separate Endpoints, Models, Settings,
                and API Logic.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                New Version
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                A new version can be created with click of a button. Every new
                version is identical to what just made the version from. It is
                up to you to modify different versions differently.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Merge Two Versions
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                Although API Versioning is still not stable enough to be
                released, by end of this year we will announce a release that in
                addition to API versioning you could also merge different
                versions and choose the layering in a trivial manner.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Code</h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p>
                As you can imagine, since every version contains different
                mechanics the code for each project will be different. However,
                the generated project will stay the same, and only versions will
                be separated.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default APIVersioning;
