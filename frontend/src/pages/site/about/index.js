import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <>
      {props.helmet}
      {/* Main */}
      <main className="mt-12">
        {/* NEW ERA */}
        <section className="pb-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full text-[#002147]">
          <div className="relative w-full h-[60vh] lg:h-[85vh] flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="font-thin text-xs lg:text-base">A New Era</p>
              <h2 className="font-medium text-xl lg:text-3xl text-center leading-6 lg:leading-10 my-4 lg:my-7">
                The leading API development platform for building
                <br />
                scalable APIs for any web or mobile application.
              </h2>
              <p className="font-thin text-xs lg:text-base">
                Built For Developers - By Developers
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-3 lg:gap-x-8 absolute bottom-0 lg:bottom-28">
              <Link
                to="supported-APIs"
                className="hover:underline text-[#00BFFF] text-xs lg:text-lg"
              >
                Supported APIs
              </Link>
              <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
              <Link
                to="who-we-are"
                className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
              >
                Who We Are
              </Link>
              {/* <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
              <Link
                to="carriers"
                className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
              >
                Carriers
              </Link> */}
              <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
              <Link
                to="/faq"
                className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </section>

        {/* SURVEY */}
        <div className="w-full border-[#F20089] border-y-2 py-10 lg:py-16">
          <p className="text-center lg:text-2xl font-medium select-none">
            <a
              href="https://forms.gle/g17Nh8HUjfuGWhne9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#002147] block"
            >
              You are an early user. <br />
              Take a minute and{" "}
              <span className="text-[#F20089] font-bold">
                share your ideas.
              </span>
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
