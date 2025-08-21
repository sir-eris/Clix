import React from 'react';
import { Link } from "react-router-dom";


function PublicHeader(props) {
    return (
      <header>
        <nav className="fixed top-0 w-full z-50 shadow">
          <aside className="warning">
            <span>
              View in Chrome, Firefox or Safari for the best experience!
            </span>
          </aside>
          <div className="flex flex-wrap justify-between items-center pr-7 lg:pr-52 bg-white">
            <div className="w-2/3 flex gap-x-5 lg:gap-x-32">
              <Link to="/">
                <div className="w-20 py-2 lg:py-3 h-full bg-[#00BFFF] text-center text-[#fff] text-sm lg:text-base">
                  clix.dev
                </div>
              </Link>
              <ul className="flex py-2 lg:py-3 justify-start items-center gap-x-4">
                <li>
                  <Link
                    to="/tools"
                    className="hover:text-[#00bfff] hover:underline hover:underline-offset-2 text-xs lg:text-sm"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teams"
                    className="hover:text-[#00bfff] hover:underline hover:underline-offset-2 text-xs lg:text-sm"
                  >
                    Teams
                  </Link>
                </li>
                {/* LATER */}
                {/* <li>
                  <Link
                    to="/pricing"
                    className="hover:text-[#00bfff] hover:underline hover:underline-offset-2 text-xs lg:text-sm"
                  >
                    Pricing
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#00bfff] hover:underline hover:underline-offset-2 text-xs lg:text-sm"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3 flex justify-end items-center">
              {!props.isAuthenticated ? (
                <div className="flex">
                  <Link to="/register">
                    <div className="flex items-center px-3 text-white">
                      <p className="text-sm sm:text-sm font-medium text-[#00bfff] hover:underline">
                        Try for Free
                      </p>
                    </div>
                  </Link>
                  <Link to="/login" className="hidden sm:block">
                    <div className="flex items-center px-3">
                      <p className="text-sm sm:text-sm hover:underline">
                        Sign In
                      </p>
                    </div>
                  </Link>
                </div>
              ) : (
                <a href="/endpoints">
                  <p className="text-sm sm:text-sm font-medium text-[#00bfff] hover:underline">
                    Dashboard
                  </p>
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
}

export default PublicHeader