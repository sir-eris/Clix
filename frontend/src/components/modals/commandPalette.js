import React, { Component, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Combobox, Transition } from "@headlessui/react";
// import { SearchIcon } from "@heroicons/react/outline";

class Inner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      data: [
        { category: "C", title: "Group Nodes", command: "" },
        { category: "C", title: "Rearrange Flows", command: "" },
        { category: "C", title: "Create New Node", command: "" },
        { category: "N", title: "Logic", link: "/logic" },
        { category: "N", title: "Endpoints", link: "/endpoints" },
        { category: "N", title: "Models", link: "/models" },
        { category: "N", title: "Project Settings", link: "/settings" },
        { category: "N", title: "Projects", link: "/projects" },
        { category: "N", title: "User Accessibility", link: "/account" },
      ],
      query: "",
      filteredQuery: [],
    };

    this.oneKeyDown = this.oneKeyDown.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.closePalette = this.closePalette.bind(this);
    this.filteredQuery = this.filteredQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectedCommand = this.handleSelectedCommand.bind(this);
  }

  componentDidMount() {
    // this.props.getCommandPaletteData();

    window.addEventListener("keydown", this.oneKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.oneKeyDown);
  }

  oneKeyDown = (e) => {
    if (e.key === "/" || e.which === 191) {
      e.preventDefault();
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  closePalette() {
    this.setState({ isOpen: false });
  }

  handleSelectedCommand(command) {
    this.closePalette();
    switch (command.category) {
      case "N":
        this.props.navigate(command.link);
        return;
      case "C":
      default:
        return;
    }
  }

  filteredQuery = (val) => {
    if (val) {
      return this.state.data.filter((d) =>
        d.title.toLowerCase().includes(val.toLowerCase())
      )
    }
    return [];
  };

  handleSearch(e) {
    let fd = this.filteredQuery(e.target.value);
    this.setState({ query: e.target.value, filteredQuery: fd });
  }

  clearSearch() {
    this.setState({ query: "", filteredQuery: [] });
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
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            afterLeave={this.clearSearch}
          >
            <Combobox
              as="div"
              className="relative max-w-lg mx-auto bg-[white] ring-1 ring-black/5 rounded-xl shadow divide-y divide-gray-100 overflow-hidden"
              onChange={(command) => this.handleSelectedCommand(command)}
            >
              <div className="flex items-center">
                {/* <SearchIcon className="h-6 w-6 text-gray-500 mx-2" /> */}
                <Combobox.Input
                  onChange={this.handleSearch}
                  className="w-full text-lg rounded-xl focus:ring-0 h-16 px-6"
                  placeholder="Type a command or search..."
                />
              </div>
              <Combobox.Options
                static
                className="max-h-96 text-sm overflow-y-auto"
              >
                {/* commands */}
                {this.state.filteredQuery.length &&
                this.state.filteredQuery.filter((data) => data.category === "C")
                  .length ? (
                  <div className="border-b">
                    <p className="my-2 px-4 text-xs text-[gray] font-medium">
                      Commands
                    </p>
                    {this.state.filteredQuery
                      .filter((data) => data.category === "C")
                      .map((data, i) => (
                        <Combobox.Option key={"command_" + i} value={data}>
                          {({ active }) => (
                            <div className="w-full">
                              <div
                                className={`flex w-full justify-between item-center px-4 py-2 ${
                                  active
                                    ? "bg-[gray]/5 text-[black] border-l-4 border-[#00BFFF]"
                                    : "bg-[white] text-[gray]"
                                }`}
                              >
                                <div className="flex items-center space-x-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke={active ? "black" : "gray"}
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                                    />
                                  </svg>

                                  <p className="text-sm">{data.title}</p>
                                </div>

                                {/* right content */}
                                <span></span>
                              </div>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                  </div>
                ) : null}
                {/* Navigation */}
                {this.state.filteredQuery.length &&
                this.state.filteredQuery.filter((data) => data.category === "N")
                  .length ? (
                  <div className="border-b">
                    <p className="my-2 px-4 text-xs text-[gray] font-medium">
                      Navigation
                    </p>
                    {this.state.filteredQuery
                      .filter((data) => data.category === "N")
                      .map((data, i) => (
                        <Combobox.Option key={"link_" + i} value={data}>
                          {({ active }) => (
                            <div className="w-full">
                              <div
                                className={`flex w-full justify-between item-center px-4 py-2 ${
                                  active
                                    ? "bg-[gray]/5 text-[black] border-l-4 border-[#00BFFF]"
                                    : "bg-[white] text-[gray]"
                                }`}
                              >
                                <div className="flex items-center space-x-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke={active ? "black" : "gray"}
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                    />
                                  </svg>

                                  <p className="text-sm">{data.title}</p>
                                </div>

                                {/* right content */}
                                <span></span>
                              </div>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                  </div>
                ) : null}

                {!this.state.filteredQuery.length && this.state.query !== "" ? (
                  <p className="py-4 text-center text-[gray] text-xs">
                    Nothing found for "{this.state.query}"
                  </p>
                ) : null}
              </Combobox.Options>
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    );
  }
}

const CommandPalette = () => {
  const navigate = useNavigate();
  return <Inner navigate={navigate} />;
};

export default CommandPalette;
