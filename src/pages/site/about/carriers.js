import React from "react";
import { Link } from "react-router-dom";

function ByDevelopers(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[50vh] lg:h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            CARRIERS
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-3 lg:gap-x-8">
            <Link
              to="/about/supported-APIs"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Supported APIs
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/about/who-we-are"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Who We Are
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/about/carriers"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Carriers
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Senior BackEnd - Cloud
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-8">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Senior BackEnd - REST API
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Senior Python
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Mid-Senior Python - Data
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <div>
                <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                  Senior Javascript
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <div>
                <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                  Senior FrontEnd - ReactJS
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <div>
                <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                  Senior FrontEnd - Graphic Design
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-16 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Incididunt dolor nostrud dolore veniam labore pariatur tempor.
                Nulla mollit laborum duis Lorem consectetur pariatur do
                consectetur adipisicing enim. In officia mollit et in duis
                labore. Ea non elit occaecat occaecat excepteur sit anim nisi ad
                exercitation aliquip voluptate ex minim. Occaecat labore sint
                fugiat Lorem ut et ullamco reprehenderit fugiat aute
                exercitation consectetur. Do consequat ea laboris aliqua
                occaecat cillum consequat quis aliqua laborum. Aute elit ut
                ipsum occaecat pariatur nostrud ullamco duis exercitation. In
                qui in pariatur voluptate exercitation quis sunt exercitation.
                Sit anim nisi nostrud pariatur laborum labore sit veniam ad
                veniam cillum. Eiusmod fugiat amet sit deserunt ut minim Lorem
                irure minim reprehenderit aute. Irure sit esse ipsum proident
                amet tempor.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <Link to="" className="text-[#00bfff] hover:underline">
                Apply
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ByDevelopers;
