import React from "react";
import { Link } from "react-router-dom";

function LocalDev(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            Local Development
          </div>
          <div className="w-full h-2/5 flex justify-center items-center gap-x-8">
            <Link
              to="/translator/cli"
              className="text-[#00bfff] hover:underline text-lg"
            >
              CLI
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/syncing"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Syncing
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/local-development"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Local Development
            </Link>
            <span className="block w-1 h-1 rounded-full bg-[#00bfff]"></span>
            <Link
              to="/translator/languages"
              className="text-[#00bfff] hover:underline text-lg"
            >
              Languages
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pt-16">
              <h2 className="text-right font-extralight text-2xl">
                New Projects
              </h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                Your projects are generated through the{" "}
                <Link to="/translator/cli" className="text-[#00BFFF]">
                  CLI
                </Link>{" "}
                with direct accordance to the{" "}
                <Link to="/translator/languages" className="text-[#00BFFF]">
                  Language
                </Link>{" "}
                you have selected originally. Consequently the file tree of each
                project will look similar to the language's original file tree.
                Clix.dev does not imply any different or newer architecture atop
                the framework.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Frameworks
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                Clix.dev divides the frameworks by programing language; hence
                the categorization and the labeling of{" "}
                <Link to="/translator/languages" className="text-[#00BFFF]">
                  languages
                </Link>
                . So any Clix.dev-generated project will still be compatible
                with the framework's original commands, features, etc.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                After Generation
              </h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p>
                In terms of expanding atop Clix.dev, we heavily encourage that.
                Although we strive to produce a one-stop-shop for building Web
                APIs, there is always room for improvement. So feel free to
                build on top of the CLI-translated code and get your hands
                dirty.
              </p>
            </div>
            <div className="w-1/5 p-8"></div>
          </div>
          <hr className="hidden my-0 mx-56" />
          <div className="hidden w-full flx justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">More</h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p></p>
            </div>
            <div className="w-1/5 p-8">
              <Link to="/newsletter" className="text-[#00bfff] hover:underline">
                Join Newsletter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LocalDev;
