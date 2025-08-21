import React from "react";
import { Link } from "react-router-dom";

function ToolsSet(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            TOOLS SET
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
            <Link
              to="API-versioning"
              className="text-[#00bfff] hover:underline text-lg"
            >
              API Versioning
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="templates"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Templates
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="the-badgeBanner"
              className="text-[#00bfff] hover:underline text-lg"
            >
              The BadgeBanner
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="environment-settings"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Environment Settings
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pt-16">
              <h2 className="text-right font-extralight text-2xl">A Node</h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
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
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">An Edge</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
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
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">A Flow</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
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
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">CRUD</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
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
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pb-16">
              <Link
                to=""
                className="underline underline-offset-2 text-[#00bfff] hover:no-underline"
              >
                <h2 className="text-right font-extralight text-2xl text-[#00bfff]">
                  Custom Node
                </h2>
              </Link>
            </div>
            <div className="w-1/3 py-8 pb-16 px-12 border-x">
              <p>
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
            <div className="w-1/5 p-8 pb-16"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ToolsSet;
