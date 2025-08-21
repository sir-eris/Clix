import React from "react";
import { Link } from "react-router-dom";

function Endpoint(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[50vh] lg:h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            ENDPOINT
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-3 lg:gap-x-8">
            <Link
              to="/tools/endpoint"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Endpoint
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/data-model"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Data Model
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/the-logic"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              The Logic
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/tools/configuration"
              className="text-[#00bfff] hover:underline text-sm lg:text-lg"
            >
              Configuration
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-16">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Request Method
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-16 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                The request Method is the first thing you need when creating an
                endpoint. Select the appropriate Method for the endpoint based
                on the logic of the endpoint.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Request Headers
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                You can add, remove and modify any number of headers that the
                endpoint will be expecting. Choose a name for the header{" "}
                <span className="text-[#00bfff]">
                  (ex. <i>x-auth-token</i>)
                </span>{" "}
                followed by its type.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                URL Parameters
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                You can add, remove and modify any number of uri parameters that
                the endpoint will be expecting. Choose a name for the parameter{" "}
                <span className="text-[#00bfff]">
                  (ex. <i>product_id</i>)
                </span>{" "}
                followed by its type.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                Payload (Body)
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                The payload always expects either <i>none</i> or <i>json</i>{" "}
                format. You can add, remove and modify any number of payload
                items that the endpoint will be processing. Choose a name for
                the item{" "}
                <span className="text-[#00bfff]">
                  (ex. <i>old_password</i>, <i>new_password</i>)
                </span>{" "}
                followed by its type.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16">
              <Link
                to="/tools/the-logic"
                className="underline underline-offset-2 text-[#00bfff] hover:no-underline"
              >
                <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl text-[#00bfff]">
                  The Logic
                </h2>
              </Link>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-16 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                The Logic is where you will use Nodes and Edges to build a Flow
                that resolves your API logic. You have unlimited access to the
                universal modules. Check out{" "}
                <Link to="/teams" className="text-[#00BFFF]">
                  Teams
                </Link>{" "}
                for more information on customization.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pb-16"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Endpoint;
