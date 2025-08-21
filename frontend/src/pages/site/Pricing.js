import React from "react";
import { Link } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";

function Pricing(props) {
  return (
    <main className="relative block mt-16">
      {props.helmet}
      {/* plans */}
      <section className="relative px-9 sm:px-16 md:px-24 lg:px-30 w-full pt-20 pb-40">
        {/* header */}
        <div className="w-full text-center mb-24">
          <h1 className="">PRICING</h1>
        </div>
        {/* student link */}
        <Link to={{ pathname: "/register" }} className="block w-fit mx-auto">
          <div className="block w-fit mx-auto text-[#00BFFF] text-lg hover:underline text-center mb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <p>Students Unlimited Everything</p>
          </div>
        </Link>
        {/* options */}
        <div className="grid grid-cols-2 gird-rows-2 select-none border-y mb-20">
          {/* small teams */}
          <Link
            to={{
              pathname: "/register",
              state: { subsPlan: 1 },
            }}
            as="div"
            className="w-full h-[400px] flex flex-col justify-between pt-7 pb-10 px-12 hover:text-[#fff] hover:bg-[#00BFFF] transition-all"
          >
            <div className="w-full flex justify-between items-end">
              <div className="">
                <p className="mb-1 font-medium text-lg">
                  5 Projects <span className="px-1">+</span> 300 Endpoints
                </p>
                <p className="font-black text-xs text-[gray]">
                  $35 <span className="px-1">/</span> DEVELOPER{" "}
                  <span className="px-1">/</span> TEAM
                </p>
              </div>
              <button className="block hover:underline ml-auto text-[#] text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Select Option
              </button>
            </div>
            <div>
              <div className="flex">
                <span className="leading-[14px] mr-[2px] text-sm">+</span>
                <small className="mb-1 text-xs">2 Months Free</small>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-[#002147]">
                Small Teams
              </h2>
              <p>Enim enim sint eiusmod laborum.</p>
            </div>
          </Link>

          {/* large teams */}
          <div className="w-full h-[400px] flex flex-col justify-between border-l pt-7 pb-10 px-12 hover:text-[#fff] hover:bg-[#00BFFF] transition-all">
            <div className="w-full flex justify-between items-end">
              <div className="">
                <p className="mb-1 font-medium text-lg">Unlimited Everything</p>
                <p className="font-black text-xs text-[gray]">
                  $75 <span className="px-1">/</span> DEVELOPER{" "}
                  <span className="px-1">/</span> TEAM
                </p>
              </div>
              <button className="block hover:underline ml-auto text-[#] text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Coming Soon
              </button>
            </div>
            <div>
              <div className="flex">
                <span className="leading-[14px] mr-[2px] text-sm">+</span>
                <small className="mb-1 text-xs">2 Months Free</small>
              </div>
              <h2 className="text-3xl mb-3 font-bold text-[#002147]">
                Established Teams
              </h2>
              <p>
                Eu sunt laborum dolore ipsum ad reprehenderit commodo amet Lorem
                adipisicing.
              </p>
            </div>
          </div>
        </div>

        {/* included */}
        <div className="">
          {/* header */}
          <div className="text-center mb-10 lg:mb-20">
            <p className="font-thin text-xs lg:text-sm">
              Included
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              For All Plans
            </h1>
          </div>

          {/* list */}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-9 sm:px-16 md:px-24 lg:px-30 w-full pt-20 pb-40 bg-gray-100 shadow-inner transition-all">
        <div className="w-full text-center mb-10">
          <h1 className="text-3xl font-bold mb-5">
            Frequently Asked Questions
          </h1>
          <Link to="/contact" className="hover:underline text-[#00BFFF]">
            Ask Question
          </Link>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between p-5 text-left font-thin text-gray-700 border-b hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 mb-6">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between p-5 text-left font-thin text-gray-700 border-b hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                  <span>What is your refund policy?</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 mb-6">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
