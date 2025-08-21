import React from "react";
import {Link} from 'react-router-dom'
import ComboBox from "../../components/layout/combobox";
import { RadioGroup } from "@headlessui/react";

class Input extends React.Component {
  render() {
    const name = this.props.name;
    const value = this.props.value;
    const id = this.props.id;
    const options = this.props.options;
    return (
      <tr id={id}>
        <td className="w-1/3">
          <input
            name="__name__"
            className="w-full input"
            placeholder="name"
            defaultValue=""
          />
        </td>
        <td className="w-2/3">
          <ComboBox
            name={name + "_" + id + "_value"}
            value={value}
            options={options}
          />
        </td>
        <td className="text-red-500 text-right text-[10px] md:text-xs">
          <button name="__name__" id={id} className="pl-1">
            remove
          </button>
        </td>
      </tr>
    );
  }
}

function GetStarted(props) {
  return (
    <>
      {props.helmet}
      {/* Main */}
      <main>
        {/* Container */}
        <div className="px-9 sm:px-16 md:px-24 lg:px-36 mt-32">
          <h1 className="text-lg md:text-3xl mb-3">
            Getting Started With Clix
          </h1>
          <p className="mb-12">
            Follow these steps to start creating your web API projects with
            Clix. To get started first you need to{" "}
            <Link to="/register" className="text-[#00bfff]">
              create an account
            </Link>
            . Then, you can sign in to explore the Dashboard.
          </p>
          <section id="demo" className="mb-20 md:mb-36 w-full">
            <div className="w-full">
              {/* 1/3 */}
              <div className="rounded-bl-[40px] md:rounded-bl-[60px]">
                <div className="w-full border-l px-4 pt-6 pb-2 flex justify-between items-center">
                  <div className=" flex items-center">
                    <span
                      className="flex items-center justify-center bg-white rounded-full text-black text-center font-thin text-lg md:text-2xl md:w-10 w-8 md:h-10 h-8"
                      style={{
                        boxShadow: "inset 0px 2px 5px 0 rgb(0 0 0 / 0.1)",
                      }}
                    >
                      1
                    </span>
                    <p className="ml-3 font-normal text-base md:text-2xl">
                      New Project
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block h-4 md:h-5 w-4 md:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="w-full rounded-bl-[40px] md:rounded-bl-[60px] pb-6">
                  <div className="border-l pb-4 px-4">
                    <p className="py-4 text-[#333] text-xs md:text-base">
                      Our simple and easy to use platform removes messy project
                      structures from happening. Clix let's you start a web API
                      project with the right configuration options in a speedy
                      manner. You can freely switch between different projects
                      while everything keeps its cool.
                    </p>
                    <small className="text-[#FF7B00] bg-[#FF7B00] bg-opacity-5 border-[#FF7B00] border-2 px-6 py-2 my-2 block w-fit rounded-full drop-shadow-sm text-xs md:text-base">
                      We are starting with Django and rapidly expanding into the
                      REST of the frameworks.
                    </small>
                  </div>
                  <div className="flex flex-wrap justify-start items-center border-l rounded-bl-[40px] md:rounded-bl-[60px] ml-4 md:ml-9 pl-2 md:pl-4 pt-2">
                    <div className="p-0 md:px-4 md:pb-4 w-1/2">
                      <p className="mb-3 text-xs sm:text-sm">Framework</p>
                      <RadioGroup name="framework">
                        <div className="flex flex-wrap">
                          {[
                            "Django",
                            "Express.js",
                            "Laravel",
                            "Flask",
                            "Ruby on Rails",
                            "Angular",
                          ].map((el) => (
                            <RadioGroup.Option
                              value={el}
                              className={({ active, checked }) =>
                                `${
                                  el === "Django"
                                    ? "bg-[#00BFFF] text-white"
                                    : "bg-white"
                                }
                              relative mb-3 md:mb-4 mx-1 border cursor-pointer rounded-full px-4 md:px-5 py-1 shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`text-[10px] md:text-xs ${
                                        checked ? "text-white" : ""
                                      }`}
                                    >
                                      {el}
                                    </RadioGroup.Label>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="p-0 md:px-4 md:pb-4 w-fit">
                      <p className="mb-3 text-xs sm:text-sm">Version</p>
                      <RadioGroup name="version">
                        <div className="flex flex-wrap">
                          {["latest"].map((el) => (
                            <RadioGroup.Option
                              value={el}
                              className={({ active, checked }) =>
                                `${
                                  el === "latest"
                                    ? "bg-[#00BFFF] text-white"
                                    : "bg-white"
                                }
                              relative mb-4 mx-1 border cursor-pointer rounded-full px-5 py-1 shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`text-[10px] sm:text-xs ${
                                        checked ? "text-white" : ""
                                      }`}
                                    >
                                      {el}
                                    </RadioGroup.Label>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="p-0 md:px-4 md:pb-4 w-fit">
                      <p className="mb-3 text-xs sm:text-sm">Include</p>
                      <RadioGroup name="version">
                        <div className="flex flex-wrap">
                          {["git", "local env"].map((el) => (
                            <RadioGroup.Option
                              value={el}
                              className={({ active, checked }) =>
                                `${
                                  el === "latest"
                                    ? "bg-[#00BFFF] text-white"
                                    : "bg-white"
                                }
                              relative mb-4 mx-1 border cursor-pointer rounded-full px-5 py-1 shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`text-[10px] sm:text-xs ${
                                        checked ? "text-white" : ""
                                      }`}
                                    >
                                      {el}
                                    </RadioGroup.Label>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2/3 */}
              <div className="rounded-bl-[40px] md:rounded-bl-[60px] mb-4">
                <div className="w-full border-l px-4 pt-4 md:pt-9 pb-2 flex justify-between items-center">
                  <div className=" flex items-center flex-wrap">
                    <span
                      className="flex items-center justify-center bg-[white] rounded-full text-black text-center font-thin text-lg md:text-2xl md:w-10 w-8 md:h-10 h-8 mb-1 md:mb-0"
                      style={{
                        boxShadow: "inset 0px 2px 5px 0 rgb(0 0 0 / 0.1)",
                      }}
                    >
                      2
                    </span>
                    <p className="ml-3 font-normal text-[14px] md:text-2xl">
                      Define endpoints, Data models, Database schemas, and
                      Project settings
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block md:h-5 h-4 md:w-5 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="border-l pb-4 px-4">
                  <p className="py-4 text-[#333] text-xs md:text-base">
                    Experience true dynamic programing with our well designed
                    web application. Our agile approach to programming ensures
                    that the features you enjoy stay as flexible as possible.
                    Clix let's you manage your API endpoints, database tables,
                    and project settings.
                  </p>
                  <small className="text-[#3bc163] bg-[#4BFB80] bg-opacity-5 border-[#4BFB80] border-2 px-6 py-2 my-2 block w-fit rounded-full drop-shadow-sm text-xs md:text-base">
                    Agility and mobility. That's all.
                  </small>
                </div>
                <div className="border-l rounded-bl-[40px] md:rounded-bl-[60px]  ml-4 md:ml-9 pl-2 md:pl-4 pt-2">
                  <div className="p-0 md:px-4 md:pb-4">
                    <div className="flex flex-row flex-wrap">
                      <div className="mb-4 md:mb-6 w-full flex flex-col">
                        <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                          <p className="text-xs sm:text-sm">Request Method</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 md:h-5 w-4 md:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="gray"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <RadioGroup name="requestMethod">
                          <div className="flex flex-wrap">
                            {[
                              "GET",
                              "POST",
                              "PUT",
                              "DELETE",
                              "COPY",
                              "HEAD",
                              "OPTIONS",
                            ].map((el) => (
                              <RadioGroup.Option
                                value={el}
                                className={({ active, checked }) =>
                                  ` ${
                                    el === "PUT"
                                      ? "bg-[#00BFFF] text-white"
                                      : "bg-white"
                                  }
                            relative mb-3 md:mb-4 mx-1 border cursor-pointer rounded-full px-4 md:px-5 py-1 shadow-md focus:outline-none`
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex w-full items-center justify-between">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`text-[10px] md:text-xs ${
                                          checked ? "text-white" : ""
                                        }`}
                                      >
                                        {el}
                                      </RadioGroup.Label>
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="w-full flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                          <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                            <p className="text-xs md:text-sm">Request Host</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 md:h-5 w-4 md:w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="gray"
                              strokeWidth={1.8}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <RadioGroup name="requestHost">
                            <div className="flex flex-wrap">
                              {["localhost", "http", "https"].map((el) => (
                                <RadioGroup.Option
                                  value={el}
                                  className={({ active, checked }) =>
                                    `${
                                      el === "https"
                                        ? "bg-[#00BFFF] text-white"
                                        : "bg-white"
                                    }
                                  relative mb-4 mx-1 border cursor-pointer rounded-full px-5 py-1 shadow-md focus:outline-none`
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <div className="flex w-full items-center justify-between">
                                        <RadioGroup.Label
                                          as="p"
                                          className={`text-xs ${
                                            checked ? "text-white" : ""
                                          }`}
                                        >
                                          {el}
                                        </RadioGroup.Label>
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="md:w-1/2 mb-10 md:mb-0">
                          <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                            <p className="text-xs md:text-sm">Request URI</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 md:h-5 w-4 md:w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="gray"
                              strokeWidth={1.8}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <input
                            className="w-full input"
                            name="requestURI"
                            value="user/account"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l rounded-bl-[40px] md:rounded-bl-[60px] flex flex-col md:flex-row ml-4 md:ml-9 pl-2 md:pl-4 pt-2">
                  <div className="p-0 md:px-4 md:pb-4 md:w-1/2 md:mr-4 mb-2 md:mb-0">
                    <div className="flex items-top justify-between mb-3 md:mb-6">
                      <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                        <p className="text-xs md:text-sm">Authorization</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 md:h-5 w-4 md:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="gray"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <button
                        name="authRequired"
                        className={
                          "mr-[-16px] px-4 h-6 rounded-full text-[10px] md:text-xs cursor-pointer select-none " +
                          (true
                            ? "bg-[#FFEDEB] text-[#FF4733]"
                            : "text-red-300")
                        }
                      >
                        Required
                      </button>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                        <p className="text-xs md:text-sm">Headers</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 md:h-5 w-4 md:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="gray"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <table className="table-fixed text-left border-separate mb-3">
                        <tbody className="text-sm">
                          <Input
                            key={0}
                            id={0}
                            name={"header"}
                            options={[
                              "required",
                              "email",
                              "password",
                              "ID",
                              "int",
                              "string",
                              "{object}",
                              "[array]",
                            ]}
                          />
                        </tbody>
                      </table>
                      <button
                        name="__name__"
                        className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                      ></button>
                    </div>
                  </div>

                  <div className="p-0 md:px-4 md:pb-4 md:w-1/2 md:ml-4 mb-2 md:mb-0">
                    <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                      <p className="text-xs md:text-sm">Body</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 md:h-5 w-4 md:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <RadioGroup name="payloadType">
                        <div className="flex flex-wrap">
                          {["json", "form-data"].map((el) => (
                            <RadioGroup.Option
                              value={el}
                              className={({ active, checked }) =>
                                `${
                                  el === "json"
                                    ? "bg-[#00BFFF] text-white"
                                    : "bg-white"
                                }
                            relative mb-3 md:mb-4 mx-1 border cursor-pointer rounded-full px-4 md:px-5 py-1 shadow-md focus:outline-none`
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex w-full items-center justify-between">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`text-[10px] md:text-xs  ${
                                        el === "json"
                                          ? "text-white"
                                          : "text-gray-900"
                                      }`}
                                    >
                                      {el}
                                    </RadioGroup.Label>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                      <table className="table-fixed text-left border-separate mb-3">
                        <tbody className="text-sm">
                          <Input
                            key={0}
                            id={0}
                            name={"header"}
                            options={[
                              "required",
                              "email",
                              "password",
                              "ID",
                              "int",
                              "string",
                              "{object}",
                              "[array]",
                            ]}
                          />
                        </tbody>
                      </table>
                      <button
                        name="payload"
                        className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3/3 */}
              <div className="rounded-bl-[40px] md:rounded-bl-[60px]">
                <div className="border-l w-full px-4 pt-4 md:pt-9 pb-4 flex justify-between items-center">
                  <div className="flex flex-wrap items-center">
                    <span
                      className="flex items-center justify-center bg-[#fff] rounded-full text-[black] text-center font-thin text-lg md:text-2xl md:w-10 w-8 md:h-10 h-8 mb-1 md:mb-0"
                      style={{
                        boxShadow: "inset 0px 2px 5px 0 rgb(0 0 0 / 0.1)",
                      }}
                    >
                      3
                    </span>
                    <p className="ml-3 font-normal text-base md:text-2xl">
                      Generate project locally
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block md:h-5 h-4 md:w-5 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="border-l flex flex-wrap flex-col md:flex-row items-center justify-between pb-4">
                  <div className="w-full md:w-1/2 pb-4 px-4">
                    <small className="text-[#00bfff] bg-[#00bfff] border-[#00bfff] border-2 bg-opacity-5 px-6 py-2 my-2 block w-fit rounded-full drop-shadow-sm text-xs md:text-base">
                      Done! Start testing your API project.
                    </small>
                    <p className="py-4 text-[#333] text-xs md:text-base">
                      You can use the following commands to generate your API
                      project. Although this process is not exactly perfect, you
                      can benefit from the automation process and the amount of
                      time it saves you.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "pip install --upgrade clixdev"
                        )
                      }
                      className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                    >
                      <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                      <code className="flex-1 text-xs md:text-sm">
                        pip install <span className="text-[#00bfff]">clixdev</span>
                      </code>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("clixdev --help")
                      }
                      className="code w-full mx-4 mb-4 md:mx-auto md:w-[35vw] flex-shrink-0"
                    >
                      <div className="bg-[#4BFB80] rounded-full shadow w-2 h-2"></div>
                      <code className="flex-1 text-xs md:text-sm">
                        clixdev --help
                      </code>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:h-6 h-4 md:w-6 w-4 flex-shrink-0 mr-2 md:mr-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 4/3 */}
                {/* <div className="hidden border-l rounded-bl-[40px] md:rounded-bl-[60px] ml-9 pl-4 mb-4 pt-2 pb-4">
                  <div className="w-full px-4 pb-4 flex justify-between items-center">
                    <div className=" flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="ml-1">Deploy</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="px-4">
                      <p className="px-4">
                        Exercitation et ipsum et deserunt labore. Anim qui id
                        laboris nostrud fugiat duis sunt quis labore consequat.
                      </p>
                    </div>
                    <div className="flex-shrink-0 flex text-center mx-auto w-[35vw] py-4 rounded-lg border-2 border-[#3db8ff] bg-[#c0f2ff]">
                      <p className="flex-1">___ deploy [aws, azure, ftp]</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 flex-shrink-0 mr-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default GetStarted;
