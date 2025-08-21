import React, { Component } from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkPagesVisited } from "../../../app/actions/Auth";
// import EndpointsWelcomeModal from "../../../components/modals/welcome/endpoints";
import {
  retrieveEndpoints,
  removeEndpoint,
} from "../../../app/actions/Endpoint";
import { retrieveProjects } from "../../../app/actions/Project";
import {
  setNavBarOptions,
  // setModalInfo,
} from "../../../app/actions/Notification";

class Endpoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: null,
      selected: [],
      displayWelcomeModal: false,
    };

    this.setSortBy = this.setSortBy.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.removeEndpoint = this.removeEndpoint.bind(this);
  }

  componentDidMount() {
    this.props.retrieveProjects();
    this.props.retrieveEndpoints();

    // reset navbar options
    this.props.setNavBarOptions({
      0: { title: "Versions", callback: () => {} },
    });

    this.props.checkPagesVisited("endpoints");

    // if (this.props.pages_visited) {
    //   if (this.props.pages_visited?.endpoints) {
    //     this.setState({displayWelcomeModal: true});
    //   }
    // }
  }

  removeEndpoint(id) {
    this.props.removeEndpoint(id);
    // TODO
    // this.props.setModalInfo({
    //   title: "title",
    //   description: "desc",
    //   buttons: [{ color: "red", text: 'click me', callback: function(){console.log('HI')}}],
    // });
  }

  setSortBy(name) {
    if (name === this.state.sortBy) this.setState({ sortBy: null });
    else this.setState({ sortBy: name });
  }

  selectItem(e, id) {
    if (e.which === 16) {
      this.setState({ selected: [...this.state.selected, id] });
    } else {
      this.setState({ selected: [id] });
    }
  }

  render() {
    // TODO FUCKING STUPID BUG
    // if (this.props?.redirectTo !== undefined && this.props.redirectTo !== "/endpoints") {
    //   return <Navigate replace to={this.props.redirectTo} />;
    // }
    // if (this.props?.authRedirectTo !== undefined && this.props.authRedirectTo !== "endpoints") {
    //   return <Navigate replace to={this.props.authRedirectTo} />;
    // }

    if (!this.props.projects || !this.props.projects.length) {
      return (
        <>
          {this.props.helmet}
          <p className="text-sm text-center text-[#00bfff] px-6 py-2 w-fit mx-auto my-12 hover:underline hover:underline-offset-1">
            <Link to="/projects/new">Create a project first.</Link>
          </p>
        </>
      );
    } else {
      if (
        Object.values(this.props.projects).filter((p) => p.is_active === true)
          .length === 0
      ) {
        return (
          <>
            {this.props.helmet}
            <p className="text-xs text-center text-[#00bfff] border-[#00bfff] border-2 bg-[#00bfff] bg-opacity-5 px-6 py-2 rounded-full w-fit mx-auto my-12">
              Activate a project.
            </p>
          </>
        );
      }
    }

    if (this.props.endpoints !== undefined) {
      return (
        <div className="flex flex-col justify-center pl-8 mb-24">
          {this.props.helmet}

          {this.props.endpoints !== false ? (
            <div className="mt-8">
              <p className="mb-2 font-light text-right">
                {this.props.endpoints["API"].length} Endpoint
                {this.props.endpoints["API"].length > 1 ? "s" : null}
                {this.props.endpoints["API"].length === 0 ? "s" : null}
              </p>
              <hr />
              {this.props.endpoints["API"].length > 0 ? (
                <div className="w-full p-6">
                  <table className="w-full table-fixed text-left text-[10px]">
                    <thead>
                      <tr className="border-b select-none">
                        <th className="p-2 w-24">Status</th>
                        <th
                          className="p-2 cursor-pointer"
                          onClick={() => this.setSortBy("name")}
                        >
                          <div className="flex justify-between items-center">
                            <span className="block">Name</span>
                            <span className="block">
                              {this.state.sortBy === "name" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="black"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="gray"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        </th>
                        <th
                          className="p-2 cursor-pointer"
                          onClick={() => this.setSortBy("method")}
                        >
                          <div className="flex justify-between items-center">
                            <span className="block">Method</span>
                            <span className="block">
                              {this.state.sortBy === "method" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={3}
                                  stroke="black"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="gray"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        </th>
                        <th className="p-2">Path</th>
                        <th className="p-2">Params</th>
                        <th className="p-2">Headers</th>
                        <th className="border-b w-[50px] whitespace-nowrap"></th>
                        <th className="border-b w-[50px] whitespace-nowrap"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(this.props.endpoints["API"])
                        .sort((a, b) => {
                          switch (this.state.sortBy) {
                            case "name":
                              if (
                                String(a[1].name).toLowerCase() >
                                String(b[1].name).toLowerCase()
                              )
                                return 1;
                              else return -1;
                            case "method":
                              if (
                                String(a[1].request.method).toLowerCase() >
                                String(b[1].request.method).toLowerCase()
                              )
                                return 1;
                              else return -1;
                            default:
                              return 0;
                          }
                        })
                        .map((el) => el[1])
                        .map((endpoint) => (
                          <tr
                            key={endpoint.id}
                            className={`border-b hover:bg-gray-100 ${
                              this.state.selected.includes(endpoint.id)
                                ? "bg-gray-100"
                                : null
                            }`}
                            onClick={(e) => this.selectItem(e, endpoint.id)}
                          >
                            <td className="p-2">
                              {/* TODO */}
                              {endpoint.is_draft ? (
                                <button
                                  name="__name__"
                                  className="signal draft relative h-4 w-4 flex justify-center items-center ml-2 rounded-full text-white hover:bg-[#FF7B00]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#FF7B00"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                    />
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  name="__name__"
                                  className="signal ok relative h-4 w-4 flex justify-center items-center ml-2 rounded-full text-white hover:bg-[#4BFB80]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#4BFB80"
                                    className="w-4 h-4 border-[#4BFB80] border rounded-full"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              )}
                            </td>
                            <td className="p-2">{endpoint.name}</td>
                            <td className="p-2">{endpoint.request.method}</td>
                            <td className="p-2">/{endpoint.request.uri}</td>
                            <td className="p-2">
                              {endpoint.params ? "/" + endpoint.params : "none"}
                            </td>
                            <td className="p-2">
                              {endpoint.auth_required ? "Auth" : null}
                              {endpoint.headers && endpoint.auth_required
                                ? "Auth, " + endpoint.headers
                                : endpoint.headers && !endpoint.auth_required
                                ? endpoint.headers
                                : null}
                              {!endpoint.auth_required && !endpoint.headers
                                ? "none"
                                : null}
                            </td>
                            <td className="p-2">
                              <Link
                                to={{
                                  pathname: "/endpoints/edit",
                                }}
                                state={{ id: endpoint.id }}
                                className="signal edit relative h-4 w-4 flex justify-center items-center rounded-full hover:bg-[#00bfff]"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#00bfff"
                                  className="w-4 h-4 rounded-full"
                                >
                                  <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                                </svg>
                              </Link>
                            </td>
                            <td className="p-2">
                              <button
                                name="__name__"
                                onClick={() => this.removeEndpoint(endpoint.id)}
                                className="signal del relative transition-all h-4 w-4 flex justify-center items-center rounded-full hover:bg-[#d63230]"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="#d63230"
                                  className="w-4 h-4 border-[#d63230] border rounded-full"
                                >
                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-center w-full rounded-lg bg-gray-100 py-12 mt-6">
                  Create your first endpoint.
                </p>
              )}
              {this.props.projects.length > 0 &&
              Object.values(this.props.projects).filter(
                (p) => p.is_active === true
              ).length > 0 ? (
                <div className="fixed bottom-0 right-0 pr-8 pb-8 grid grid-cols-1 gap-4">
                  <Link to="new" className="custom-btn btn-3">
                    <span>Create New Endpoint</span>
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-xs text-center text-[#FF7B00] border-[#FF7B00] border-2 bg-[#FF7B00] bg-opacity-5 px-6 py-2 rounded-full w-fit mx-auto my-12">
              Please try again.
            </p>
          )}

          {/* {this.props.pages_visited === true ? <EndpointsWelcomeModal /> : null} */}

          {this.props.projects.length > 0 &&
          Object.values(this.props.projects).filter((p) => p.is_active === true)
            .length > 0 ? (
            <div className="sixth-step fixed bottom-0 right-0 pr-8 pb-8 grid grid-cols-1 gap-4">
              <Link to="new" className="custom-btn btn-3">
                <span>Create New Endpoint</span>
              </Link>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  projects: store.getState().projectReducer.payload,
  endpoints: store.getState().endpointReducer.payload,
  authRedirectTo: store.getState().authReducer.redirectTo,
  redirectTo: store.getState().accountReducer.redirectTo,
  pages_visited: store.getState().authReducer.pages_visited,
});

export default connect(mapStateToProps, {
  // setModalInfo,
  removeEndpoint,
  retrieveProjects,
  setNavBarOptions,
  retrieveEndpoints,
  checkPagesVisited,
})(Endpoints);
