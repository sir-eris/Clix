import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  retrieveModels,
  removeModel,
  removeModelField,
} from "../../../app/actions/Model";
import { retrieveProjects } from "../../../app/actions/Project";
import { checkPagesVisited } from "../../../app/actions/Auth";
// import ModelsWelcomeModal from "../../../components/modals/welcome/models";

class Models extends React.Component {
  constructor(props) {
    super(props);

    this.removeModel = this.removeModel.bind(this);
  }

  componentDidMount() {
    this.props.retrieveProjects();
    this.props.retrieveModels();

    this.props.checkPagesVisited("models");
  }

  removeModel(id) {
    this.props.removeModel(id);
  }

  removeModelField = (modelId, fieldId) => {
    this.props.removeModelField({modelId, fieldId})
  }

  render() {
    return this.props.models !== undefined && this.props.projects ? (
      <div className="flex flex-col justify-center pl-8 mb-24">
        {this.props.helmet}
        {this.props.models !== false ? (
          <div className="eighth-step mt-8">
            <p className="mb-2 font-light text-right">
              {Object.keys(this.props.models["API"]).length} Model
              {Object.keys(this.props.models["API"]).length > 1 ? "s" : null}
              {Object.keys(this.props.models["API"]).length === 0 ? "s" : null}
            </p>
            <hr />
            {this.props.models["API"].length > 0 ? (
              this.props.models["API"].map((model) => (
                <div key={model.id} className="w-full p-6 mb-6">
                  <div className="flex justify-between items-center mb-4 border-b">
                    <p className="mb-2 capitalize">{model.name}</p>
                    <div>
                      <Link
                        to={{
                          pathname: "/models/edit",
                        }}
                        state={{
                          id: model.id,
                        }}
                        className="signal edit relative inline-block mr-3 rounded-full hover:bg-[#00bfff]"
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
                      <button
                        onClick={() => this.removeModel(model.id)}
                        className="signal del relative rounded-full hover:bg-[#d63230]"
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
                    </div>
                  </div>
                  <table className="table-fixed w-full text-left text-[10px]">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2">Name</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">Null</th>
                        <th className="p-2">Blank</th>
                        <th className="p-2">Editable</th>
                        <th className="p-2">Unique</th>
                        <th className="p-2">PK</th>
                        <th className="p-2">Default</th>
                        <th className="p-2">Verbose</th>
                        <th className="p-2 w-[35px] whitespace-nowrap"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(model.fields).map((field) => (
                        <tr key={field} className="border-b hover:bg-gray-100">
                          <td className="p-2">{model.fields[field][1]}</td>
                          <td className="p-2">{model.fields[field][2]}</td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][5])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][6])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][7])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][8])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][9])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][3])}
                          </td>
                          <td className="p-2">
                            {JSON.stringify(model.fields[field][4])}
                          </td>
                          <td className="p-2">
                            <button
                              name="__name__"
                              onClick={() =>
                                this.removeModelField(
                                  model.id,
                                  model.fields[field][0]
                                )
                              }
                              className="signal del relative h-4 w-4 flex justify-center items-center rounded-full hover:bg-[#d63230]"
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
              ))
            ) : (
              <p className="text-sm text-center w-full rounded-lg bg-gray-100 py-12 mt-6">
                Create your first model.
              </p>
            )}
          </div>
        ) : this.props.projects.length === 0 ? (
          <p className="text-sm text-center text-[#00bfff] px-6 py-2 w-fit mx-auto my-12 hover:underline hover:underline-offset-1">
            <Link to="/projects/new">Create a project first.</Link>
          </p>
        ) : Object.values(this.props.projects).filter(
            (p) => p.is_active === true
          ).length === 0 ? (
          <p className="text-xs text-center text-[#00bfff] border-[#00bfff] border-2 bg-[#00bfff] bg-opacity-5 px-6 py-2 rounded-full w-fit mx-auto my-12">
            Activate a project.
          </p>
        ) : (
          <p className="text-xs text-center text-[#FF7B00] border-[#FF7B00] border-2 bg-[#FF7B00] bg-opacity-5 px-6 py-2 rounded-full w-fit mx-auto my-12">
            Please try again.
          </p>
        )}

        {/* {this.props.pages_visited === true ? (
            <ModelsWelcomeModal />
        ) : null} */}

        {this.props.projects.length > 0 &&
        Object.values(this.props.projects).filter((p) => p.is_active === true)
          .length > 0 ? (
          <div className="fixed bottom-0 right-0 pr-8 pb-8 grid grid-cols-1 gap-4">
            <Link to="new" className="custom-btn btn-3">
              <span>Create New Data Model</span>
            </Link>
          </div>
        ) : null}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  models: store.getState().modelReducer.payload,
  projects: store.getState().projectReducer.payload,
  pages_visited: store.getState().authReducer.pages_visited,
});

export default connect(mapStateToProps, {
  retrieveModels,
  removeModel,
  retrieveProjects,
  removeModelField,
  checkPagesVisited,
})(Models);
