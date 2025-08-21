import React from "react";
import { Link } from "react-router-dom";

function Teams(props) {
  return (
    <>
      {props.helmet}
      <main className="mt-10 lg:mt-12">
        {/* PILLARS */}
        <section className="py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full text-[#002147]">
          <div className="text-center mb-8 lg:mb-16">
            <p className="font-thin text-xs lg:text-sm">
              Unify Coding Practices
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold py-5">
              Endlessness Made Possible
            </h1>
            <p className="font-thin text-xs lg:text-sm mb-8">Among All Ciaos</p>
            <p className="block w-fit mx-auto hover:underline hover:cursor-default text-sm lg:text-lg text-[#FF7B00]">
              Note: These set of features will be released Feb, 23.
            </p>
          </div>
          <div className="w-full h-full mb-14 lg:mb-16">
            <ol className="w-full grid grid-rows-4 lg:grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-3">
              <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                <h3 className="font-bold text-2xl mb-2">Custom Nodes</h3>
                <p>
                  Create a node that represents a chunk of code that cam be
                  universally repeated.
                </p>
              </li>
              <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                <h3 className="font-bold text-2xl mb-2">Custom Logic</h3>
                <p>
                  Each custom Node can carry a custom logic derived from you or
                  others.
                </p>
              </li>
              <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                <h3 className="font-bold text-2xl mb-2">Node Groups</h3>
                <p>
                  Bundle Nodes together into a <i>Super Node</i>. Share them internally or with others.
                </p>
              </li>
              <li className="h-[300px] border flex flex-col justify-end shadow-md p-5 select-none rounded-lg bg-[#fff] hover:bg-[#00BFFF] hover:text-[#fff] hover:border hover:border-[#fff]">
                <h3 className="font-bold text-2xl mb-2">
                  Clix Store<sup>©</sup>
                </h3>
                <p>
                  Offer your custom Nodes and Node Groups on the Clix Store for others to use.
                </p>
              </li>
            </ol>
          </div>
          <h2 className="text-lg lg:text-xl text-center leading-6 lg:leading-7 my-7">
            Create project specific logic.
            <br />
            Share internal logic with each other.
            <br />
            Build Node sets and share with the world.
          </h2>
          <div className="flex justify-center items-center w-full gap-x-14">
            <Link to="/newsletter" className="hover:underline text-lg text-[#00BFFF]">
              Join Newsletter
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Teams;
