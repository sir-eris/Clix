import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import zero from "../../../assets/tutorial/0.png"
import one from "../../../assets/tutorial/1.png"
import two from "../../../assets/tutorial/2.png"
import three from "../../../assets/tutorial/3.png"
import four from "../../../assets/tutorial/4.png";


export default function Endpoints() {
  const slides = [
    {
      subtitle: (
        <small className="text-xs text-gray-500 mb-2 block">Welcome to Clix!</small>
      ),
      title: (
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          {/* Design and Build a REST API in your sleep. */}
          The Endpoints
        </h3>
      ),
      description: (
        <>
          <p className="text-sm mb-1">
            Here you can create and modify your REST API schema.
          </p>
          <p className="text-sm mb-6">
            As the developer of this project, design each API Endpoint with
            the fact that your users will be calling it.
          </p>
        </>
      ),
      image: (
        <img
          src={four}
          className="shadow border-4 rounded-lg mx-auto max-h-[350px] select-none"
          //   alt={this.description}
        />
      ),
    },
    {
      subtitle: (
        <small className="text-xs text-gray-500 mb-2 block">Step 1 of 4</small>
      ),
      title: (
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          Create Complete Endpoints.
        </h3>
      ),
      description: (
        <p className="text-sm mb-6">
          A. Start by choosing whether the Endpoint is going to retrieve
          something from the database (GET) or create a new record (POST),
          etc.
        </p>
      ),
      image: (
        <img
          src={zero}
          className="shadow border-4 rounded-lg mx-auto max-h-[350px] select-none"
          //   alt={this.description}
        />
      ),
    },
    {
      subtitle: (
        <small className="text-xs text-gray-500 mb-2 block">Step 2 of 4</small>
      ),
      title: (
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          The dynamic UI will do the heavy lifting for you.
        </h3>
      ),
      description: (
        <p className="text-sm mb-6">
          B. From here onwards, everything is going to feel fully Dynamic. The
          smart UI will provide you with options based on the Method you
          choose.
        </p>
      ),
      image: (
        <img
          src={one}
          className="shadow border-4 rounded-lg mx-auto max-h-[350px] select-none"
          // alt={this.description}
        />
      ),
    },
    {
      subtitle: (
        <small className="text-xs text-gray-500 mb-2 block">Step 3 of 4</small>
      ),
      title: (
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          Experience true flexibility.
        </h3>
      ),
      description: (
        <p className="text-sm mb-6">
          C. Modify the Endpoint's headers, URL parameters, and payload (Body)
          as extensively as you wish. (Don't forget these items are the ones
          your users will be sending over.)
        </p>
      ),
      image: (
        <img
          src={two}
          className="shadow border-4 rounded-lg mx-auto max-h-[350px] select-none"
          // alt={this.description}
        />
      ),
    },
    {
      subtitle: (
        <small className="text-xs text-gray-500 mb-2 block">Step 4 of 4</small>
      ),
      title: (
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          You just skipped 15 minutes of work!
        </h3>
      ),
      description: (
        <p className="text-sm mb-6">
          D. Lastly, give each Endpoint a name and description for
          identification purposes.
        </p>
      ),
      image: (
        <img
          src={three}
          className="shadow border-4 rounded-lg mx-auto max-h-[350px] select-none"
          // alt={this.description}
        />
      ),
    },
  ];
  
  let [isOpen, setIsOpen] = useState(true);
  let [slide, setSlide] = useState(slides[0]);
  let [slideNumber, setSlideNumber] = useState(0);

  // useEffect(() => {
  //   const handleKeDown = (e) => {
  //     if (e.which === 39) nextSlide();
  //     if (e.which === 37) prevSlide();
  //   };

  //   window.addEventListener("keydown", (e) => handleKeDown(e));

  //   return () => {
  //     window.removeEventListener("keydown", (e) => handleKeDown(e));
  //   };
  // }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function nextSlide() {
    if (slideNumber === slides.length - 1) {
        setSlideNumber(0);
        setSlide(slides[0]);
        return;
    }

    setSlideNumber(slideNumber + 1);
    setSlide(slides[slideNumber + 1]);
  }

  function prevSlide() {
    if (slideNumber === 0) {
        return;
    }

    setSlideNumber(slideNumber - 1);
    setSlide(slides[slideNumber - 1]);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                enter="duration-300 ease-out"
                enterFrom="opacity-0 scale-90 h-1/6"
                enterTo="opacity-100 scale-100 h-full"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100 scale-100 h-full"
                leaveTo="opacity-0 scale-90 h-1/6"
              >
                <Dialog.Panel className="relative w-[800px] h-[auto] transform overflow-hidden rounded-xl bg-white px-6 py-7 text-left align-middle shadow-xl transition-all">
                  <small
                    onClick={closeModal}
                    className="absolute top-3 right-4 text-xs text-[lightgray] select-none hover:text-[gray] hover:cursor-pointer"
                  >
                    Skip
                  </small>

                  <div className="mb-12">
                    {slide.subtitle}
                    {slide.title}
                    {slide.description}
                    {slide.image}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-5 h-16">
                    
                    <button
                      type="button"
                      className="select-non px-4 py-3 my-2 text-sm font-medium text-[#00BFFF]"
                      onClick={prevSlide}
                    >
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
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="select-non px-4 py-3 my-2 text-sm font-medium text-[#00BFFF]"
                      onClick={
                        slideNumber === slides.length - 1
                          ? closeModal
                          : nextSlide
                      }
                    >
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
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                      {slideNumber === slides.length - 1 ? "Close" : "Next"}
                    </button>
                      
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
