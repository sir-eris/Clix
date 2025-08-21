import React from "react";
import { Link } from "react-router-dom";

function DataModel(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            DATA MODEL
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
            <Link
              to="/tools/endpoint"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Endpoint
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/data-model"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Data Model
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/the-logic"
              className="text-[#00bfff] hover:underline text-lg"
            >
              The Logic
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/configuration"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Configuration
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pt-16">
              <h2 className="text-right font-extralight text-2xl">Database</h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                Every project comes with one SQL-Database. Although you can
                create as many tables in the database as you wish, the ability
                to manage more than one database will be added to Clix.dev mid
                2023.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Database Tables
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                In a trivial manner, you can manage as many tables as your
                project requires. You can create tables and attach as many
                fields to them as you see fit. Updating and removing tables
                follows a similar process.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Tabel Fields
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                As each database table consist of many fields, the Dynamic UI
                will help you make your changes swiftly and as many times as you
                want.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pb-16">
              <Link
                to="/tools/the-logic"
                className="underline underline-offset-2 text-[#00bfff] hover:no-underline"
              >
                <h2 className="text-right font-extralight text-2xl text-[#00bfff]">
                  The Logic
                </h2>
              </Link>
            </div>
            <div className="w-1/3 py-8 pb-16 px-12 border-x">
              <p>
                The Logic is where you will use Nodes and Edges to build a Flow
                that resolves your API logic. You have unlimited access to the
                universal modules. Check out{" "}
                <Link to="/teams" className="text-[#00BFFF]">
                  Teams
                </Link>{" "}
                for more information on customization.
              </p>
            </div>
            <div className="w-1/5 p-8 pb-16"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DataModel;
