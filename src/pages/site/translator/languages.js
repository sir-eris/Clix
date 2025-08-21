import React from "react";
import { Link } from "react-router-dom";

function Languages(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            Languages
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
                Python - Django
              </h2>
            </div>
            <div className="w-1/3 pb-8 pt-16 px-12 border-x">
              <p>
                Django's primary goal is to ease the creation of complex,
                database-driven websites. The framework emphasizes reusability
                and "pluggability" of components, less code, low coupling, rapid
                development, and the principle of don't repeat yourself. Python
                is used throughout, even for settings, files, and data models.
                Django also provides an optional administrative create, read,
                update and delete interface that is generated dynamically
                through introspection and configured via admin models.
              </p>
            </div>
            <div className="w-1/5 p-8 pt-16">
              <span className="text-[#4BFB80] font-medium">Supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                JavaScript - ExpressJS
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                Express.js, or simply Express, is a back end web application
                framework for building RESTful APIs with Node.js, released as
                free and open-source software under the MIT License. It is
                designed for building web applications and APIs. It has been
                called the de facto standard server framework for Node.js. The
                original author, TJ Holowaychuk, described it as a
                Sinatra-inspired server, meaning that it is relatively minimal
                with many features available as plugins. Express is the back-end
                component of popular development stacks like the MEAN, MERN or
                MEVN stack, together with the MongoDB database software and a
                JavaScript front-end framework or library.
              </p>
            </div>
            <div className="w-1/5 p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                PHP - Laravel
              </h2>
            </div>
            <div className="w-1/3 py-8 px-12 border-x">
              <p>
                Laravel is a free and open-source PHP web framework, created by
                Taylor Otwell and intended for the development of web
                applications following the model-view-controller (MVC)
                architectural pattern and based on Symfony. Some of the features
                of Laravel are a modular packaging system with a dedicated
                dependency manager, different ways for accessing relational
                databases, utilities that aid in application deployment and
                maintenance, and its orientation toward syntactic sugar. The
                source code of Laravel is hosted on GitHub and licensed under
                the terms of MIT License.
              </p>
            </div>
            <div className="w-1/5 p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
          <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8">
              <h2 className="text-right font-extralight text-2xl">
                Ruby on Rails
              </h2>
            </div>
            <div className="w-1/3 pt-8 pb-16 px-12 border-x">
              <p>
                Ruby on Rails (simplify as Rails) is a server-side web
                application framework written in Ruby under the MIT License.
                Rails is a model-view-controller (MVC) framework, providing
                default structures for a database, a web service, and web pages.
                It encourages and facilitates the use of web standards such as
                JSON or XML for data transfer and HTML, CSS and JavaScript for
                user interfacing. In addition to MVC, Rails emphasizes the use
                of other well-known software engineering patterns and paradigms,
                including convention over configuration (CoC), don't repeat
                yourself (DRY), and the active record pattern.
              </p>
            </div>
            <div className="w-1/5 p-8">
              <span className="text-[gray] font-light">Not yet supported</span>
            </div>
          </div>
          {/* <hr className="my-0 mx-56" />
          <div className="w-full flex justify-center">
            <div className="w-1/5 p-8 pb-16">
              <h2 className="text-right font-extralight text-2xl">More</h2>
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
            <div className="w-1/5 p-8 pb-16">
              <Link to="/newsletter" className="text-[#00bfff] hover:underline">Join Newsletter</Link>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Languages;
