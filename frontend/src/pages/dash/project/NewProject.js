import React, {Fragment} from "react"
import store from "../../../app/store"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { RadioGroup } from "@headlessui/react"
import { createProject } from "../../../app/actions/Project"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"


const descriptions = ["Side project", "School", "Prototype", "Work", "Just testing"];

class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: null,
      appName: "clix",
      framework: "Django",
      version: "latest",
      language: "Python 3.9",
      description: null,
      errors: [0, 0, 0, 0, 0],
    };

    this.submit = this.submit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (e) => {
    if (e.target) {
        if (e.target.name === "projectName") {
          let errors = this.state.errors
          errors[0] = 0
          this.setState({ [e.target.name]: e.target.value.trim(), errors: errors });
        }
        this.setState({ [e.target.name]: e.target.value.trim() });
    }
    else {
      if (descriptions.find((el) => el === e)) {
        let errors = this.state.errors;
        errors[4] = 0;
        this.setState({
          description: e,
          errors: errors,
        });
      }
    }
  }

  resetForm = () => {
    this.setState({
      projectName: null,
      appName: "clix",
      framework: "Django",
      version: "latest",
      language: "Python 3.9",
      description: null,
    });
  }

  submit = () => {
    const isEmpty = (el) => {
      return (typeof el === "string" && el.trim() === "") || el === null;
    }

    let errors = [0, 0, 0, 0, 0]
    if (isEmpty(this.state.projectName)) {
      errors[0] = 1
    }
    if (isEmpty(this.state.appName)) {
      errors[1] = 1;
    }
    if (isEmpty(this.state.framework)) {
      errors[2] = 1;
    }
    if (isEmpty(this.state.version)) {
      errors[3] = 1;
    }
    if (isEmpty(this.state.description)) {
      errors[4] = 1;
    }
    this.setState({ errors: errors });

    if (errors[0] + errors[1] + errors[2] + errors[3] + errors[4] === 0) {
      this.props.createProject(this.state);
    }
  }
  
    render() {
      if (this.props.payload.redirectTo) {
        return <Navigate replace to={this.props.payload.redirectTo} />;
    } else {
        return (
          <div className="forth-step grid grid-cols-6">
            {this.props.helmet}
            <div className="min-h-screen w-full col-span-5 p-5">
              <div className="card">
                <div className="card-content">
                  <div className="w-2/3">
                    <div className="block mb-2">
                      <p className="text-sm">Project Name</p>
                    </div>

                    <div className="flex flex-col mb-4">
                      <input
                        className={`input ${
                          this.state.errors[0] ? "red-ring" : ""
                        }`}
                        name="projectName"
                        value={this.state.projectName}
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 pl-6">
                    <div className="block mb-2">
                      <p className="text-sm">App Name</p>
                    </div>

                    <div className="flex flex-col mb-4">
                      <input
                        className="input"
                        name="appName"
                        value={"clix"}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card hidden">
                {/* Framework  */}
                <div className="card-content flex-row">
                  <div className="w-1/2">
                    <p className="mb-3 text-sm">Framework</p>
                    <RadioGroup
                      name="framework"
                      value={this.state.framework}
                      onChange={this.onInputChange}
                    >
                      <div className="flex flex-wrap">
                        {[
                          "Django",
                          // "Express.js",
                          // "Laravel",
                          // "Flask",
                          // "Ruby on Rails",
                          // "Angular",
                        ].map((el) => (
                          <RadioGroup.Option
                            value={el}
                            className={({ active, checked }) =>
                              `${
                                checked
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

                  {/* Version  */}
                  <div className="w-1/2">
                    <p className="mb-3 text-sm">Version</p>
                    <RadioGroup
                      name="version"
                      value={this.state.version}
                      onChange={this.onInputChange}
                    >
                      <div className="flex flex-wrap">
                        {["latest"].map((el) => (
                          <RadioGroup.Option
                            value={el}
                            className={({ active, checked }) =>
                              `${
                                checked
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
                </div>
              </div>

              {/* description */}
              <div className="card mb-48">
                <div className="card-content border-0 flex-col">
                  <div className="block mb-2">
                    <p className="text-sm">What is this project for</p>
                  </div>
                  <Listbox
                    name="template"
                    value={this.state.description}
                    onChange={this.onInputChange}
                  >
                    <div className="relative">
                      <Listbox.Button
                        className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left text-xs shadow-md border ${
                          this.state.errors[4] ? "red-ring" : ""
                        }`}
                      >
                        <span className="block mb-1 text-[11px]">select:</span>
                        <span className="block text-sm truncate h-5">
                          {this.state.description}
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
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-left text-xs shadow-lg border">
                          {descriptions.map((item, itemIdx) => (
                            <Listbox.Option
                              key={itemIdx}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 px-4 ${
                                  active
                                    ? "bg-[#00bfff] text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={item}
                            >
                              {({ description }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      description
                                        ? "font-medium"
                                        : "font-normal"
                                    }`}
                                  >
                                    {item}
                                  </span>
                                  {description ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
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
              </div>

              {/* Authentication Endpoints  */}
              {/* <div className="hidden card">
                <p className="mb-3 text-sm">
                  Auto-add authentication Endpoints
                </p>
                <RadioGroup
                  name="authSystem"
                  value={this.state.authSystem}
                  onChange={this.onInputChange}
                >
                  <div className="flex flex-wrap">
                    {["Yes", "No"].map((el) => (
                      <RadioGroup.Option
                        value={el}
                        className={({ active, checked }) =>
                          `${
                            checked ? "bg-[#00BFFF] text-white" : "bg-white"
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
              </div> */}

              {/* local env  */}
              {/* <div className="hidden card mb-8">
                <p className="mb-3 text-sm">Create local .env file</p>
                <RadioGroup
                  name="envFile"
                  value={this.state.envFile}
                  onChange={this.onInputChange}
                >
                  <div className="flex flex-wrap">
                    {["Yes", "No"].map((el) => (
                      <RadioGroup.Option
                        value={el}
                        className={({ active, checked }) =>
                          `${
                            checked ? "bg-[#00BFFF] text-white" : "bg-white"
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
              </div> */}

              {/* submit  */}
              <div className="w-56 pr-8 pb-8 grid text-center">
                <button onClick={this.submit} className="custom-btn btn-3">
                  <span>Create Project</span>
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
}

const mapStateToProps = (state) => ({
  payload: store.getState().projectReducer,
});

export default connect(mapStateToProps, {
  createProject,
})(NewProject);