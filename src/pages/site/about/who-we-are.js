import React from "react";
import { Link } from "react-router-dom";


function WhoWeAre(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[50vh] lg:h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            WHO WE ARE
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
            {/* <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/about/carriers"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Carriers
            </Link> */}
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-8">
              <h2 className="flex flex-col h-full justify-between items-end text-center lg:text-right font-extralight text-lg lg:text-2xl">
                <span>Eris Verne</span>
                <span>
                  <a
                    href="https://twitter.com/erisverne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit block transition-colors fill-gray-400 hover:fill-gray-700"
                  >
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                    </svg>
                  </a>
                </span>
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                As the pioneer of <i>Node-to-Code</i> technology, Eris is a rare
                jewel among developers who have been able to successfully bridge
                the world of games to web development. Eris studied Computer
                Game Science with a focus on cloud management architecture from
                University of California Irvine - among a handful of departments
                in the nation offering game dev. During his studies, as a hobby
                and with the backend knowledge from school, he turned into an
                excellent web developer. Although since, he never truly perused
                game dev, he stayed close to web dev and successfully
                established and sold 2 web-based businesses.
              </p>
              <br />
              <p className="text-sm lg:text-base">
                Clix comes to Eris as a gift to the community of web devs
                (especially backend devs). Eris' vision far exceeds the average
                developer's in that he sees a world where web dev is as simple
                as a one-click-checkout, or as fast a drive-through-checkout, or
                as trivial as turning on your coffee machine in the morning.
                Regarding the complexities of Web development, he says "web dev
                is complicated so is so many other things!"
              </p>
              <br />
              <p>
                <i>
                  "Nobody teaches you how to use an iPhone; neither should they
                  about web development." <br />
                </i>
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-8">
              <a
                href="https://twitter.com/erisverne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit block transition-colors fill-gray-400 hover:fill-gray-700"
              >
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/erisverne.png"
                  className="w-[220px] h-[220px] rounded block borde shadow-inner bg-[lightgray]"
                  alt="Eris Verne - Pioneer of Node-to-Code technology for web API development."
                />
              </a>
            </div>
          </div>
          <hr className="hidden my-0 mx-56" />
          <div className="hidden w-full flx flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Safa Hosseini
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base"></p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <img
                src=""
                className="w-[220px] h-[220px] rounded block shadow-inner bg-[lightgray]"
              />
            </div>
          </div>
          <hr className="hidden my-0 mx-56" />
          <div className="hidden w-full flx flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Mohammad Gholamrezai
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base"></p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <img
                src=""
                className="w-[220px] h-[220px] rounded block shadow-inner bg-[lightgray]"
              />
            </div>
          </div>
          <hr className="hidden my-0 mx-56" />
          <div className="hidden w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Team
              </h2>
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
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <img
                src=""
                className="w-[220px] h-[220px] rounded block shadow-inner bg-[lightgray]"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default WhoWeAre;
