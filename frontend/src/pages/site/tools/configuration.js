import React from "react";
import { Link } from "react-router-dom";

function Configuration(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            CONFIGURATION
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
              <h2 className="text-right font-extralight text-2xl">Projects</h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                In your projects tab you can view your open projects and some
                details about them. On the far left of each project is your{" "}
                <span className="font-bold text-[#00bfff]">
                  {"<project_token>"}
                </span>
                . You will need this for later during the code generation
                process.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Versions</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                Although this feature will be release early 2023, API Versioning
                is an important concept in Web API development and Clix.dev will
                make sure you have access to the latest features available.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Settings</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                The Settings section is a direct access to your settings file of
                your project. You can add an arbitrary number of fields along
                with their values to be reflected directly on you settings file.
                (Each field's name will be set to equal to the field's value as
                you define them.)
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">Code</h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                The source code of your project is acceible through the{" "}
                <Link to="/translator/cli" className="text-[#00BFFF]">
                  CLI
                </Link>
                . You can generate the code and continue{" "}
                <Link
                  to="/translator/local-development"
                  className="text-[#00BFFF]"
                >
                  Development
                </Link>
                , or deploy it right away. If you need to make any changes to
                your project you can simply{" "}
                <Link to="/translator/syncing" className="text-[#00BFFF]">
                  Sync
                </Link>{" "}
                your project.
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

export default Configuration;
