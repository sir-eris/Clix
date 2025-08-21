import React from "react";
import { Link } from "react-router-dom";

function SupportedAPIs(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[50vh] lg:h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            SUPPORTED APIs
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
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                RESTful
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                REST is a set of architectural constraints, not a protocol or a
                standard. API developers can implement REST in a variety of
                ways. A REST API (also known as RESTful API) is an application
                programming interface (API or web API) that conforms to the
                constraints of REST architectural style and allows for
                interaction with RESTful web services. REST stands for
                representational state transfer and was created by computer
                scientist Roy Fielding.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8 lg:pt-8">
              <span className="text-[#4BFB80] font-medium">Supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                SOAP
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                SOAP (Simple Object Access Protocol) is a messaging protocol
                specification for exchanging structured information in the
                implementation of web services in computer networks. It uses XML
                Information Set for its message format, and relies on
                application layer protocols, most often Hypertext Transfer
                Protocol (HTTP), although some legacy systems communicate over
                Simple Mail Transfer Protocol (SMTP), for message negotiation
                and transmission. SOAP allows developers to invoke processes
                running on different operating systems (such as Windows, macOS,
                and Linux) to authenticate, authorize, and communicate using
                Extensible Markup Language (XML). Since Web protocols like HTTP
                are installed and running on practically all operating systems,
                SOAP allows clients to invoke web services and receive responses
                independent of language and platforms.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                RPC
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-8 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                Remote Procedure Call (RPC) is the earliest, simplest form of
                API interaction. It is about executing a block of code on
                another server, and when implemented in HTTP or AMQP it can
                become a Web API. There is a method and some arguments, and that
                is pretty much it. Think of it like calling a function in
                JavaScript, taking a method name and arguments. When used for
                CRUD, RPC is just a case of sending up and down data fields,
                which is fine, but one downside is that the client is entirely
                in charge of pretty much everything. The client must know which
                methods (endpoints) to hit at what time, in order to construct
                its own workflow out of otherwise naive and non-descriptive
                endpoints. RPC is merely a concept, but that concept has a lot
                of specifications, all of which have concrete implementations
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <h2 className="text-center lg:text-right font-extralight text-lg lg:text-2xl">
                gRPC
              </h2>
            </div>
            <div className="w-full lg:w-1/3 p-3 px-10 lg:pb-16 lg:pt-8 lg:px-12 border-x">
              <p className="text-sm lg:text-base">
                gRPC is a technology for implementing RPC APIs that uses HTTP
                2.0 as its underlying transport protocol. You might expect that
                gRPC and HTTP would be mutually exclusive, since they are based
                on opposite conceptual models. gRPC is based on the Remote
                Procedure Call (RPC) model, in which the addressable entities
                are procedures, and the data is hidden behind the procedures.
                HTTP works the inverse way. In HTTP, the addressable entities
                are “data entities” (called “resources” in the HTTP
                specifications), and the behaviors are hidden behind the
                data—the behavior of the system results from creating,
                modifying, and deleting resources.
              </p>
            </div>
            <div className="w-full lg:w-1/5 p-4 lg:p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SupportedAPIs;
