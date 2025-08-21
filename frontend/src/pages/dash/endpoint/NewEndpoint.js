import React, { Component } from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import ComboBox from "../../../components/layout/combobox";
import {
  createEndpoint,
  getRequestValidations,
} from "../../../app/actions/Endpoint";
import {
  openBadgeBanner,
  setNavBarOptions,
} from "../../../app/actions/Notification";
import { RadioGroup } from "@headlessui/react";

class NewEndpoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      currentApp: "",
      currentFile: "",
      name: null,
      description: null,
      authRequired: false,
      authHeaderType: "Bearer",
      requestMethod: null,
      // TODO removed for now. Add to advanced settings
      requestHost: "localhost",
      // requestHost: null,
      requestURI: null,
      payloadType: null,
      inputValues: "",
      table: "",
      operation: "",
      functions: "",
      params: {},
      headers: {},
      payload: {},
      responseCode: null,
      responseMessage: null,
      isDraft: false,
      paramsList: [],
      headersList: [],
      payloadList: [],
      errors: [],
      hasMethodURIConflict: false,
    };

    this.input = this.input.bind(this);
    this.submit = this.submit.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  componentDidMount() {
    this.props.getRequestValidations();

    // add navBar options
    this.props.setNavBarOptions({
      0: { title: "Save Draft", callback: this.saveDraft },
      1: { title: "Reset Form", callback: this.resetForm },
    });
  }

  input = (name, idd, onInputChange, onInputRemove, options) => {
    const value = "";
    const id = name + "_" + idd;

    return (
      <tr id={id}>
        <td className="w-1/3">
          <input
            name={id + "_key"}
            className="w-full input"
            // placeholder={"key_" + id}
            placeholder="name"
            defaultValue={""}
            onChange={onInputChange}
          />
        </td>
        <td className="w-2/3">
          <ComboBox
            name={id + "_value"}
            defaultValue={value}
            onChange={onInputChange}
            options={options}
          />
        </td>
        <td className="text-red-500 text-right text-xs">
          <button id={id} onClick={onInputRemove} className="pl-1">
            remove
          </button>
        </td>
      </tr>
    );
  };

  onAddBtnClick = (event) => {
    if (event.target.name && event.target.name === "param") {
      this.setState({
        paramsList: [
          ...this.state.paramsList,
          this.input(
            event.target.name,
            this.state.paramsList.length,
            this.onInputChange,
            this.onRemoveBtnClick,
            ["", "uuid", "int", "str"]
          ),
        ],
        params: {
          ...this.state.params,
          [Object.keys(this.state.params).length]: [null, null],
        },
      });
    }
    if (event.target.name && event.target.name === "header") {
      this.setState({
        headersList: [
          ...this.state.headersList,
          this.input(
            event.target.name,
            this.state.headersList.length,
            this.onInputChange,
            this.onRemoveBtnClick,
            ["", "uuid", "int", "str"]
          ),
        ],
        headers: {
          ...this.state.headers,
          [Object.keys(this.state.headers).length]: [null, null],
        },
      });
    }
    if (event.target.name && event.target.name === "payload") {
      this.setState({
        payloadList: [
          ...this.state.payloadList,
          this.input(
            event.target.name,
            this.state.payloadList.length,
            this.onInputChange,
            this.onRemoveBtnClick,
            ["", "uuid", "int", "str"]
          ),
        ],
        payload: {
          ...this.state.payload,
          [Object.keys(this.state.payload).length]: [null, null],
        },
      });
    }
  };

  onRemoveBtnClick = (e) => {
    const type = e.target.id.split("_")[0];
    const id = e.target.id.split("_")[1];

    switch (type) {
      case "header":
        this.state.headers[id] = [null, null];
        if (this.state.headersList.indexOf(this.state.headersList[id]) === -1) {
          this.state.headersList.pop();
        } else {
          this.state.headersList[
            this.state.headersList.indexOf(this.state.headersList[id])
          ] = undefined;
        }
        let headers = [];
        for (let i = 0; i < this.state.headersList.length; i++) {
          if (this.state.headersList[i]) {
            headers.push(this.state.headersList[i]);
          }
        }
        this.setState({ headersList: headers });
        return;
      case "param":
        this.state.params[id] = [null, null];
        if (this.state.paramsList.indexOf(this.state.paramsList[id]) === -1) {
          this.state.paramsList.pop();
        } else {
          this.state.paramsList[
            this.state.paramsList.indexOf(this.state.paramsList[id])
          ] = undefined;
        }
        let params = [];
        for (let i = 0; i < this.state.paramsList.length; i++) {
          if (this.state.paramsList[i]) {
            params.push(this.state.paramsList[i]);
          }
        }
        this.setState({ paramsList: params });
        return;
      case "payload":
        this.state.params[id] = [null, null];
        if (this.state.payloadList.indexOf(this.state.payloadList[id]) === -1) {
          this.state.payloadList.pop();
        } else {
          this.state.payloadList[
            this.state.payloadList.indexOf(this.state.payloadList[id])
          ] = undefined;
        }
        let payload = [];
        for (let i = 0; i < this.state.payloadList.length; i++) {
          if (this.state.payloadList[i]) {
            payload.push(this.state.payloadList[i]);
          }
        }
        this.setState({ payloadList: payload });
        return;
      default:
        return;
    }
  };

  // TODO use setState() instead
  onInputChange = (e) => {
    const isEmpty = (el) => {
      return (typeof el === "string" && el.trim() === "") || el === null;
    };

    let err = this.state.errors;
    if (e.target && e.target.name && e.target.name.split("_").length > 1) {
      if (e.target.name.split("_")[0] === "header") {
        if (e.target.name.split("_")[2] === "key") {
          this.state.headers[parseInt(e.target.name.split("_")[1])] = [
            e.target.value,
            this.state.headers[parseInt(e.target.name.split("_")[1])][1],
          ];
        } else if (e.target.name.split("_")[2] === "value") {
          this.state.headers[parseInt(e.target.name.split("_")[1])] = [
            this.state.headers[parseInt(e.target.name.split("_")[1])][0],
            e.target.value,
          ];
        }
      } else if (e.target.name.split("_")[0] === "param") {
        if (e.target.name.split("_")[2] === "key") {
          this.state.params[parseInt(e.target.name.split("_")[1])] = [
            e.target.value,
            this.state.params[parseInt(e.target.name.split("_")[1])][1],
          ];
        } else if (e.target.name.split("_")[2] === "value") {
          this.state.params[parseInt(e.target.name.split("_")[1])] = [
            this.state.params[parseInt(e.target.name.split("_")[1])][0],
            e.target.value,
          ];
        }
      } else if (e.target.name.split("_")[0] === "payload") {
        if (e.target.name.split("_")[2] === "key") {
          this.state.payload[parseInt(e.target.name.split("_")[1])] = [
            e.target.value,
            this.state.payload[parseInt(e.target.name.split("_")[1])][1],
          ];
        } else if (e.target.name.split("_")[2] === "value") {
          this.state.payload[parseInt(e.target.name.split("_")[1])] = [
            this.state.payload[parseInt(e.target.name.split("_")[1])][0],
            e.target.value,
          ];
        }
      }
    } else if (e.target && e.target.name) {
      if (e.target.name === "authRequired") {
        this.setState({ authRequired: !this.state.authRequired });
      } else if (e.target.name === "name") {
        if (!isEmpty(e.target.value) && err.includes("name")) {
          let i = err.indexOf("name");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value,
          errors: err,
        });
      } else if (e.target.name === "description") {
        if (!isEmpty(e.target.value) && err.includes("description")) {
          let i = err.indexOf("description");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value,
          errors: err,
        });
      } else if (e.target.name === "requestURI") {
        if (!isEmpty(e.target.value) && err.includes("requestURI")) {
          let i = err.indexOf("requestURI");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value.trim(),
          errors: err,
        });
      } else if (e.target.name === "responseCode") {
        if (!isEmpty(e.target.value) && err.includes("responseCode")) {
          let i = err.indexOf("responseCode");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value.trim(),
          errors: err,
        });
      } else if (e.target.name === "responseMessage") {
        if (!isEmpty(e.target.value) && err.includes("responseMessage")) {
          let i = err.indexOf("responseMessage");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value.trim(),
          errors: err,
        });
      } else {
        this.setState({ [e.target.name]: e.target.value.trim() });
      }
    } else {
      if (
        ["GET", "POST", "PUT", "DELETE", "COPY", "HEAD", "OPTIONS"].find(
          (el) => e === el
        )
      ) {
        let err = this.state.errors;
        if (err.includes("requestMethod")) {
          let i = err.indexOf("requestMethod");
          err.splice(i, 1);
        }
        this.setState({
          requestMethod: e,
          errors: err,
        });
      } else if (["localhost", "http", "https"].find((el) => e === el)) {
        let err = this.state.errors;
        if (err.includes("requestHost")) {
          let i = err.indexOf("requestHost");
          err.splice(i, 1);
        }
        this.setState({
          requestHost: e,
          errors: err,
        });
      } else if (["json"].find((el) => e === el)) {
        this.setState({
          payloadType: e,
        });
      }
    }
  };

  saveDraft = () => {
    this.submit(true);
  };

  resetForm = () => {
    this.setState({
      projectId: "",
      currentApp: "",
      currentFile: "",
      name: "",
      description: "",
      authRequired: false,
      authHeaderType: "Bearer",
      requestMethod: null,
      requestHost: null,
      requestURI: "",
      payloadType: null,
      inputValues: "",
      table: "",
      operation: "",
      functions: "",
      params: {},
      headers: {},
      payload: {},
      responseCode: null,
      responseMessage: null,
      isDraft: false,
      paramsList: [],
      headersList: [],
      payloadList: [],
      errors: [],
      hasMethodURIConflict: false,
    });
  };

  submit = (isDraft) => {
    // check existing uri + method conflict
    // TODO maybe allow it
    if (this.props.requestValidations) {
      this.props.requestValidations.map((val) => {
        if (this.state.requestMethod + this.state.requestURI === val) {
          this.setState({ hasMethodURIConflict: true });
          return;
        }
      });
    }

    const isEmpty = (el) => {
      return (
        (typeof el === "string" && el.trim() === "") ||
        el === null ||
        el === undefined
      );
    };

    const getHeaders = () => {
      let headersKeys = Object.keys(this.state.headers).filter(
        (key) =>
          this.state.headers[key] &&
          !isEmpty(this.state.headers[key][0]) &&
          !isEmpty(this.state.headers[key][1])
      );
      let headers = {};
      for (let i = 0; i < headersKeys.length; i++) {
        headers[parseInt(i)] = this.state.headers[headersKeys[i]];
      }
      return headers;
    };

    const getParams = () => {
      let paramsKeys = Object.keys(this.state.params).filter(
        (key) =>
          this.state.params[key] &&
          !isEmpty(this.state.params[key][0]) &&
          !isEmpty(this.state.params[key][1])
      );
      let params = {};
      for (let i = 0; i < paramsKeys.length; i++) {
        params[i] = this.state.params[paramsKeys[i]];
      }
      return params;
    };

    const getPayloads = () => {
      let payload = {};
      if (this.state.requestMethod !== "GET") {
        let payloadKeys = Object.keys(this.state.payload).filter(
          (key) =>
            this.state.payload[key] &&
            !isEmpty(this.state.payload[key][0]) &&
            !isEmpty(this.state.payload[key][1])
        );
        for (let i = 0; i < payloadKeys.length; i++) {
          payload[i] = this.state.payload[payloadKeys[i]];
        }
      }
      return payload;
    };

    // validating
    let errors = this.state.errors;
    if (isEmpty(this.state.name)) {
      if (!errors.includes("name")) {
        errors.push("name");
      }
    } else {
      if (errors.includes("name")) {
        let err = errors;
        let i = err.indexOf("name");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.requestMethod)) {
      if (!errors.includes("requestMethod")) {
        errors.push("requestMethod");
      }
    } else {
      if (errors.includes("requestMethod")) {
        let err = errors;
        let i = err.indexOf("requestMethod");
        errors.splice(i, 1);
        errors = err;
      }
    }
    // TODO removed for now. Add to advanced settings
    // if (isEmpty(this.state.requestHost)) {
    //   if (!errors.includes("requestHost")) {
    //     errors.push("requestHost");
    //   }
    // } else {
    //   if (errors.includes("requestHost")) {
    //     let err = errors;
    //     let i = err.indexOf("requestHost");
    //     errors.splice(i, 1);
    //     errors = err;
    //   }
    // }
    if (isEmpty(this.state.requestURI)) {
      if (!errors.includes("requestURI")) {
        errors.push("requestURI");
      }
    } else {
      if (errors.includes("requestURI")) {
        let err = errors;
        let i = err.indexOf("requestURI");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.responseCode)) {
      if (!errors.includes("responseCode")) {
        errors.push("responseCode");
      }
    } else {
      if (errors.includes("responseCode")) {
        let err = errors;
        let i = err.indexOf("responseCode");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.responseMessage)) {
      if (!errors.includes("responseMessage")) {
        errors.push("responseMessage");
      }
    } else {
      if (errors.includes("responseMessage")) {
        let err = errors;
        let i = err.indexOf("responseMessage");
        errors.splice(i, 1);
        errors = err;
      }
    }

    this.setState({ errors: errors });

    if (errors.length === 0) {
      let data = {
        projectId: this.state.projectId,
        currentApp: this.state.currentApp,
        currentFile: this.state.currentFile,
        name: this.state.name,
        description: this.state.description,
        isDraft: isDraft === true ? true : false,
        requestMethod: this.state.requestMethod,
        requestHost: this.state.requestHost,
        requestURI:
          this.state.requestURI[0] === "/"
            ? String(this.state.requestURI).substring(1)
            : this.state.requestURI[this.state.requestURI.length - 1] === "/"
            ? String(this.state.requestURI).substring(
                0,
                this.state.requestURI.length - 1
              )
            : this.state.requestURI,
        authHeaderType: this.state.authRequired
          ? this.state.authHeaderType
          : false,
        headers: getHeaders(),
        params: getParams(),
        payloadType: this.state.payloadType,
        payload: getPayloads(),
        responseCode: this.state.responseCode,
        responseMessage: this.state.responseMessage,
      };
      this.props.createEndpoint(data);
    }
  };

  render() {
    return this.props.redirectTo !== undefined ? (
      <Navigate replace to={this.props.redirectTo} />
    ) : (
      <div className="w-full h-screen">
        {this.props.helmet}
        <div className="min-h-scree grid grid-cols-6 col-span-6 grid-flow-row gap-3 p-5">
          {/* request */}
          <div className="card">
            <div className="card-content flex-col">
              <div className="mb-6">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                  <p
                    className={`text-sm ${
                      this.state.errors.includes("requestMethod")
                        ? "text-[red]"
                        : null
                    }`}
                  >
                    Request Method
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={`${
                      this.state.errors.includes("requestMethod")
                        ? "red"
                        : "gray"
                    }`}
                    strokeWidth={1.8}
                    onClick={() =>
                      this.props.openBadgeBanner({
                        title: "HTTP Request Method",
                        description:
                          "An HTTP request is an action to be performed on a resource identified by a given Request-URL. Request methods are case-sensitive, and should always be noted in upper case.",
                        links: [
                          [
                            "https://restfulapi.net/http-methods/",
                            "HTTP Methods",
                            "restfulapi.net",
                          ],
                          [
                            "https://rapidapi.com/blog/api-glossary/http-request-methods/",
                            "What are HTTP Requests?",
                            "rapidapi.com",
                          ],
                          [
                            "https://www.restapitutorial.com/lessons/httpmethods.html",
                            "Using HTTP Methods for RESTful Services",
                            "restapitutorial.com",
                          ],
                        ],
                      })
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <RadioGroup
                  name="requestMethod"
                  value={this.state.requestMethod}
                  onChange={this.onInputChange}
                >
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
                          `${checked ? "bg-[#00BFFF] text-white" : "bg-white"}
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
              <div className="w-full flex gap-x-10">
                <div className="w-1/2">
                  <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                    <p className="text-sm">Path</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      strokeWidth={1.8}
                      onClick={() =>
                        this.props.openBadgeBanner({
                          title: "HTTP Request URI",
                          description:
                            "A URI is a Universal Resource Identifier, identifying where a specific resource can be found, such as a page or a document. They are used in REST APIs to address resources to developers using an API.",
                          links: [
                            [
                              "https://www.abstractapi.com/api-glossary/uri#:~:text=A%20URI%20is%20a%20Universal,to%20developers%20using%20an%20API.",
                              "What is a URI?",
                              "Warmed Up",
                            ],
                            [
                              "https://restfulapi.net/resource-naming/#:~:text=1.3.-,URI,intuitive%20and%20easy%20to%20use.",
                              "REST Resource Naming Guide",
                              "Starter",
                            ],
                            [
                              "https://www.tutorialspoint.com/restful/restful_addressing.htm",
                              "Constructing a Standard URI",
                              "Sweating",
                            ],
                          ],
                        })
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className={`w-full input mb-2 ${
                      this.state.errors.includes("requestURI")
                        ? "red-ring"
                        : null
                    }`}
                    name="requestURI"
                    value={this.state.requestURI}
                    onChange={this.onInputChange}
                    // placeholder='default "/"'
                  />
                  <small className="block w-full text-[10px] text-right text-[gray]">
                    default "/"
                  </small>
                </div>
                {/* TODO removed for now. Add to advanced settings */}
                {/* <div className="w-1/2">
                  <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                    <p
                      className={`text-sm ${
                        this.state.errors.includes("requestHost")
                          ? "text-[red]"
                          : null
                      }`}
                    >
                      Request Host
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={`${
                        this.state.errors.includes("requestHost")
                          ? "red"
                          : "gray"
                      }`}
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <RadioGroup
                    name="requestHost"
                    value={this.state.requestHost}
                    onChange={this.onInputChange}
                  >
                    <div className="flex flex-wrap">
                      {["localhost", "http", "https"].map((el) => (
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
                </div> */}
              </div>
            </div>
          </div>

          {!this.state.requestMethod ? (
            <div className="col-span-4 h-fit mb-8 mt-4 py-4 text-center text-[#f39237] rounded-full border-[#f39237] border-2 bg-[#f39237] bg-opacity-10">
              Please select a method
            </div>
          ) : null}

          {/* headers  */}
          {this.state.requestMethod ? (
            <div className="card">
              <div className="card-content flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-start items-center gap-1 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      strokeWidth={1.8}
                      onClick={() =>
                        this.props.openBadgeBanner({
                          title: "HTTP Authorization Header",
                          description:
                            "The HTTP Authorization request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.",
                          links: [
                            [
                              "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",
                              "Authorization",
                              "",
                            ],
                            [
                              "https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/",
                              "Basic auth for REST APIs",
                              "",
                            ],
                            [
                              "https://www.loginradius.com/blog/engineering/everything-you-want-to-know-about-authorization-headers/",
                              "Authorization header",
                              "",
                            ],
                          ],
                        })
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm">Authorization</p>
                  </div>
                  <Switch
                    checked={this.state.authRequired}
                    onChange={() =>
                      this.onInputChange({ target: { name: "authRequired" } })
                    }
                    name="authRequired"
                    className={`${
                      this.state.authRequired ? "bg-[#4BFB80]" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        this.state.authRequired
                          ? "translate-x-6"
                          : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex justify-start items-center gap-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        strokeWidth={1.8}
                        onClick={() =>
                          this.props.openBadgeBanner({
                            title: "HTTP Request Headers",
                            description:
                              "A REST request header contains parameters (metadata) that define the HTTP(S) interaction. Commonly used REST headers include: Authorization. Accept. Content-Type.",
                            links: [
                              [
                                "https://apipheny.io/api-headers/",
                                "API Headers - What Are They?",
                                "",
                              ],
                              [
                                "https://www.soapui.org/learn/api/understanding-rest-headers-and-parameters/",
                                "Understanding REST Headers",
                                "",
                              ],
                              [
                                "https://www.ibm.com/docs/en/stea/9.0?topic=overview-rest-api-request-headers",
                                "REST API request headers",
                                "",
                              ],
                            ],
                          })
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm">Headers</p>
                    </div>
                    {Object.keys(this.state.headers).length === 0 ? (
                      <button
                        name="header"
                        onClick={this.onAddBtnClick}
                        className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                      ></button>
                    ) : null}
                  </div>
                  <table className="table-fixed text-left border-separate mb-3">
                    <tbody className="text-sm">{this.state.headersList}</tbody>
                  </table>
                  {Object.keys(this.state.headers).length > 0 ? (
                    <button
                      name="header"
                      onClick={this.onAddBtnClick}
                      className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                    ></button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {/* params  */}
          {this.state.requestMethod ? (
            <div className="card">
              <div className="card-content flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex justify-start items-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      strokeWidth={1.8}
                      onClick={() =>
                        this.props.openBadgeBanner({
                          title: "HTTP Request Query Parameters",
                          description:
                            "Parameters are options you can pass with the endpoint (such as specifying the response format or the amount returned) to influence the response. There are several types of parameters: header parameters, path parameters, and query string parameters.",
                          links: [
                            [
                              "https://docs.oracle.com/en/cloud/saas/cx-commerce/22a/ccdev/rest-api-query-parameters.html",
                              "REST API query parameters",
                              "",
                            ],
                            [
                              "https://idratherbewriting.com/learnapidoc/docapis_doc_parameters.html",
                              "Parameters (API reference tutorial)",
                              "",
                            ],
                            [
                              "https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Parameters-and-Query-String-Usage/",
                              "REST API Design Best Practices for Parameter and Query String Usage",
                              "",
                            ],
                          ],
                        })
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm">Params</p>
                  </div>
                  {Object.keys(this.state.params).length === 0 ? (
                    <button
                      name="param"
                      onClick={this.onAddBtnClick}
                      className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                    ></button>
                  ) : null}
                </div>
                <table className="table-fixed text-left border-separate mb-3">
                  <tbody className="text-sm">{this.state.paramsList}</tbody>
                </table>
                {Object.keys(this.state.params).length > 0 ? (
                  <button
                    name="param"
                    onClick={this.onAddBtnClick}
                    className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                  ></button>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* body  */}
          {this.state.requestMethod && this.state.requestMethod !== "GET" ? (
            <div className="card">
              <div className="card-content justify-between items-center mb-3">
                <div className="flex justify-start items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={1.8}
                    onClick={() =>
                      this.props.openBadgeBanner({
                        title: "HTTP Request Body",
                        description:
                          "The request body is used to send and receive data via the REST API. This is sometimes referred to as a payload.",
                        links: [
                          [
                            "https://fastapi.tiangolo.com/tutorial/body/",
                            "Request Body",
                            "",
                          ],
                          [
                            "https://wahlnetwork.com/2017/09/25/working-with-restful-api-query-body-and-path-parameters/#:~:text=Body%20Parameter,-The%20next%20parameter&text=This%20is%20sometimes%20referred%20to,to%20change%20the%20resource's%20data.",
                            "Body Parameters",
                            "",
                          ],
                          [
                            "https://docs.informatica.com/data-integration/b2b-data-transformation/10-5/rest-api-guide/rest-api-calls/api-call-and-request-body-syntax.html",
                            "API Call and Request Body Syntax",
                            "",
                          ],
                        ],
                      })
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">Body</p>
                </div>
                {Object.keys(this.state.payload).length === 0 ? (
                  <button
                    name="payload"
                    onClick={this.onAddBtnClick}
                    className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                  ></button>
                ) : null}
              </div>
              <div className="card-content flex-col">
                <RadioGroup
                  name="payloadType"
                  value={this.state.payloadType}
                  onChange={this.onInputChange}
                >
                  <div className="flex flex-wrap">
                    {["json"].map((el) => (
                      <RadioGroup.Option
                        value={el}
                        className={({ active, checked }) =>
                          `${checked ? "bg-[#00BFFF] text-white" : "bg-white"}
                            relative mb-4 mx-1 border cursor-pointer rounded-full px-5 py-1 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <RadioGroup.Label
                                as="p"
                                className={`text-xs  ${
                                  checked ? "text-white" : "text-gray-900"
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
                  <tbody className="text-sm">{this.state.payloadList}</tbody>
                </table>
                {Object.keys(this.state.payload).length > 0 ? (
                  <button
                    name="payload"
                    onClick={this.onAddBtnClick}
                    className="h-5 w-5 ml-auto block bg-[#00BFFF] rounded-full text-white shadow-md border-color-white hover:border"
                  ></button>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* response  */}
          {this.state.requestMethod ? (
            <div className="card">
              <div className="card-content flex-col">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                  <p className="text-sm">Response</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="gray"
                    strokeWidth={1.8}
                    onClick={() =>
                      this.props.openBadgeBanner({
                        title: "HTTP Response",
                        description:
                          "The API Response consists of the resolved data returned from the server - commonly formatted at JSON.",
                        links: [
                          [
                            "https://restfulapi.net/http-status-codes/",
                            "HTTP Status Codes",
                            "",
                          ],
                          [
                            "https://www.ibm.com/docs/en/odm/8.5.1?topic=api-rest-response-codes-error-messages",
                            "REST API response codes and error messages",
                            "",
                          ],
                          [
                            "https://www.studytonight.com/rest-web-service/understanding-the-response",
                            "Understanding the REST API Response",
                            "",
                          ],
                        ],
                      })
                    }
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
                    <tr id={0}>
                      <td className="w-1/3">
                        <input
                          className={`w-full input ${
                            this.state.errors.includes("responseCode")
                              ? "text-[red]"
                              : null
                          }`}
                          value={"Status Code"}
                        />
                      </td>
                      <td className="w-2/3">
                        <ComboBox
                          name={"responseCode"}
                          onChange={this.onInputChange}
                          options={["", "200", "300", "400", "500"]}
                        />
                      </td>
                    </tr>

                    <tr id={1}>
                      <td className="w-1/3">
                        <input
                          className={`w-full input ${
                            this.state.errors.includes("responseMessage")
                              ? "text-[red]"
                              : null
                          }`}
                          value="Message"
                        />
                      </td>
                      <td className="w-2/3">
                        <input
                          name={"responseMessage"}
                          className="w-full input"
                          onChange={this.onInputChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* name & description */}
          <div className="card">
            {/* name */}
            <div className="card-content flex-row">
              <div className="w-full mb-6">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                  <p className="text-sm">Name</p>
                </div>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.onInputChange}
                  className={`w-full input ${
                    this.state.errors.includes("name") ? "red-ring" : ""
                  }`}
                  placeholder="Give a name to your endpoint."
                />
              </div>

              {/* endpoint description */}
              <div className="w-full">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                  <p className="text-sm">Description</p>
                </div>
                <textarea
                  name="description"
                  value={this.state.description}
                  onChange={this.onInputChange}
                  className="w-full input"
                  rows="4"
                  placeholder="Add a summary of what this endpoint handles."
                ></textarea>
                <p className="text-[10px] text-right opacity-50">
                  <a
                    href="https://alfinder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Powered by Alfinder
                  </a>
                </p>
              </div>
            </div>
          </div>

          {this.state.hasMethodURIConflict === true ? (
            <p className="text-[red]">
              Combination of request method and URI must be unique.
            </p>
          ) : null}

          {/* submit  */}
          <div className="ml-auto pb-8 text-center">
            <button onClick={this.submit} className="custom-btn btn-3">
              <span>Create Endpoint</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  payload: store.getState().endpointReducer,
  redirectTo: store.getState().endpointReducer.redirectTo,
  requestValidations: store.getState().endpointReducer.requestValidations,
});

export default connect(mapStateToProps, {
  openBadgeBanner,
  createEndpoint,
  setNavBarOptions,
  getRequestValidations,
})(NewEndpoint);
