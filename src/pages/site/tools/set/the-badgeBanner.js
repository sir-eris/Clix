import React from "react";
import { Link } from "react-router-dom";

function TheBadgeBanner(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            The BadgeBanner
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
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Purpose</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                The BadgeBanner serves as your personal assistant while are
                building APIs. Currently it can help you better understand every
                component on an API down to parameters. But as expected, we are
                working to constantly make The BadgeBanner more capable.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Subject</h2>
            </div>
            <div className="w-1/3 pb-8 pt-8 px-12 border-x">
              <p>
                The first thing you see when The BadgeBanner appears is the
                subject in which it is going to assist you in.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Description
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                The BadgeBanner will select the best definition per varying
                parameters and displays it to you. The descriptions are short
                and to the point.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Learn More
              </h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p>
                In order to make sure developers across all backgrounds can
                benefit from The BadgeBanner, at the bottom you can browse links
                to at least two more pages.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TheBadgeBanner;
