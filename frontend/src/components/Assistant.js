import React, { Component, Fragment } from "react";
import Prism from "prismjs";
import { CodeJar } from "codejar";
import { useNavigate } from "react-router-dom";
import { withLineNumbers } from "codejar/linenumbers";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { nodeTypes } from "../pages/logic/nodes";

import "../styling/prism.css";
// import "../js/prism"

class Inner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.oneKeyDown = this.oneKeyDown.bind(this);
    this.closePalette = this.closePalette.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.oneKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.oneKeyDown);
  }

  oneKeyDown = (e) => {
    if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  closePalette() {
    this.setState({ isOpen: false });
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
            <div className="relative max-w-5xl h-[66vh] mx-auto border-2 bg-[white] rounded-xl shadow">
              {/* header */}
              <div className="relative w-full py-3 text-base font-medium">
                <button className="absolute left-3 top-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="gray"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
                <input
                  className="input w-96 mx-auto block"
                  placeholder="Search Modules, Nodes, Schemas, ..."
                />
              </div>
              <hr className="m-0" />

              {/* content */}
              <div className="w-full h-full overflow-auto"></div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    );
  }
}

const Assistant = ({ nodes, addNode }) => {
  const navigate = useNavigate();
  return <Inner navigate={navigate} nodes={nodes} addNode={addNode} />;
};

export default Assistant;
