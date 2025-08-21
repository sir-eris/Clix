import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
} from "reactflow";
import "animate.css";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
// import { nodeTypes, initialNodes } from "../dash/design/nodes";
import { homeNodeTypes, homeNodes } from "../dash/logic/nodes";
import { homeEdges } from "../dash/logic/edges";


const initialNodeTypes = homeNodeTypes;
const initialEdges = homeEdges;
const initialNodes = homeNodes;


function Home(props) {
  const showNodes = !(props?.isSmallDevice ?? false);
  const [nodes, setNodes] = useState(initialNodes);
  
  return (
    <>
      {props.helmet}
      {/* Main */}
      <main className="mt-10 lg:mt-12">
        {/* HOW */}
        <section className="relative block w-full py-10 lg:pb-32 text-[#002147]">
          {/* LOGO */}
          <a href="/" className="block w-fit mx-auto mb-16 lg:mb-20">
            <img
              src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
              width={"30px"}
              height={"30px"}
              className="mx-auto mb-2"
              alt="Clix.dev official logo"
            />
            <p className="text-center font-bold text-sm lg:text-base text-[#00BFFF]">
              Clix.dev
            </p>
          </a>

          {/* testflight */}
          <div>
            <small className="relative z-30 bg-white/60 block text-[#4BFB80] w-fit text-center mx-auto px-6 drop- py-2 rounded-full border-[#4BFB80] shadow-md ring-[#fff] ring-1 border-2 mb-6">
              We are in TestFlight.{" "}
              <a href="/register" className="underline">
                Sign up
              </a>{" "}
              for more.
            </small>
          </div>

          {/* START */}
          <div className="w-full min-h-[65vh] lg:min-h-[70vh]">
            <div className="text-center mb-10 lg:mb-20 px-9 sm:px-16 md:px-24 lg:px-30">
              <p className="font-thin text-xs lg:text-sm">Made</p>
              <h1 className="text-4xl lg:text-6xl font-black py-5">
                API Coding
              </h1>
              <p className="font-thin text-xs lg:text-sm">Visual</p>
            </div>
            <h2 className="block text-lg lg:text-2xl text-center leading-6 lg:leading-8 my-7 px-9 sm:px-16 md:px-24 lg:px-30">
              Drag and Drop nodes to create a flow. <br />
              Create custom nodes and reuse. <br />
              Translate to code and back.
            </h2>
            <div className="z-40 relative flex justify-center items-center w-full px-9 sm:px-16 md:px-24 lg:px-30">
              <Link
                to="/register"
                className="hover:underline text-[#00BFFF] text-xl"
              >
                Try for Free
              </Link>
            </div>
          </div>

          {/* Be The Brain */}
          <div className="w-full min-h-[60vh] lg:min-h-[65vh]">
            <div className="text-center mb-10 px-9 sm:px-16 md:px-24 lg:px-30">
              <p className="font-thin text-xs lg:text-sm">The New Way</p>
              <h1 className="text-4xl lg:text-6xl font-black py-5">
                The Logic
              </h1>
              <p className="font-thin text-xs lg:text-sm">To Code APIs</p>
            </div>
            {/* <h2 className="block text-2xl text-center leading-8 my-7 px-9 sm:px-16 md:px-24 lg:px-30"></h2> */}
            <div className="z-40 relative flex justify-center items-center w-full gap-x-14 px-9 sm:px-16 md:px-24 lg:px-30">
              <Link
                to="/tools"
                className="hover:underline text-[#00BFFF] text-xl"
              >
                Explore Tools
              </Link>
            </div>
          </div>

          {/* THE PLAYGROUND */}
          <div className="w-full min-h-[70vh] lg:min-h-[75vh] mb-28">
            <div className="text-center mb-20 px-9 sm:px-16 md:px-24 lg:px-30">
              <h2 className="font-thin text-xs lg:text-sm">Freedom</h2>
              <h1 className="text-4xl lg:text-6xl font-black py-5">
                Nodes & Edges
              </h1>
              <p className="font-thin text-xs lg:text-sm">Re-defined</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-6">
              <div className="w-[340px] lg:w-[375px]">
                <div className="relative z-30 w-[270px] lg:w-[320px] h-[270px] lg:h-[300px] bg-[#fff] mx-auto border-4 shadow-md rounded-2xl overflow-hidden mb-7">
                  <img
                    src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/miniMap.png"
                    height="100%"
                    className="mx-auto h-full w-full"
                  />
                </div>
                <p className="text-xs font-bold text-[gray] text-center mb-1">
                  MiniMap
                </p>
                <h2 className="text-center text-xl lg:text-2xl font-bold text-gray-700 mb-4">
                  Simpler Architecture
                </h2>
                <p className="text-center block mb-4 text-black text-sm font-medium lg:text-base">
                  In the <b>The Grid</b> you can scale a project by drag &
                  dropping nodes and organizing them per your requirements.
                </p>
              </div>
              <div className="w-[340px] lg:w-[375px]">
                <div className="relative z-30 bg-[#fff] w-[270px] lg:w-[320px] h-[270px] lg:h-[300px] mx-auto border-4 shadow-md rounded-2xl overflow-hidden mb-7">
                  <img
                    src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/controls.png"
                    height="100%"
                    className="mx-auto h-full w-full"
                  />
                </div>
                <p className="text-xs font-bold text-[gray] text-center mb-1">
                  Grid Controls
                </p>
                <h2 className="text-center text-xl lg:text-2xl font-bold text-gray-700 mb-4">
                  Unlimited Space
                </h2>
                <p className="text-center block mb-4 text-black text-sm font-medium lg:text-base">
                  <b>The Grid</b> will give you an unlimited amount of access to
                  development resources. Move around as you wish.
                </p>
              </div>
              <div className="w-[340px] lg:w-[375px]">
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/combo-1.png"
                  className="relative z-30 w-[270px] lg:w-[320px] h-[270px] lg:h-[300px] bg-[#fff] mx-auto border-4 shadow-md rounded-2xl overflow-hidden mb-7 object-cover"
                />
                <p className="text-xs font-bold text-[gray] text-center mb-1">
                  Universal Modules
                </p>
                <h2 className="text-center text-xl lg:text-2xl font-bold text-gray-700 mb-4">Less Bugs</h2>
                <p className="text-center block mb-4 text-black text-sm font-medium lg:text-base">
                  Certain modules are setup universally. Use them as you see fit
                  to your project. You can locally customize them and save a
                  copy.
                </p>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="z-40 relative flex flex-wrap justify-center items-center w-full gap-x-3 lg:gap-x-8">
            <Link
              to="/register"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
            >
              Try for Free
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="/tools/the-logic"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
            >
              The Logic
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="/tools"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
            >
              Explore Tools
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
            <Link
              to="/translator"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
            >
              Translator
            </Link>
          </div>

          {/* background graph */}
          <div className="absolute inset-0 w-full">
            <ReactFlow
              nodes={showNodes ? nodes : []}
              edges={initialEdges}
              nodeTypes={showNodes ? initialNodeTypes : {}}
              // fitView
              // onConnect={onConnect}
              // onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              // defaultZoom={1.5}
              onlyRenderVisibleElements={true}
              defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              zoomOnDoubleClick={false}
              zoomOnScroll={false}
              panOnScroll={false}
              preventScrolling={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background />
              {/* <Controls className="bg-white" /> */}
            </ReactFlow>
          </div>
        </section>

        {/* TRANSLATION */}
        <section className="relative block py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full text-[#002147] border-y">
          <div className="text-center mb-5 lg:mb-10">
            <p className="font-thin text-xs lg:text-sm">Included</p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              The Most Intelligent
              <br />
              Node-to-Code Translator
            </h1>
            <p className="font-thin text-xs lg:text-sm"></p>
          </div>
          <h2 className="block text-lg lg:text-2xl text-center leading-7 lg:leading-8 mb-10 lg:mb-20">
            The smoothest transition from node to code and back. Simply sync
            after you make a change.
          </h2>
          {/* links */}
          <div className="flex flex-wrap justify-center items-center w-full gap-x-3 lg:gap-x-8">
            <Link
              to="/translator"
              className="hover:underline text-[#FF8800] text-sm lg:text-lg"
            >
              Learn More
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#FF8800]"></span>
            <Link
              to="/translator/cli"
              className="hover:underline text-[#FF8800] text-sm lg:text-lg"
            >
              CLI
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#FF8800]"></span>
            <Link
              to="/translator/syncing"
              className="hover:underline text-[#FF8800] text-sm lg:text-lg"
            >
              Syncing
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#FF8800]"></span>
            <Link
              to="/translator/languages"
              className="hover:underline text-[#FF8800] text-sm lg:text-lg"
            >
              Languages
            </Link>
          </div>
        </section>

        {/* TOOLS SET */}
        <section className="relative block py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full border-b text-[#002147]">
          <div className="text-center mb-10">
            <p className="font-thin text-xs lg:text-sm">Flexibility</p>
            <h1 className="text-2xl lg:text-4xl font-bold py-5">
              A Modular Environment
              <br />A Smooth Development
            </h1>
          </div>
          {/* links */}
          <div className="flex justify-center items-center w-full gap-x-3 lg:gap-x-8 mb-10">
            <Link
              to="/tools/API-versioning"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg w-36 text-center"
            >
              Explore Tools Set
            </Link>
            {/* <span className="block w-1 h-1 rounded-full bg-[#00BFFF] ml-[3px]"></span>
            <Link
              to="/tools/new"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg w-36 text-left pl-[6px]"
            >
              Build Your Own
            </Link> */}
          </div>
          <div className="w-full lg:h-[35vh] grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3">
            {/* row 1 */}
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0">
              <p className="mb-4">API Versioning</p>
              <Link
                to="/tools/API-versioning"
                className="text-[gray] text-sm hover:underline"
              >
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/draft.png"
                  className="w-full h-40 mb-4 border shadow-sm object-cover"
                  alt="Clix.dev API Versioning feature for building better REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="/tools/API-versioning"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">Project to Template</p>
              <Link
                to="/tools/templates"
                className="text-[gray] text-sm hover:underline"
              >
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/template.png"
                  className="w-full h-40 mb-4 border shadow-sm object-cover"
                  alt="Clix.dev ability to make templates from projects to reuse when building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="/tools/templates"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">The BadgeBanner</p>
              <Link
                to="/tools/the-badgeBanner"
                className="text-[gray] text-sm hover:underline"
              >
                <img
                  src="https://clix-public-assets.s3.us-west-1.amazonaws.com/email/the-badgebanner.png"
                  className="w-full h-40 mb-4 border shadow-sm object-contain"
                  alt="The BadgeBanner is the developer's Assistant while building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="/tools/the-badgeBanner"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div>
            {/* <div className="w-full h-full p-8 text-center border-b lg:border-b-0 lg:border-l">
              <p className="mb-4">Environment Settings</p>
              <Link
                to="/tools/environment-settings"
                className="text-[gray] text-sm hover:underline"
              >
                <img
                  src=""
                  className="w-full h-40 mb-4 border shadow-sm"
                  alt="Clix.dev can be set according to developer's preference when building REST APIs for web and mobile."
                />
              </Link>
              <Link
                to="/tools/environment-settings"
                className="text-[gray] text-sm hover:underline"
              >
                More
              </Link>
            </div> */}
          </div>
        </section>

        {props.CTA}

        {/* WHAT'S NEW */}
        <section className="hidden py-10 lg:py-20 w-full border-t screen text-[#002147] scrollbar-hidden">
          <div className="flex flex-wrap justify-between items-center text-left mb-10 px-9 sm:px-16 md:px-24 lg:px-30">
            <div>
              <p className="font-thin text-xs lg:text-sm">Major Updates</p>
              <h1 className="text-3xl lg:text-5xl font-bold pt-2 pb-5">
                What's New
              </h1>
            </div>
            <Link
              to="/newsletter"
              className="text-[#00BFFF] hover:underline text-sm lg:text-lg"
            >
              Join Newsletter
            </Link>
          </div>
          <div className="w-full h-full mb-20 overflow-auto whitespace-nowrap bg-[#fff] space-x-12 px-12 py-4 scrollbar-hidden">
            {/* card */}
            <div className="inline-block">
              <div className="w-[1200px] whitespace-normal border-2 border-gray-300 ring-4 ring-gray-200 shadow-md rounded-lg h-[56vh] grid grid-cols-2 overflow-hidden">
                <div className="w-full h-full p-7 flex flex-wrap flex-col justify-between">
                  {/* header */}
                  <div>
                    {/* title */}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                        />
                      </svg>

                      <h2 className="text-xl font-medium mb-5">
                        Introducing The BadgeBanner
                      </h2>
                    </div>

                    {/* description */}
                    <p className="mb-8">
                      In deserunt nisi eiusmod eiusmod. Dolor dolor pariatur
                      voluptate officia amet sit irure excepteur ipsum sit.
                      Velit deserunt ut qui deserunt.
                    </p>
                  </div>

                  {/* features */}
                  <div>
                    <p className="mb-3 font-bold text-[gray] text-xs">
                      Features
                    </p>
                    <ul className="ml-3 space-y-2 text-base font-medium text-[#333] list-disc">
                      <li>
                        Provides deeper understanding of every element during
                        API development.
                      </li>
                      <li>Includes extra resources for curious developers.</li>
                      <li>
                        For ease of access The BadgeBanner follows you around
                        Clix until closed manually.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full h-full border-l bg-[pink]"></div>
              </div>
            </div>

            {/* card */}
            <div className="inline-block">
              <div className="w-[1200px] whitespace-normal border-2 border-gray-300 ring-4 ring-gray-200 shadow-md rounded-lg h-[56vh] grid grid-cols-2 overflow-hidden">
                <div className="w-full h-full p-7 flex flex-wrap flex-col justify-between">
                  {/* header */}
                  <div>
                    {/* title */}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mb-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>

                      <h2 className="text-xl font-medium mb-5">
                        API Versioning is coming to Clix
                      </h2>
                    </div>

                    {/* description */}
                    <p className="mb-8">
                      In deserunt nisi eiusmod eiusmod. Dolor dolor pariatur
                      voluptate officia amet sit irure excepteur ipsum sit.
                      Velit deserunt ut qui deserunt.
                    </p>
                  </div>

                  {/* features */}
                  <div>
                    <p className="mb-3 font-bold text-[gray] text-xs">
                      Features
                    </p>
                    <ul className="ml-3 space-y-2 text-base font-medium text-[#333] list-disc">
                      <li>
                        Provides deeper understanding of every element during
                        API development.
                      </li>
                      <li>Includes extra resources for curious developers.</li>
                      <li>
                        For ease of access The BadgeBanner follows you around
                        Clix until closed manually.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full h-full border-l bg-[yellow]"></div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex justify-center items-center w-full gap-x-3 lg:gap-x-8">
            <Link
              to="/register"
              className="hover:underline text-[#00BFFF] text-sm lg:text-lg"
            >
              Try for Free
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#002147]"></span>
            <Link
              to="/get-started"
              className="hover:underline text-[#002147] hover:text-[#00BFFF] text-sm lg:text-lg"
            >
              Get Started
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#002147]"></span>
            <Link
              to="about"
              className="hover:underline text-[#002147] hover:text-[#00BFFF] text-sm lg:text-lg"
            >
              About Us
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#002147]"></span>
            <Link
              to="/contact"
              className="hover:underline text-[#002147] hover:text-[#00BFFF] text-sm lg:text-lg"
            >
              Contact
            </Link>
          </div>
        </section>

        {/* BANNER */}
        <div className="fixed bottom-0 w-full">
          <div className="flex justify-center items-center w-full bg-[002147] text-[#fff] text-[8px] md:text-xs border- text-center py-2 bg-blur">
            {/* <p className="flex items-center pr-1">We are in Test Flight!</p> */}
            <Link
              to="/contact"
              className="flex items-center hover:underline cursor-pointer"
            >
              Send feedback
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
