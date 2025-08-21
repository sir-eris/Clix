import React, {useState} from 'react';


export default function PublicFooter(props) {
    let [cookieBanner, setCookieBanner] = useState(
      localStorage.getItem("cookieBanner") !== "true"
    );

    const closeCookieBanner = () => {
      if (!localStorage.getItem("cookieBanner")) {
        localStorage.setItem("cookieBanner", "true");
      }
      setCookieBanner(false);
    };
    
    return (
      <footer>
        <hr />
        <div className="w-5/6 mx-auto md:px-6 py-9 md:py-20 grid grid-cols-3 grid-rows-2 md:grid-cols-5 md:grid-rows-1 gap-y-4 md:gap-y-0 md:gap-x-6 text-[10px] md:text-sm">
          {/* LOGO */}
          <div className="mx-auto">
            <a href="/" className="block w-fit mb-12 md:mb-32">
              <img
                src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
                width={"30px"}
                height={"auto"}
                className="w-6 md:w-8"
                alt="Clix.dev official logo"
              />
              <p className="text-[#00bfff] font-bold text-base md:text-lg">
                clix
              </p>
            </a>
            <div className="text-xs font-thin text-[gray]">
              <small>© Clix.dev</small>
              <br />
              <small>All Rights Reserved.</small>
              <div className="flex gap-x-2 mt-2">
                <a
                  href="https://twitter.com/clix_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit block transition-colors fill-gray-400 hover:fill-gray-700"
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="h-3 w-3 md:h-4 md:w-4"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/clix.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit block transition-colors fill-gray-400 hover:fill-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 md:h-4 md:w-4"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="mx-auto">
            <a
              href="/tools"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Tools
            </a>
            <a
              href="/tools/endpoint"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Endpoint
            </a>
            <a
              href="/tools/data-model"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Data Model
            </a>
            <a
              href="/tools/the-logic"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              The Logic
            </a>
            <a
              href="/tools/configuration"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Configuration
            </a>
          </div>

          {/* TRANSLATOR */}
          <div className="mx-auto">
            <a
              href="/translator"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Translator
            </a>
            <a
              href="/translator/cli"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              CLI
            </a>
            <a
              href="/translator/syncing"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Syncing
            </a>
            <a
              href="/translator/languages"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Languages
            </a>
            <a
              href="/translator/local-development"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Local Development
            </a>
          </div>

          {/* RESOURCES */}
          <div className="mx-auto">
            {/* <a
              href="/pricing"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Pricing
            </a> */}
            <a
              href="/teams"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Teams
            </a>
            <a
              href="/about"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              About
            </a>
            <a
              href="/road-map"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Road map
            </a>
            <a
              href="/legal"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Privacy
            </a>
          </div>

          {/* CTA & CONTACT */}
          <div className="mx-auto">
            {!props.isAuthenticated ? (
              <>
                <a
                  href="/register"
                  className="block mb-1 hover:underline text-[#00bfff]"
                >
                  Try for Free
                </a>
                <a
                  href="/login"
                  className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
                >
                  Sign In
                </a>
              </>
            ) : (
              <a
                href="/endpoints"
                className="block mb-1 hover:underline text-[#00bfff]"
              >
                Dashboard
              </a>
            )}
            <hr className="my-2" />
            <a
              href="/faq"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              FAQ
            </a>
            <a
              href="/contact"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Contact
            </a>
            <a
              href="/newsletter"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Join Newsletter
            </a>
            <a
              href="/get-started"
              className="block w-fit mb-1 hover:text-[#00bfff] transition-all"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Disclaimer Banner */}
        {cookieBanner ? (
          <div className="fixed w-full h-16 mx-auto bottom-16">
            <div className="flex w-5/6 md:w-1/2 mx-auto justify-between items-center h-full px-8 bg-white rounded-full shadow-lg border">
              <span className="text-[#36474d] text-[10px] md:text-sm">
                We use essential cookies to improve performance and enhance user
                experience.
              </span>
              <button
                name="__name__"
                onClick={closeCookieBanner}
                className="w-20 py-2 bg-[#00BFFF] text-center text-white rounded-full text-xs font-bold select-none cursor-pointer hover:shadow-md"
              >
                Okay
              </button>
            </div>
          </div>
        ) : null}
      </footer>
    );
}