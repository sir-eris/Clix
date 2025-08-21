import React from "react";
import { useLocation } from "react-router-dom";
import store from "../app/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../app/actions/Auth";

function NavBar(props) {
  let location = useLocation();

  function logout(e) {
    props.logout();
  }

  const Title = (reset) => {
    switch (location.pathname) {
      case "/endpoints":
        return (
          <>
            <div className="flex justify-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Endpoints</p>
                <div className="flex">
                  {/* {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))} */}
                  <p className="mr-4 py-1 rounded-full text-xs text-[gray] cursor-default hover:underline">
                    V 0.1
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((app) => (
                          <Listbox.Option
                            key={app.id}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={app.name}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {app.name}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/endpoints/new":
        return (
          <>
            <div className="flex flex-col justify-center">
              <p className="text-xl mr-4 mb-2">New Endpoint</p>
              <div className="flex">
                {props.navBarOptions &&
                  Object.values(props.navBarOptions).map((opt) => (
                    <button
                      onClick={opt.callback}
                      className="mr-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {opt.title}
                    </button>
                  ))}
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoAppFile} onChange={setDjangoAppFile}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current File:</span>
                      <span className="block truncate">
                        {location.pathname === "/endpoints/new"
                          ? "views.py"
                          : djangoAppFile}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {files.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoAppFile }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoAppFile
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoAppFile ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/endpoints/edit":
        return (
          <>
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl mr-4 mb-2">Edit Endpoint</p>
              <div className="flex">
                {props.navBarOptions &&
                  Object.values(props.navBarOptions).map((opt) => (
                    <button
                      onClick={opt.callback}
                      className="mr-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {opt.title}
                    </button>
                  ))}
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoAppFile} onChange={setDjangoAppFile}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current File:</span>
                      <span className="block truncate">
                        {location.pathname === "/endpoints/new"
                          ? "views.py"
                          : djangoAppFile}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {files.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoAppFile }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoAppFile
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoAppFile ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/models":
        return (
          <>
            <div className="flex justify-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Models</p>
                <div className="flex">
                  {/* {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))} */}
                  <p className="mr-4 py-1 rounded-full text-xs text-[gray] cursor-default hover:underline">
                    V 0.1
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/models/new":
        return (
          <>
            <div className="flex items-center justify-center">
              <p className="text-xl mr-4 mb-2">New Model</p>
              <div className="flex">
                {/* {props.navBarOptions &&
                  Object.values(props.navBarOptions).map((opt) => (
                    <button
                      onClick={opt.callback}
                      className="mr-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {opt.title}
                    </button>
                  ))} */}
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoAppFile} onChange={setDjangoAppFile}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current File:</span>
                      <span className="block truncate">
                        {location.pathname === "/models/new"
                          ? "models.py"
                          : djangoAppFile}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {files.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoAppFile }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoAppFile
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoAppFile ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/models/edit":
        return (
          <>
            <div className="flex items-center justify-center">
              <p className="text-xl mr-4 mb-2">Edit Data Model</p>
              {/* <div className="flex">
                <button className="mr-4 py-1 rounded-full text-xs hover:underline">
                  Save draft
                </button>
                <button className="mr-4 py-1 rounded-full text-xs hover:underline">
                  Reset form
                </button>
              </div> */}
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoAppFile} onChange={setDjangoAppFile}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current File:</span>
                      <span className="block truncate">
                        {location.pathname === "/models/new"
                          ? "models.py"
                          : djangoAppFile}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {files.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoAppFile }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoAppFile
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoAppFile ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((item, itemIdx) => (
                          <Listbox.Option
                            key={itemIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={item}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {item}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/functions":
        return (
          <>
            <div className="flex justify-center items-center">
              <p className="text-xl mr-4 mb-2">
                Functions
                <sup>
                  <span className="ml-1 rounded-full font-medium text-[8px] text-white bg-[#00bfff] px-1 py-[2px]">
                    BETA
                  </span>
                </sup>
              </p>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((app) => (
                          <Listbox.Option
                            key={app.id}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={app.name}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {app.name}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/settings":
        return (
          <>
            <div className="flex justify-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Project Settings</p>
                <div className="flex">
                  {/* {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))} */}
                  <p className="mr-4 py-1 rounded-full text-xs text-[gray] cursor-default hover:underline">
                    V 0.1
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-x-3">
              <div className="w-48">
                <Listbox value={djangoApp} onChange={setDjangoApp}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md">
                      <span className="text-[9px]">Current App:</span>
                      <span className="block truncate">{djangoApp}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg">
                        {apps.map((app) => (
                          <Listbox.Option
                            key={app.id}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 px-4 ${
                                active ? "bg-[#85E0FF]" : "text-gray-900"
                              }`
                            }
                            value={app.name}
                          >
                            {({ djangoApp }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    djangoApp ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {app.name}
                                </span>
                                {djangoApp ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon
                                      name="__name__"
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div> */}
          </>
        );
      case "/projects":
        return (
          <>
            <p className="text-xl mr-4 mb-2">Projects</p>
          </>
        );
      case "/projects/new":
        return <p className="text-xl mr-4 mb-2">New Project</p>;
      case "/integrations":
        return <p className="text-xl mr-4 mb-2">Third-Party Integrations</p>;
      case "/logic":
        return (
          <>
            <div className="flex justify-between w-full items-center">
              <p className="w-1/3 text-xl mb-2">Logic</p>
              <div className="w-1/3 text-center flex flex-col items-center">
                <p className="text-[#FF7B00] text-sm hover:underline">
                  Note: This Tool is in TestFlight and is not fully functional.
                </p>
                <Link to="/tools/the-logic" className="text-xs text-[#00bfff] hover:underline">Read more about it here.</Link>
              </div>
              <span className="block w-1/3"></span>
              {/* <div className="flex">
                  {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))}
                  <p className="mr-4 py-1 rounded-full text-xs text-[gray] cursor-default hover:underline">
                    V 0.1
                  </p>
                </div> */}
            </div>
          </>
        );
      case "/account":
        return (
          <>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Account</p>
                <div className="flex">
                  {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))}
                </div>
              </div>
              <button
                onClick={logout}
                className="px-4 py-1 rounded-full text-sm text-[#FF4733] hover:bg-[#FFEDEB]"
              >
                Log Out
              </button>
            </div>
          </>
        );
      case "/account/profile":
        return (
          <>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">User Profile</p>
                <div className="flex">
                  {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))}
                </div>
              </div>
              <button
                onClick={logout}
                className="px-4 py-1 rounded-full text-sm text-[#FF4733] hover:bg-[#FFEDEB]"
              >
                Sign Out
              </button>
            </div>
          </>
        );

      case "/account/environment":
        return (
          <>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Environment Settings</p>
                <div className="flex">
                  {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))}
                </div>
              </div>
              <button
                onClick={logout}
                className="px-4 py-1 rounded-full text-sm text-[#FF4733] hover:bg-[#FFEDEB]"
              >
                Sign Out
              </button>
            </div>
          </>
        );
      case "/account/settings":
        return (
          <>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <p className="text-xl mr-4 mb-2">Accessibility Settings</p>
                <div className="flex">
                  {props.navBarOptions &&
                    Object.values(props.navBarOptions).map((opt) => (
                      <button
                        onClick={opt.callback}
                        className="mr-4 py-1 rounded-full text-xs hover:underline"
                      >
                        {opt.title}
                      </button>
                    ))}
                </div>
              </div>
              <button
                onClick={logout}
                className="px-4 py-1 rounded-full text-sm text-[#FF4733] hover:bg-[#FFEDEB]"
              >
                Sign Out
              </button>
            </div>
          </>
        );

      default:
        return <p className="text-xl mr-4 mb-2">Where are you trying to go?</p>;
    }
  };

  return (
    <div className="bg-blur sticky flex justify-between pt-4 pb-2 px-5 top-0 border-b z-20">
       {Title()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: store.getState().authReducer.payload,
  navBarOptions: store.getState().notificationReducer.navBarOptions,
});

export default connect(mapStateToProps, {
  logout,
})(NavBar);
