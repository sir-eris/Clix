import React, { useCallback, useState, Fragment } from "react";
import { Handle, Position } from "reactflow";
import { RadioGroup, Listbox, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";

export function Endpoint(props) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  // console.log(props)

  const body = props?.data?.body || false;
  const bodyPayload = props?.data?.body?.payload || false;
  const request = props?.data?.request || false;
  const params = props?.data?.params ? props?.data?.params.split(",") : false;
  const headers = props?.data?.headers
    ? props?.data?.headers.split(",")
    : false;

  return (
    <div className={`relative min-h-96 w-80 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147] mb-3 border-b-2">
        <p className="pl-4 pr-9">Endpoint</p>
        <Handle
          type="source"
          position={Position.Right}
          id="q-1"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] mr-3"
        />
      </div>

      {/* content */}
      <div className="px-4">
        {/* uri */}
        {request ? (
          <div className="flex items-center justify-between mb-4">
            <p className="text-base tracking-wide">{request.uri}</p>
            <p className="border shadow-sm text-xs rounded-full bg-[#00BFFF] text-[#FFF] py-1 px-3 hover:underline">
              {request.method}
            </p>
          </div>
        ) : null}

        {/* params */}
        {params ? (
          <div className="mb-4">
            <details className="text-xs" open>
              <summary className="mb-2">Params</summary>
              {params?.map((param) => (
                <div className="mb-2 px-4 relative">
                  <div className="flex w-full gap-x-2 items-center">
                    <p>{param}</p>
                    <p className="text-[gray] font-light text-xs">
                      int | optional
                    </p>
                  </div>
                  <Handle
                    type="source"
                    position={Position.Right}
                    id="f-10"
                    className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
                  />
                </div>
              ))}
            </details>
          </div>
        ) : (
          "No Params"
        )}

        {/* headers */}
        {headers ? (
          <div className="mb-4">
            <details className="text-xs">
              <summary className="mb-2">Headers</summary>
              {headers?.map((header) => (
                <div className="mb-2 pl-3 flex items-center relative">
                  <p>{header}</p>
                  <Handle
                    type="source"
                    position={Position.Right}
                    id="h-0"
                    className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
                  />
                </div>
              ))}
            </details>
          </div>
        ) : (
          "No Headers"
        )}

        {/* body */}
        {body && bodyPayload ? (
          <div className="mb-4">
            <details className="text-xs" open>
              <summary className="mb-2">Body</summary>
              {Object.values(body.payload)?.map((load) => (
                <div className="mb-2 px-4 relative">
                  <div className="flex w-full gap-x-2 items-center">
                    <p>{load[0]}</p>
                    <p className="text-[gray] font-light text-xs">{load[1]}</p>
                  </div>
                  <Handle
                    type="source"
                    position={Position.Right}
                    id="f-10"
                    className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
                  />
                </div>
              ))}
            </details>
          </div>
        ) : (
          "No Body"
        )}
      </div>
    </div>
  );
}

export function DataModel(props) {
  const [selectedModel, setSelectedModel] = useState();
  // const [selectedClause, setSelectedClause] = useState();

  const models = [
    { id: 1, name: "User", unavailable: false, records: 107 },
    { id: 2, name: "User Info", unavailable: false, records: 107 },
    { id: 3, name: "Orders", unavailable: false, records: 49 },
    { id: 4, name: "Messages", unavailable: true, records: 23 },
    { id: 5, name: "Migrations", unavailable: false, records: 13 },
  ];

  const clauses = [
    {
      title: "where",
      type: "where",
      render: (
        // <Listbox value={selectedClause} onChange={setSelectedClause}>
        //   <div className="relative">
        //     <Listbox.Button className="relative w-full cursor-default input py-2 shadow ">
        //       <span className="block truncate">
        //         {selectedClause?.name ? selectedClause.name : "select clause"}
        //       </span>
        //       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //           strokeWidth={2}
        //           stroke="gray"
        //           className="w-4 h-4"
        //         >
        //           <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        //           />
        //         </svg>
        //       </span>
        //     </Listbox.Button>
        //     <Transition
        //       as={Fragment}
        //       leave="transition ease-in duration-100"
        //       leaveFrom="opacity-100"
        //       leaveTo="opacity-0"
        //     >
        //       <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        //         {clauses.map((clause, clauseIdx) => (
        //           <Listbox.Option
        //             key={clauseIdx}
        //             className={({ active }) =>
        //               `relative cursor-default select-none py-2 pl-10 pr-4 ${
        //                 active ? "bg-[#00BFFF] text-[#fff]" : "text-gray-900"
        //               }`
        //             }
        //             value={clause}
        //           >
        //             {({ selected }) => (
        //               <>
        //                 <span
        //                   className={`block truncate ${
        //                     selected ? "font-medium" : "font-normal"
        //                   }`}
        //                 >
        //                   {clause.name}
        //                 </span>
        //                 {selected ? (
        //                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
        //                     <svg
        //                       xmlns="http://www.w3.org/2000/svg"
        //                       fill="none"
        //                       viewBox="0 0 24 24"
        //                       strokeWidth={1.5}
        //                       stroke="black"
        //                       className="w-6 h-6"
        //                     >
        //                       <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         d="M4.5 12.75l6 6 9-13.5"
        //                       />
        //                     </svg>
        //                   </span>
        //                 ) : null}
        //               </>
        //             )}
        //           </Listbox.Option>
        //         ))}
        //       </Listbox.Options>
        //     </Transition>
        //   </div>
        // </Listbox>
        <p>where</p>
      ),
    },
    {
      title: "order by",
      type: "order by",
      render: <p>order by</p>,
    },
    {
      title: "first x",
      type: "firstX",
      render: <p>first x</p>,
    },
    {
      title: "last x",
      type: "lastX",
      render: <p>last x</p>,
    },
  ];

  return (
    <div className={`relative min-h-96 w-[450px] bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147] mb-3 border-b-2">
        <Handle
          type="target"
          position={Position.Left}
          id="m-0"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
        />
        <p className="px-9">Data Model</p>
        <Handle
          type="source"
          position={Position.Right}
          id="r-0"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] mr-3"
        />
      </div>

      {/* content */}
      <div className="relative px-3 mb-12">
        {/* models */}
        <div className="relative text-sm mb-5 z-20">
          <Listbox value={selectedModel} onChange={setSelectedModel}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default input py-2 shadow ">
                <span className="block truncate">
                  {selectedModel?.name ? selectedModel.name : "select model"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {models.map((model, modelIdx) => (
                    <Listbox.Option
                      key={modelIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-6 pr-4 ${
                          active ? "bg-[#00BFFF] text-[#fff]" : "text-gray-900"
                        }`
                      }
                      value={model}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {model.name}
                            </span>
                            <span
                              className={`text-xs ${
                                selected || active
                                  ? "text-[#fff]"
                                  : "text-[gray]"
                              }`}
                            >
                              {model.records} records
                            </span>
                          </div>
                          {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* CRUD */}
        <div className="flex relative mb-5">
          <RadioGroup
            name="requestMethod"
            // value={this.state.requestMethod}
            // onChange={this.onInputChange}
          >
            <div className="flex flex-wrap">
              {["CREATE", "RETRIEVE", "UPDATE", "DELETE"].map((el) => (
                <RadioGroup.Option
                  value={el}
                  className={({ active, checked }) =>
                    `relative mx-1 border cursor-pointer rounded-full px-5 py-1 shadow focus:outline-none ${
                      checked ? "bg-[#00BFFF] text-white" : "bg-white"
                    }`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <RadioGroup.Label
                          as="p"
                          className={`text-xs ${checked ? "text-white" : ""}`}
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

        {/* clauses */}
        <div className="relative mb-3">
          <RadioGroup
            name="requestMethod"
            // value={selectedClause}
            // onChange={setSelectedClause}
          >
            <div className="flex flex-wrap gap-x-2 w-full">
              {clauses.map((el, elIdx) => (
                <RadioGroup.Option
                  key={elIdx}
                  value={el.title}
                  className={({ active, checked }) =>
                    `text-sm ${checked ? "" : ""}`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label
                        as="p"
                        className={`block transition-all p-1 ${
                          checked
                            ? "text-[black] font-bold drop-shadow"
                            : "text-[#bbb]"
                        }`}
                      >
                        {el.title}
                      </RadioGroup.Label>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          {/* <div className="flex flex-wrap gap-x-3">
            <p className="text-[10px] mb-1 font-bold drop-shadow">WHERE</p>
            <p className="text-[10px] mb-1 text-[#bbb]">ORDER BY</p>
            <p className="text-[10px] mb-1 text-[#bbb]">FIRST X</p>
            <p className="text-[10px] mb-1 text-[#bbb]">LAST X</p>
          </div> */}
          <div className="flex flex-wrap w-full">
            <div className="w-[90%] grid grid-cols-3 grid-rows-1 gap-x-2 mb-3">
              <input className="input shadow-sm" />
              <input className="input shadow-sm" />
              <input className="input shadow-sm" />
            </div>
            <div className="w-[10%] flex items-center justify-end h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-5 h-5 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <button className="rounded-full w-4 h-4 block ml-auto bg-[#00BFFF] hover:border"></button>
        </div>

        {/* fields */}
        <div className="mb-7 px-2">
          <details className="text-sm" open>
            <summary className="mb-2">Fields</summary>
            <div className="mb-2 px-4 relative">
              <Handle
                type="target"
                position={Position.Left}
                id="f-0"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
              <div className="flex w-full gap-x-2 items-center">
                <p>ID</p>
                <p className="text-[gray] font-light text-xs">
                  uuid | default | unique
                </p>
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id="f-10"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
            </div>
            <div className="mb-2 px-4 relative">
              <Handle
                type="target"
                position={Position.Left}
                id="f-1"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
              <div className="flex w-full gap-x-2 items-center">
                <p>name</p>
                <p className="text-[gray] font-light text-xs">
                  string | null | blank
                </p>
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id="f-20"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
            </div>
            <div className="mb-2 px-4 relative">
              <Handle
                type="target"
                position={Position.Left}
                id="f-3"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
              <div className="flex w-full gap-x-2 items-center">
                <p>email</p>
                <p className="text-[gray] font-light text-xs">
                  email | unique | blank
                </p>
              </div>
              <Handle
                type="source"
                position={Position.Right}
                id="f-30"
                className="block w-3 h-3 rounded-full border-[#00BFFF] border bg-[white]"
              />
            </div>
          </details>
        </div>
      </div>

      {/* side-effects */}
      <div className="absolute bottom-0 w-full">
        <small className="text-[#FF7B00] text-[8px] font-medium block text-center mb-[9px]">
          on Fail
        </small>
        <Handle
          type="source"
          position={Position.Bottom}
          id="fail-0"
          className="block w-8 h-[6px] rounded-full bg-[#FF7B00] bottom-1"
        />
      </div>
    </div>
  );
}


export function Response(props) {
  const [statusCode, setStatusCode] = useState();
  const statusCodes = [
    { id: 1, name: "OK", code: "200" },
    { id: 2, name: "OK", code: "201" },
    { id: 3, name: "OK", code: "202" },
  ];
  return (
    <div className={`relative min-h-96 w-80 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147] mb-3 border-b-2">
        <Handle
          type="target"
          position={Position.Left}
          id="rs-1"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
        />
        <p className="pr-4 pl-9">Response</p>
      </div>

      {/* content */}
      <div className="relative px-3">
        {/* type */}
        <RadioGroup
        // value={this.state.requestMethod}
        // onChange={this.onInputChange}
        >
          <div className="flex flex-wrap justify-evenly w-full mb-5">
            {["JSON", "HTML", "XML"].map((el) => (
              <RadioGroup.Option
                value={el}
                className={({ active, checked }) =>
                  `relative mx-1 border cursor-pointer rounded-full px-5 py-1 shadow focus:outline-none ${
                    checked ? "bg-[#00BFFF] text-white" : "bg-white"
                  }`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <RadioGroup.Label
                        as="p"
                        className={`text-xs ${checked ? "text-white" : ""}`}
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

        {/* status code */}
        <div className="flex relative text-sm mb-5">
          <Listbox value={statusCode} onChange={setStatusCode}>
            <div className="relative w-full">
              <Listbox.Button className="relative w-full cursor-default input py-2 shadow ">
                <span className="block truncate">
                  {statusCode?.name
                    ? statusCode.code + " - " + statusCode.name
                    : "Status Code"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {statusCodes.map((statusCode, statusCodeIdx) => (
                    <Listbox.Option
                      key={statusCodeIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-6 pr-4 ${
                          active ? "bg-[#00BFFF] text-[#fff]" : "text-gray-900"
                        }`
                      }
                      value={statusCode}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {statusCode.code}
                            </span>
                            <span
                              className={`text-xs ${
                                selected || active
                                  ? "text-[#fff]"
                                  : "text-[gray]"
                              }`}
                            >
                              {statusCode.name}
                            </span>
                          </div>
                          {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* data */}
        <div className="mb-4 border-2 rounded-md border-dashed w-full h-36 flex items-center justify-center text-[gray] text-sm">
          Drag Data Here
        </div>
      </div>
    </div>
  );
}

export function ErrorResponse(props) {
  const [statusCode, setStatusCode] = useState();
  const statusCodes = [
    { id: 1, name: "Server Error", code: "500" },
    { id: 2, name: "Server Error", code: "501" },
    { id: 3, name: "Server Error", code: "503" },
  ];
  return (
    <div className={`relative min-h-96 w-80 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147] mb-3 border-b-2">
        <Handle
          type="target"
          position={Position.Left}
          id="ers-1"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
        />
        <p className="pr-4 pl-9">Error Response</p>
      </div>

      {/* content */}
      <div className="relative px-3">
        {/* type */}
        <RadioGroup
          // value={this.state.requestMethod}
          // onChange={this.onInputChange}
        >
          <div className="flex flex-wrap justify-evenly w-full mb-5">
            {["JSON", "HTML", "XML"].map((el) => (
              <RadioGroup.Option
                value={el}
                className={({ active, checked }) =>
                  `relative mx-1 border cursor-pointer rounded-full px-5 py-1 shadow focus:outline-none ${
                    checked ? "bg-[#00BFFF] text-white" : "bg-white"
                  }`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <RadioGroup.Label
                        as="p"
                        className={`text-xs ${checked ? "text-white" : ""}`}
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

        {/* status code */}
        <div className="flex relative text-sm mb-5">
          <Listbox value={statusCode} onChange={setStatusCode}>
            <div className="relative w-full">
              <Listbox.Button className="relative w-full cursor-default input py-2 shadow ">
                <span className="block truncate">
                  {statusCode?.name
                    ? statusCode.code + " - " + statusCode.name
                    : "Status Code"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {statusCodes.map((statusCode, statusCodeIdx) => (
                    <Listbox.Option
                      key={statusCodeIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-6 pr-4 ${
                          active ? "bg-[#00BFFF] text-[#fff]" : "text-gray-900"
                        }`
                      }
                      value={statusCode}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {statusCode.code}
                            </span>
                            <span
                              className={`text-xs ${
                                selected || active
                                  ? "text-[#fff]"
                                  : "text-[gray]"
                              }`}
                            >
                              {statusCode.name}
                            </span>
                          </div>
                          {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* message */}
        <div className="relative mb-4">
          <p className="text-xs mb-1">Message</p>
          <input className="w-full input shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export function CustomNode(props) {
  const data = props.data
  const contents = Object.values(data.content);
  let html;

  for (let content of contents) {
    switch (content.type) {
      case "text":
        html = <p>{content.title}</p>;
    }
  }

  return (
    <div className={`relative min-h-96 w-80 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147] mb-3 border-b-2">
        {data.header?.iNode ? (
          <Handle
            type="target"
            position={Position.Left}
            id="rs-0"
            className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
          />
        ) : null}
        <p
          className={`${data.header?.iNode ? "pl-9" : "pl-4"} ${
            data.header?.oNode ? "pr-9" : "pr-4"
          }`}
        >
          {data.header.title}
        </p>
        {data.header?.oNode ? (
          <Handle
            type="source"
            position={Position.Right}
            id="rs-1"
            className="block w-4 h-4 rounded-full bg-[#00BFFF] mr-3"
          />
        ) : null}
      </div>

      {/* content */}
      {html ? <div className="px-3">{html}</div> : null}
    </div>
  );
}

export function TransferNodeDataOff(props) {
  return (
    <div className={`relative min-h-96 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto ${props?.data?.css?.container ? props?.data?.css?.container : ''}`}>
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147]">
        <Handle
          type="target"
          position={Position.Left}
          id="tdo-0"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
        />
        <p className="px-9">Block Data</p>
        <Handle
          type="source"
          position={Position.Right}
          id="tdo-1"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] mr-3"
        />
      </div>
    </div>
  );
}
