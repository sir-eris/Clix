import React, { PureComponent } from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import ComboBox from "../../../components/layout/combobox";
import { Navigate, useLocation } from "react-router-dom";
import { openBadgeBanner, setNavBarOptions } from "../../../app/actions/Notification";
import { RadioGroup, Switch } from "@headlessui/react";
import { updateEndpoint, retrieveEndpoint } from "../../../app/actions/Endpoint";

const OPTIONS = [
  "uuid",
  "int",
  "string",
  // "required",
  // "email",
  // "password",
  '',
  // "{object}",
  // "[array]",
];

class EditEndpoint extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      currentApp: "",
      currentFile: "",
      name: null,
      description: null,
      authRequired: undefined,
      authHeaderType: "Bearer",
      requestMethod: null,
      requestHost: null,
      requestURI: null,
      payloadType: null,
      params: null,
      headers: null,
      payload: null,
      responseCode: null,
      responseMessage: null,
      isDraft: null,
      operation: "",
      functions: "",
      errors: [],
    };

    this.input = this.input.bind(this);
    this.submit = this.submit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  componentDidMount() {
    this.props.retrieveEndpoint(this.props.location.state.id);

    // add navBar options
    this.props.setNavBarOptions({
      0: { title: "Draft", callback: this.saveDraft },
      1: { title: "Original", callback: this.resetForm },
    });
  }

  input = (name, idd, onInputChange, onInputRemove, options, value) => {
    const val = value || [null, null];
    const id = name + "_" + idd;

    return (
      <tr key={id} id={id}>
        <td className="w-1/3">
          <input
            name={id + "_key"}
            className="w-full input"
            // placeholder={"key_" + id}
            placeholder="name"
            defaultValue={val[0]}
            onChange={onInputChange}
          />
        </td>
        <td className="w-2/3">
          <ComboBox
            name={id + "_value"}
            defaultValue={val[1]}
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
    if (event.target.name === "param") {
      this.setState({
        params: {
          ...this.state.params,
          [Object.keys(this.state.params).length]: [null, null],
        },
      });
    }
    if (event.target.name === "header") {
      this.setState({
        headers: {
          ...this.state.headers,
          [Object.keys(this.state.headers).length]: [null, null],
        },
      });
    }
    if (event.target.name === "payload") {
      this.setState({
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
        this.state.headers[id] = undefined;
        this.setState({ ...this.state.headers });
        return;
      case "param":
        this.state.params[id] = undefined;
        this.setState({ ...this.state.params });
        return;
      case "payload":
        this.state.payload[id] = undefined;
        this.setState({ ...this.state.payload });
        return;
      default:
        return;
    }
  };

  // TRY: WITH THE VERY FIRST RENDER, ADD ALL PROPS TO STATE AND THEN JUST EDIT STATE, AND EASIER TO SUBMIT
  // MAYBE SOLVES THE MERGE IN SUBMIT'S BUG
  onInputChange = (e) => {
    const isEmpty = (el) => {
      return (typeof el === "string" && el.trim() === "") || el === null;
    };

    let err = this.state.errors;
    // TODO use setState() instead
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
        // if (this.state.authRequired === undefined) {
        //   if (this.props.endpoint.headers.authorization === true) {
        //     this.setState({ authRequired: false });
        //   } else {
        //     this.setState({ authRequired: true });
        //   }
        // } else {
        this.setState({ authRequired: !this.state.authRequired });
        // }
      } else if (e.target.name === "name") {
        if (!isEmpty(e.target.value) && err.includes("name")) {
          let i = err.indexOf("name");
          err.splice(i, 1);
        }
        this.setState({
          [e.target.name]: e.target.value.trim(),
          errors: err
        });
      } else {
        if (!isEmpty(e.target.value) && err.includes(e.target.name)) {
          let i = err.indexOf(e.target.name);
          err.splice(i, 1);
        }
        this.setState({ [e.target.name]: e.target.value.trim(), errors: err});
      }
    } else {
      if (
        ["GET", "POST", "PUT", "DELETE", "COPY", "PATCH", "OPTIONS"].find(
          (el) => e === el
        )
      ) {
        this.setState({ requestMethod: e });
      } else if (["localhost", "http", "https"].find((el) => e === el)) {
        this.setState({ requestHost: e });
      } else if (["json"].find((el) => e === el)) {
        this.setState({ payloadType: e });
      }
    }

    // validate
    
  };

  saveDraft = () => {
    this.submit(true);
  };

  resetForm = () => {
    this.setState({
      projectId: "",
      currentApp: "",
      currentFile: "",
      name: null,
      description: null,
      authRequired: undefined,
      authHeaderType: "Bearer",
      requestMethod: null,
      requestHost: null,
      requestURI: null,
      payloadType: null,
      params: null,
      headers: null,
      payload: null,
      responseCode: null,
      responseMessage: null,
      isDraft: null,
      operation: "",
      functions: "",
      errors: [],
    });
    return;
  };

  submit = (isDraft) => {
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

    // TODO validate uri, param names, header names, etc with regex
    // validating
    let errors = [...this.state.errors];
    if (isEmpty(this.state.responseCode)) {
      if (!errors.includes("responseCode")) errors.push("responseCode");
    } else {
      if (errors.includes("responseCode")) {
        let err = errors;
        let i = err.indexOf("responseCode");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.responseMessage)) {
      if (!errors.includes("responseMessage")) errors.push("responseMessage");
    } else {
      if (errors.includes("responseMessage")) {
        let err = errors;
        let i = err.indexOf("responseMessage");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.name)) {
      if (!errors.includes("name")) errors.push("name");
    } else {
      if (errors.includes("name")) {
        let err = errors;
        let i = err.indexOf("name");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.requestURI)) {
      if (!errors.includes("requestURI")) errors.push("requestURI");
    } else {
      if (errors.includes("requestURI")) {
        let err = errors;
        let i = err.indexOf("requestURI");
        errors.splice(i, 1);
        errors = err;
      }
    }
    if (isEmpty(this.state.requestHost)) {
      if (!errors.includes("requestHost")) errors.push("requestHost");
    } else {
      if (errors.includes("requestHost")) {
        let err = errors;
        let i = err.indexOf("requestHost");
        errors.splice(i, 1);
        errors = err;
      }
    }

    if (errors.length === 0) {
      // TODO remove props.endpoint
      // TODO check uri, param names, header names, etc with regex
      const endpoint = this.props.endpoint;
      let data = {
        endpointId: this.props.endpoint.id,
        name: this.state.name ? this.state.name : endpoint.name,
        description: this.state.description,
        isDraft: isDraft === true ? true : false,
        requestMethod: this.state.requestMethod
          ? this.state.requestMethod
          : endpoint.request.method,
        requestHost: this.state.requestHost
          ? this.state.requestHost
          : endpoint.request.host,
        requestURI:
          this.state.requestURI[0] === "/"
            ? String(this.state.requestURI).substring(1)
            : this.state.requestURI[this.state.requestURI.length - 1] === "/"
            ? String(this.state.requestURI).substring(
                0,
                this.state.requestURI.length - 1
              )
            : this.state.requestURI,
        authHeaderType:
          this.state.authRequired === true ||
          (this.state.authRequired === undefined &&
            endpoint.headers.authorization === true)
            ? true
            : false,
        headers: getHeaders(),
        params: getParams(),
        payloadType: this.state.payloadType
          ? this.state.payloadType
          : endpoint.body.type,
        payload: getPayloads(),
        responseCode: this.state.responseCode
          ? this.state.responseCode
          : endpoint.response.code,
        responseMessage: this.state.responseMessage
          ? this.state.responseMessage
          : endpoint.response.message,
      };
      this.props.updateEndpoint(data);
    }

    this.setState({ errors: errors });
  };

  render() {
    if (this.props.redirectTo) {
      return <Navigate replace to={this.props.redirectTo} />;
    }

    if (this.props.endpoint) {
      if (
        this.state.name === null &&
        this.state.description === null &&
        this.state.requestMethod === null &&
        this.state.requestHost === null &&
        this.state.requestURI === null &&
        this.state.payloadType === null &&
        this.state.headers === null &&
        this.state.params === null &&
        this.state.payload === null &&
        this.state.isDraft === null &&
        this.state.responseMessage === null &&
        this.state.responseCode === null
      ) {
        this.setState({
          isDraft: this.props.endpoint.is_draft,
          requestMethod: this.props.endpoint.request.method,
          // TODO removed for now. Add to advanced settings
          requestHost: "localhost",
          // requestHost: this.props.endpoint.request.host,
          requestURI: this.props.endpoint.request.uri,
          headers: this.props.endpoint.headers.body,
          authRequired: this.props.endpoint.headers.authorization,
          params: this.props.endpoint.params,
          payloadType: this.props.endpoint.body.type,
          payload: this.props.endpoint.body.payload,
          name: this.props.endpoint.name,
          description: this.props.endpoint.description,
          responseCode: this.props.endpoint.response.code
            ? this.props.endpoint.response.code.toString()
            : "",
          responseMessage: this.props.endpoint.response.message,
        });
        return;
      } else {
        return (
          <div className="seventh-step grid grid-cols-6">
            {this.props.helmet}
            <div className="min-h-screen grid grid-cols-6 col-span-6 grid-flow-row gap-3 p-5">
              {/* request */}
              <div className="card">
                <div className="card-content flex-row">
                  <div className="mb-6">
                    <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                      <p className="text-sm">Request Method</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
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
                          "PATCH",
                          "OPTIONS",
                        ].map((el) => (
                          <RadioGroup.Option
                            value={el}
                            className={({ active, checked }) =>
                              `${
                                checked ? "bg-[#00bfff] text-white" : "bg-white"
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
                        className={`w-full input ${
                          this.state.errors.includes("requestURI")
                            ? "red-ring"
                            : ""
                        }`}
                        name="requestURI"
                        defaultValue={this.state.requestURI}
                        onChange={this.onInputChange}
                      />
                    </div>
                    {/* TODO removed for now. Add it to advanced settings */}
                    {/* <div className="w-1/2">
                      <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                        <p
                          className={`text-sm ${
                            this.state.errors.includes("requestHost")
                              ? "text-[red]"
                              : ""
                          }`}
                        >
                          Request Host
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={
                            this.state.errors.includes("requestHost")
                              ? "red"
                              : "gray"
                          }
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
                              key={el}
                              value={el}
                              className={({ active, checked }) =>
                                `${
                                  checked
                                    ? "bg-[#00bfff] text-white"
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

              {/* headers  */}
              {this.props.endpoint.headers ? (
                <div className="card">
                  <div className="card-content flex-col">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1 mb-3">
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
                          this.onInputChange({
                            target: { name: "authRequired" },
                          })
                        }
                        name="authRequired"
                        className={`${
                          this.state.authRequired
                            ? "bg-[#4BFB80]"
                            : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            this.state.authRequired
                              ? "translate-x-6"
                              : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      {/* <button
                        onClick={this.onInputChange}
                        name="authRequired"
                        className={
                          "mr-[-16px] px-4 h-6 rounded-full text-xs cursor-pointer select-none " +
                          (this.state.authRequired === true ||
                          (this.state.authRequired === undefined &&
                            this.props.endpoint.headers.authorization === true)
                            ? "bg-[#FFEDEB] text-[#FF4733]"
                            : "text-red-300")
                        }
                      >
                        Required
                      </button> */}
                    </div>

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
                          className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                        ></button>
                      ) : null}
                    </div>
                    <table className="table-fixed text-left border-separate mb-3">
                      <tbody className="text-sm">
                        {this.state.headers !== null
                          ? Object.keys(this.state.headers).map((key) =>
                              this.state.headers[key]
                                ? this.input(
                                    "header",
                                    key,
                                    this.onInputChange,
                                    this.onRemoveBtnClick,
                                    ["", "uuid", "int", "str"],
                                    this.state.headers[key]
                                  )
                                : null
                            )
                          : null}
                      </tbody>
                    </table>
                    <div className="ml-auto">
                      {Object.keys(this.state.headers).length > 0 ? (
                        <button
                          name="header"
                          onClick={this.onAddBtnClick}
                          className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                        ></button>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* params  */}
              {this.props.endpoint.params ? (
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
                          className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                        ></button>
                      ) : null}
                    </div>
                    <table className="table-fixed text-left border-separate mb-3">
                      <tbody className="text-sm">
                        {this.state.params !== null
                          ? Object.keys(this.state.params).map((key) =>
                              this.state.params[key]
                                ? this.input(
                                    "param",
                                    key,
                                    this.onInputChange,
                                    this.onRemoveBtnClick,
                                    ["", "uuid", "int", "str"],
                                    this.state.params[key]
                                  )
                                : null
                            )
                          : null}
                      </tbody>
                    </table>
                    {Object.keys(this.state.params).length > 0 ? (
                      <button
                        name="param"
                        onClick={this.onAddBtnClick}
                        className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                      ></button>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {/* body  */}
              {this.props.endpoint.body &&
              this.state.requestMethod !== "GET" ? (
                <div className="card">
                  <div className="card-content justify-between items-center mb-3">
                    <div className="w-full">
                      <div className="flex justify-start items-center gap-x-1 mb-3">
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
                      {/* {Object.keys(this.state.payload).length === 0 ? (
                        <button
                          name="payload"
                          onClick={this.onAddBtnClick}
                          className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                        ></button>
                      ) : null} */}
                    </div>

                    <div className="w-full">
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
                                `${
                                  checked
                                    ? "bg-[#00bfff] text-white"
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
                        <tbody className="text-sm">
                          {this.state.payload !== null
                            ? Object.keys(this.state.payload).map((key) =>
                                this.state.payload[key]
                                  ? this.input(
                                      "payload",
                                      key,
                                      this.onInputChange,
                                      this.onRemoveBtnClick,
                                      OPTIONS,
                                      this.state.payload[key]
                                    )
                                  : null
                              )
                            : null}
                        </tbody>
                      </table>
                      {/* {Object.keys(this.state.payload).length > 0 ? ( */}
                      <button
                        name="payload"
                        onClick={this.onAddBtnClick}
                        className="h-5 w-5 ml-auto block bg-[#00bfff] rounded-full text-white shadow-md border-color-white hover:border"
                      ></button>
                      {/* ) : null} */}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* response  */}
              {this.props.endpoint.response ? (
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
                            description: "The API Response consists of the resolved data returned from the server - commonly formatted at JSON.",
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
                              readOnly
                            />
                          </td>
                          <td className="w-2/3">
                            <ComboBox
                              name={"responseCode"}
                              onChange={this.onInputChange}
                              options={["", "200", "300", "400", "500"]}
                              defaultValue={this.state.responseCode}
                            />
                          </td>
                        </tr>

                        <tr id={1}>
                          <td className="w-1/3">
                            <input
                              name={"responseMessage"}
                              className={`w-full input ${
                                this.state.errors.includes("responseMessage")
                                  ? "text-[red]"
                                  : null
                              }`}
                              value="Message"
                              readOnly
                            />
                          </td>
                          <td className="w-2/3">
                            <input
                              name="responseMessage"
                              defaultValue={this.state.responseMessage}
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
                <div className="card-content">
                  <div className="w-full">
                    <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                      <p className="text-sm">Name</p>
                      {/* <svg
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
                      </svg> */}
                    </div>
                    <input
                      name="name"
                      defaultValue={this.state.name}
                      onChange={this.onInputChange}
                      className={`w-full input ${
                        this.state.errors.includes("name") ? "red-ring" : ""
                      }`}
                    />
                  </div>
                  {/* description */}
                  <div className="w-full pt-6">
                    <div className="flex justify-end flex-row-reverse items-center gap-1 mb-3">
                      <p className="text-sm">Description</p>
                      {/* <svg
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
                      </svg> */}
                    </div>
                    <textarea
                      name="description"
                      defaultValue={this.state.description}
                      onChange={this.onInputChange}
                      className="w-full input"
                      rows="4"
                      placeholder="Add a summary of what this endpoint handles."
                    ></textarea>
                    <p className="text-xs text-right opacity-50">
                      Powered by{" "}
                      <a
                        href="https://alfinder.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alfinder
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* TODO for editEndpoint */}
              {/* {this.state.hasMethodURIConflict === true ? (
                <p className="text-[red]">
                  Combination of request method and URI must be unique.
                </p>
              ) : null} */}

              {/* submit  */}
              <div className="ml-auto text-center">
                <button onClick={this.submit} className="custom-btn btn-3">
                  <span>Update Endpoint</span>
                </button>
              </div>
            </div>
          </div>
        );
      }
    } else return null;
  }
}

const WrappedComponent = (props) => {
  const location = useLocation();

  return location.state ? (
    <EditEndpoint location={location} {...props} />
  ) : (
    <Navigate replace to='/endpoints' />
  );
};

const mapStateToProps = (state) => ({
  endpoint: store.getState().endpointReducer.editing,
  redirectTo: store.getState().endpointReducer.redirectTo,
});

export default connect(mapStateToProps, {
  updateEndpoint,
  retrieveEndpoint,
  openBadgeBanner,
  setNavBarOptions,
})(WrappedComponent);
