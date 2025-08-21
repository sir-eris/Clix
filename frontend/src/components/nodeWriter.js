import React, { Component, Fragment } from "react";
import Prism from "prismjs";
import { CodeJar } from "codejar";
import { useNavigate } from "react-router-dom";
import { withLineNumbers } from "codejar/linenumbers";
import {
  Dialog,
  Listbox,
  Combobox,
  RadioGroup,
  Transition,
} from "@headlessui/react";

// import "../styling/prism.css";
// import "../js/prism"

class Inner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      page: 0,
      iNode: {},
      oNode: {},
      title: "",
      accentColor: "",
      description: "",
      elements: [],
    };

    this.nodes = props.nodes;
    this.addNode = props.addNode;

    // this.init = this.init.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    
    this.addElement = this.addElement.bind(this);
    this.showElement = this.showElement.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.previewNodeElement = this.previewNodeElement.bind(this);

    this.oneKeyDown = this.oneKeyDown.bind(this);
    this.closePalette = this.closePalette.bind(this);
    // this.createNewNode = this.createNewNode.bind(this);
  }

  componentDidMount() {
    // this.setState({ elements: [] });
    window.addEventListener("keydown", this.oneKeyDown, { passive: true });
  }
  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.oneKeyDown);
  //   this.setState({ elements: [] });
  // }
  oneKeyDown = (e) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      // e.preventDefault();
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  closePalette() {
    this.setState({ isOpen: false });
  }

  init() {
    if (this.editor !== undefined) return;

    this.editor = document.getElementById("editor");
    if (!this.editor) {
      return;
    }
    const jar = CodeJar(this.editor, withLineNumbers(Prism.highlightElement), {
      tab: "\t",
    });

    // Update code
    jar.updateCode(
      'function X12BF1(title="", INPUT_1, INPUT_2) {\n\treturn true;\n}'
    );

    // Get code
    // let code = jar.toString();

    // Listen to updates
    // jar.onUpdate((code) => {
    //   console.log(code);
    // });
  }
  createNewNode() {
    let id = Math.random() + "";
    this.addNode({
      id: id,
      type: "customNode",
      position: { x: 500, y: 500 },
      data: {
        header: {
          title: "New Function!",
          iNode: {},
          oNode: {},
        },
        content: {
          0: {
            type: "text",
            title: id,
          },
        },
      },
    });
    // this.setState({ isOpen: false })
  }

  onInputChange = (e) => {
    const name = e.target?.name
    if (name === undefined) return;
    const value = e.target.value;

    switch (name) {
      case "accentColor":
        this.setState({accentColor : value})
        return;
      case "title":
        this.setState({title : value})
        return;
      case "description":
        this.setState({description : value})
        return;
    }
  }

  showElement(el) {
    const id = el.id;
    const type = el.type;

    switch (type) {
      case "text":
        return (
          <div
            key={id}
            className="relative border-b pb-4 hover:bg-gray-100 transition-colors"
          >
            <div className="flex w-full justify-between items-center pr-3">
              <p className="block w-min whitespace-nowrap uppercase text-[10px] text-[#fff] bg-gray-600 px-1 mt-[-20px]">
                One
              </p>
              <button id={id} onClick={this.removeElement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1 mt-1 stroke-gray-600 hover:stroke-[red]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-5 mb-2">
              <strong className="uppercase text-[gray] text-[10px]">
                static text
              </strong>
              <input
                name={id}
                className="w-full input shadow placeholder:text-xs"
                placeholder="The <p>'s inner HTML."
              />
            </div>
          </div>
        );
      case "input":
        return (
          <div
            key={id}
            className="relative border-b pb-4 hover:bg-gray-100 transition-colors"
          >
            <div className="flex w-full justify-between items-center pr-3">
              <p className="block w-min whitespace-nowrap uppercase text-[10px] text-[#fff] bg-gray-600 px-1 mt-[-20px]">
                One
              </p>
              <button id={id} onClick={this.removeElement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1 mt-1 stroke-gray-600 hover:stroke-[red]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-5">
              <strong className="uppercase text-[gray] text-[10px]">
                Input Field
              </strong>
              <div className="flex justify-between gap-x-2">
                <input
                  name={id}
                  className="w-full input shadow placeholder:text-xs"
                  placeholder="The <input>'s <label>."
                  defaultValue={el.title}
                />
                <input
                  name={id}
                  className="w-full input shadow placeholder:text-xs"
                  placeholder="The <input>'s placeholder attribute."
                  defaultValue={el.placeholder}
                />
              </div>
            </div>
          </div>
        );
      case "dropdown":
      case "radio":
        return (
          <div
            key={id}
            className="relative border-b pb-4 hover:bg-gray-100 transition-colors"
          >
            <div className="flex w-full justify-between items-center pr-3">
              <p className="block w-min whitespace-nowrap uppercase text-[10px] text-[#fff] bg-gray-600 px-1 mt-[-13px] mb-2">
                One
              </p>
              <button id={id} onClick={this.removeElement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1 mt-1 stroke-gray-600 hover:stroke-[red]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-5">
              <strong className="block uppercase text-[gray] text-[10px] mb-2">
                {type}
              </strong>
              <div className="w-full mb-3">
                {/* <label className="text-sm pl-1">Title</label> */}
                <input
                  defaultValue={el.title}
                  className="w-full input shadow placeholder:text-xs"
                  placeholder="Title in the Node."
                />
              </div>
              <div className="ml-3">
                <div className="flex justify-between items-center mb-2">
                  <strong className="uppercase text-[gray] text-[10px]">
                    options
                  </strong>
                  <button className="text-gray-600 hover:text-[#00BFFF] text-xs">
                    Add
                  </button>
                </div>
                {Object.values(el.items).map((item) => (
                  <div className="grid grid-cols-2 gap-x-3 mb-4">
                    <div className="w-full">
                      {/* <label className="text-sm pl-1">{item.title}</label> */}
                      <input
                        defaultValue={item.value}
                        className="w-full input shadow placeholder:text-xs"
                        placeholder="<option>'s inner HTML"
                      />
                    </div>
                    <div className="w-full">
                      {/* <label className="text-sm pl-1">{item.type}</label> */}
                      <input
                        className="w-full input shadow placeholder:text-xs"
                        placeholder="<option>'s value attribute."
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <p>wrong type</p>;
    }
  }

  addElement(e) {
    let el;
    const id = this.state.elements.length;

    switch (e?.target?.name) {
      case "text":
        el = {
          id: id,
          type: "text",
          title: id,
        };
        this.setState({ elements: [...this.state.elements, el] });
        return;
      case "dropdown":
        el = {
          id: id,
          title: "the title",
          type: "dropdown",
          name: "form_name",
          items: {
            0: {
              title: "Option 1 title",
              value: "option 1 value",
              type: "int",
            },
          },
        };
        this.setState({ elements: [...this.state.elements, el] });
        return;
      case "radio":
        el = {
          id: id,
          title: "the title",
          type: "radio",
          name: "form_name",
          items: {
            0: {
              title: "Option 1 title",
              value: "option 1 value",
            },
          },
        };
        this.setState({ elements: [...this.state.elements, el] });
        return;
      case "input":
        el = {
          id: id,
          title: "please enter field",
          type: "input",
          placeholder: "placeholder",
        };
        this.setState({ elements: [...this.state.elements, el] });
        return;
      default:
        console.log("error: " + e);
        return;
    }
  }

  removeElement(e) {
    const id = Number(e.target.id)
    let els = this.state.elements;
    els.map(el => {
      if (el.id === id) {
        let i = els.indexOf(el);
        els.splice(i, 1);
        this.setState({ elements: els });
        return;
      }
    })
  }

  previewNodeElement(el) {
    const id = el.id;
    const type = el.type;

    switch (type) {
      case "text":
        return (
          <div key={id} className="mb-6 px-2">
            <p>{el.title}</p>
          </div>
        );
      case "dropdown":
        return (
          <div key={id} className="mb-6 px-2">
            <Listbox>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default input py-2 shadow ">
                  <span className="block truncate">
                    {/* {selectedModel?.name ? selectedModel.name : "select model"} */}
                    {el.title}
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
                    {Object.values(el.items).map((item, itemIdx) => (
                      <Listbox.Option
                        key={itemIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-6 pr-4 ${
                            active
                              ? "bg-[#00BFFF] text-[#fff]"
                              : "text-gray-900"
                          }`
                        }
                        value={item.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.title}
                              </span>
                              {/* <span
                                className={`text-xs ${
                                  selected || active
                                    ? "text-[#fff]"
                                    : "text-[gray]"
                                }`}
                              >
                                {item.records} records
                              </span> */}
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            {/* <select name={el.name}>
              {Object.values(el.items).map((item) => (
                <option value={item.value}>{item.title}</option>
              ))}
            </select> */}
          </div>
        );
      case "radio":
        const keys = Object.keys(el.items);
        return (
          <div key={id} className="mb-6 px-2">
            <RadioGroup
              name="requestMethod"
              // value={this.state.requestMethod}
              // onChange={this.onInputChange}
            >
              <div className="flex flex-wrap">
                {keys.map((key) => (
                  <RadioGroup.Option
                    value={el.items[key].value}
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
                            {el.items[key].title}
                          </RadioGroup.Label>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            {/* <div className="flex flex-wrap gap-4">
              {Object.values(el.items).map((item) => (
                <div className="px-4 py-1 rounded-full border shadow hover:bg-[#00bfff] hover:text-[#fff] text-xs">
                  {item.title}
                </div>
              ))}
            </div> */}
          </div>
        );
      case "input":
        return (
          <div key={id} className="mb-6 px-2">
            <label>{el.title}</label>
            <input className="w-full input" placeholder={el.placeholder} />
          </div>
        );
      default:
        return <p>wrong type</p>;
    }
  }

  nextPage() {
    if (this.state.page + 1 === this.state.page.length) {
      this.setState({ page: 0 });
    } else {
      this.setState({ page: this.state.page + 1 });
    }
    return
  }
  prevPage() {
    if (this.state.page - 1 === -1) {
      this.setState({ page: 0 });
    } else {
      this.setState({ page: this.state.page - 1 });
    }
    return;
  }

  render() {
    return (
      <Transition.Root show={this.state.isOpen} as={Fragment}>
        <Dialog
          onClose={this.closePalette}
          className="fixed inset-0 pt-[15vh] overflow-y-auto z-50"
        >
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[gray]/60" />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90 h-1/6"
            enterTo="opacity-100 scale-100 h-full"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 h-full"
            leaveTo="opacity-0 scale-90 h-1/6"
            afterLeave={this.clearSearch}
          >
            <div
              className={`relative ${
                this.state.page === 1 ? "max-w-5xl" : "max-w-2xl"
              } h-[66vh] mx-auto border-2 bg-[white] rounded-xl shadow transition-all`}
            >
              {/* header */}
              <div className="relative flex justify-between items-center w-full py-3 text-base font-medium px-4 border-b">
                <p>Create New Node</p>
              </div>

              {/* node misc info */}
              {this.state.page === 0 ? (
                <div className="relative w-full no-header-new-node-modal-h overflow-hidden">
                  {/* <div className="w-full bg-gray-100 shadow-inner flex flex-wrap justify-end gap-x-2 py-2 px-5 overflow-x-scroll">
                    <p className="text-[11px] font-medium text-gray-800">
                      Built by <i>username</i>
                    </p>
                    <div className="w-4 h-4 rounded-md shadow border bg-[#fff]"></div>
                  </div> */}

                  <div className="w-full h-full overflow-auto">
                    <div className="py-6 border-b px-8 hover:bg-gray-100">
                      <p className="font-medium text-sm mb-2">Node Title</p>
                      <input
                        className="w-full input"
                        name="title"
                        onChange={this.onInputChange}
                        value={this.state.title}
                      />
                    </div>
                    <div className="py-6 border-b px-8 hover:bg-gray-100">
                      <p className="font-medium text-sm mb-4">Accent Color</p>
                      <RadioGroup
                        name="accentColor"
                        onChange={this.onInputChange}
                        value={this.state.accentColor}
                      >
                        <div className="flex flex-wrap justify-center">
                          {[
                            {
                              color: "#FB5607",
                              title: "Orange Pantone",
                            },
                            {
                              color: "#FF006E",
                              title: "Winter Sky",
                            },
                            {
                              color: "#8338EC",
                              title: "Blue Violet",
                            },
                            {
                              color: "#FFBE0B",
                              title: "Amber",
                            },
                            {
                              color: "#3A86FF",
                              title: "Azure",
                            },
                            {
                              color: "#2A9D8F",
                              title: "Persian Green",
                            },
                          ].map((color) => (
                            <RadioGroup.Option
                              value={{
                                target: {
                                  name: "accentColor",
                                  value: color.color,
                                },
                              }}
                              className="relative mx-3 cursor-pointer focus:outline-none"
                            >
                              {({ active, checked }) => (
                                <>
                                  <div className="flex flex-col w-full items-center justify-between">
                                    <div
                                      style={{ backgroundColor: color.color }}
                                      className={`w-16 h-16 mb-2 rounded-full border-2 shadow-sm ${
                                        this.state.accentColor === color.color
                                          ? "border-2 border-[#fff] ring-[#00bfff] ring-4"
                                          : ""
                                      }`}
                                    ></div>
                                    <RadioGroup.Label
                                      as="small"
                                      className="text-[#002147] text-xs"
                                    >
                                      {color.title}
                                    </RadioGroup.Label>
                                  </div>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="py-6 px-8 hover:bg-gray-100">
                      <p className="font-medium text-sm mb-2">
                        Add Description
                      </p>
                      <textarea
                        className="w-full input py-2"
                        name="description"
                        onChange={this.onInputChange}
                        value={this.state.description}
                        rows={4}
                        placeholder="Add a small description for documentation purposes."
                      ></textarea>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* elements */}
              {this.state.page === 1 ? (
                <div className="relative flex flex-col w-full no-header-new-node-modal-h overflow-hidden">
                  {/* element buttons */}
                  <div className="bg-gray-100 shadow-inner flex flex-wrap justify-center gap-x-2 p-5 overflow-x-scroll">
                    <button
                      title="This is your normal <p> tag."
                      name="text"
                      onClick={this.addElement}
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      STATIC TEXT
                    </button>
                    <button
                      title="This is your normal <select> tag."
                      name="dropdown"
                      onClick={this.addElement}
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      DROPDOWN
                    </button>
                    <button
                      title='This is your normal <input type="radio"> tag.'
                      name="radio"
                      onClick={this.addElement}
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      RADIO
                    </button>
                    <button
                      title='This is your normal <input type="text"> tag.'
                      name="input"
                      onClick={this.addElement}
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      INPUT
                    </button>
                    <button
                      title="This is your normal <details> tag."
                      name="collection"
                      onClick={this.addElement}
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      COLLECTION
                    </button>
                  </div>

                  {/* content */}
                  <div
                    className={`h-full mb-20 overflow-auto flex flex-1 ${
                      !this.state.elements.length ? "m-8" : "flex-col"
                    }`}
                  >
                    <div
                      className={`w-full h-full grid grid-cols-2 ${
                        !this.state.elements.length ? "gap-x-4" : null
                      }`}
                    >
                      {!this.state.elements.length ? (
                        // no elements
                        <>
                          <div className="w-full h-full flex justify-center items-center text-gray-400 border-4 rounded border-dashed">
                            <p>Select Elements</p>
                          </div>
                          <div className="w-full h-full flex justify-center items-center text-gray-400 border-4 rounded border-dashed">
                            <p>Node Preview</p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* elements editor */}
                          <div className="relative w-full h-full overflow-auto">
                            <p className="sticky top-0 bg-[#fff] z-30 text-center text-gray-600 font-bold text-sm py-3 border-b">
                              Elements
                            </p>
                            <div className="overflow-auto">
                              {this.state.elements.map((el) =>
                                el ? this.showElement(el) : null
                              )}
                            </div>
                          </div>

                          {/* live preview */}
                          <div className="relative w-full h-full pb-8 overflow-auto transition-all border-l select-none">
                            <p className="sticky top-0 bg-[#fff] z-30 text-center text-gray-600 font-bold text-sm py-3 border-b">
                              Preview
                            </p>
                            <div className="flex items-start justify-center pt-5">
                              {/* node preview */}
                              <div className="w-4/5 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto transition-all shadow-xl">
                                {/* header */}
                                <div className="relative w-full border-[#00bff] h-12 text-base font-medium text-[#002147] mb-3 border-b-2">
                                  {this.state?.iNode ? (
                                    <div
                                      id="rs-0"
                                      className="absolute left-0 top-[19px] block w-3 h-3 rounded-full bg-[#00BFFF] ml-3"
                                    ></div>
                                  ) : null}
                                  <p
                                    className={`block ${
                                      this.state?.iNode ? "pl-9" : "pl-4"
                                    } ${this.state?.oNode ? "pr-9" : "pr-4"}`}
                                  >
                                    {this.state.title}
                                  </p>
                                  {this.state?.oNode ? (
                                    <div
                                      id="rs-1"
                                      className="absolute right-0 top-[19px] block w-3 h-3 rounded-full bg-[#00BFFF] mr-3"
                                    ></div>
                                  ) : null}
                                </div>

                                {/* content */}
                                <div className="px-3 transition-all">
                                  {this.state.elements.map((el) =>
                                    el ? this.previewNodeElement(el) : null
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* function */}
              {this.state.page === 2 ? (
                <div className="relative flex flex-col w-full no-header-new-node-modal-h overflow-hidden">
                  <div className="bg-gray-100 shadow-inner flex flex-wrap justify-center gap-x-2 p-5 overflow-x-scroll">
                    <div
                      title="This is your normal <p> tag."
                      className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin"
                    >
                      STATIC TEXT
                    </div>
                    <div className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin">
                      DROPDOWN
                    </div>
                    <div className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin">
                      RADIO
                    </div>
                    <div className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin">
                      INPUT
                    </div>
                    <div className="flex justify-center items-center text-center rounded-lg bg-[#fff] h-10 w-28 border shadow text-gray-400 hover:border-gray-400 hover:shadow-inner hover:text-[#333] transition-all text-sm select-none font-thin">
                      COLLECTION
                    </div>
                  </div>

                  <div className="flex flex-1 justify-center items-center h-full m-8 mb-20 text-gray-400 border-4 rounded border-dashed">
                    Select Function
                  </div>
                </div>
              ) : null}

              {/* buttons */}
              <div className="absolute bottom-5 w-full flex justify-between px-5">
                {this.state.page === 0 ? (
                  <>
                    <span></span>
                    <button
                      className="rounded px-3 text-sm text-[#00bfff] hover:underline"
                      onClick={this.nextPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                      Elements
                    </button>
                  </>
                ) : null}

                {this.state.page === 1 ? (
                  <>
                    <button
                      className="rounded px-3 text-sm text-[#00bfff] hover:underline"
                      onClick={this.prevPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      Configuration
                    </button>
                    <button
                      className="rounded px-3 text-sm text-[#00bfff] hover:underline"
                      onClick={this.nextPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                      Function
                    </button>
                  </>
                ) : null}

                {this.state.page === 2 ? (
                  <>
                    <button
                      className="rounded px-3 text-sm text-[#00bfff] hover:underline"
                      onClick={this.prevPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                      Elements
                    </button>
                    <button
                      className="rounded px-3 text-sm text-[#00bfff] hover:underline"
                      onClick={this.createNode}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                      Create Node
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    );
  }
}

const NodeWriter = ({ nodes, addNode }) => {
  const navigate = useNavigate();
  return <Inner navigate={navigate} nodes={nodes} addNode={addNode} />;
};

export default NodeWriter;
