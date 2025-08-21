import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import {
  updateProject,
  shareTemplate,
  removeProject,
  removeTemplate,
  updateTemplate,
  createTemplate,
  activateProject,
  retrieveProjects,
  retrieveTemplates,
  createProjectFromTemplate,
} from "../../../app/actions/Project";
import { checkPagesVisited } from "../../../app/actions/Auth";
// import ProjectsWelcomeModal from "../../../components/modals/welcome/projects";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameErrorsP: [],
      nameErrorsT: [],
      nameChangeP: [],
      nameChangeT: [],
    };

    this.onChangeNameP = this.onChangeNameP.bind(this);
    this.onChangeNameT = this.onChangeNameT.bind(this);
    this.shareTemplate = this.shareTemplate.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.deleteTemplate = this.deleteTemplate.bind(this);
    this.createTemplate = this.createTemplate.bind(this);
    this.activateProject = this.activateProject.bind(this);
    this.onProjectNameClick = this.onProjectNameClick.bind(this);
    this.projectFromTemplate = this.projectFromTemplate.bind(this);
  }

  componentDidMount() {
    this.props.retrieveProjects();
    this.props.retrieveTemplates();
    this.props.checkPagesVisited("projects");
  }

  deleteProject(id) {
    this.props.removeProject(id);
  }

  deleteTemplate(id) {
    this.props.removeTemplate(id);
  }

  createTemplate(id) {
    this.props.createTemplate(id);
  }

  projectFromTemplate(id) {
    this.props.createProjectFromTemplate(id);
  }

  shareTemplate(id) {
    this.props.shareTemplate(id);
  }

  onProjectNameClick = (e) => {
    if (e.detail > 1 && !this.state.nameChangeP.includes(e.target.id)) {
      this.setState({ nameChangeP: [e.target.id, ...this.state.nameChangeP] });
    }
  };

  onTemplateNameClick = (e) => {
    if (e.detail > 1 && !this.state.nameChangeT.includes(e.target.id)) {
      this.setState({ nameChangeT: [e.target.id, ...this.state.nameChangeT] });
    }
  };

  onChangeNameP(target) {
    let value = target.value;
    let id = target.name;
    if (
      (typeof value === "string" && value.trim() === "") ||
      value === null ||
      value === undefined
    ) {
      this.setState({ nameErrorsP: [id, ...this.state.nameErrorsP] });
    } else {
      if (this.state.nameErrorsP.includes(id)) {
        let err = this.state.nameErrorsP;
        let i = err.indexOf(id);
        err.splice(i, 1);
        this.setState({ [id]: value, nameErrorsP: err });
      } else this.setState({ [id]: value });
    }
  }

  onChangeNameT(target) {
    let value = target.value;
    let id = target.name;
    if (
      (typeof value === "string" && value.trim() === "") ||
      value === null ||
      value === undefined
    ) {
      this.setState({ nameErrorsT: [id, ...this.state.nameErrorsT] });
    } else {
      if (this.state.nameErrorsT.includes(id)) {
        let pn = this.state.nameErrorsT;
        let i = pn.indexOf(id);
        pn.splice(i, 1);
        this.setState({ [id]: value, nameErrorsT: pn });
      } else this.setState({ [id]: value });
    }
  }

  updateProjectName(id, name) {
    // if no errors
    if (!this.state.nameErrorsP.includes(id)) {
      // if it's been editing, actually
      if (this.state.nameChangeP.includes(id)) {
        this.props.updateProject({ id, name });
      }
      // either way remove from editing
      let err = this.state.nameChangeP;
      let i = err.indexOf(id);
      err.splice(i, 1);
      this.setState({ nameChangeP: err });
    } else {
      return;
    }
  }

  updateTemplateName(id, name) {
    // if no errors
    if (!this.state.nameErrorsT.includes(id)) {
      // if it's been editing, actually
      if (this.state.nameChangeT.includes(id)) {
        this.props.updateTemplate({ id, name });
      }
      // either way remove from editing
      let tn = this.state.nameChangeT;
      let i = tn.indexOf(id);
      tn.splice(i, 1);
      this.setState({ nameChangeT: tn });
    } else {
      return;
    }
  }

  activateProject(id) {
    this.props.activateProject(id);
  }

  render() {
    return (
      <>
        <div className="pl-8 mb-24">
          {this.props.helmet}
          {/* projects */}
          <div className="mt-8 h-[300px] overflow-y-auto">
            <div className="w-full">
              {this.props.projects !== undefined &&
              this.props.projects.length > 0 ? (
                <table className="table-fixed w-full text-left text-[10px]">
                  <thead>
                    <tr className="select-none">
                      <th className="border-b p-2 w-24">Token</th>
                      <th className="border-b p-2">Name</th>
                      <th className="border-b p-2">Last Edit</th>
                      <th className="border-b p-2">Created</th>
                      <th className="border-b p-2 w-20"></th>
                      <th className="border-b p-2"></th>
                      <th className="border-b p-2"></th>
                      <th className="border-b p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.projects.map((project) => (
                      <>
                        <tr
                          key={project.token}
                          className="border-b hover:bg-gray-100"
                        >
                          <td className="p-2 text-[#00bfff]">
                            <button
                              className="signal copy relative hover:underline"
                              onClick={() =>
                                navigator.clipboard.writeText(project.token)
                              }
                            >
                              {project.token}
                            </button>
                          </td>
                          <td className="p-2 overflow-scroll">
                            {this.state.nameChangeP.includes(project.id) ? (
                              <input
                                name={project.id}
                                className={`input w-full ${
                                  this.state.nameErrorsP.includes(project.id)
                                    ? "red-ring"
                                    : ""
                                }`}
                                defaultValue={project.name}
                                onKeyDown={(e) =>
                                  e.key === "Enter"
                                    ? this.updateProjectName(
                                        project.id,
                                        this.state[project.id]
                                          ? this.state[project.id]
                                          : project.name
                                      )
                                    : null
                                }
                                onChange={(e) => this.onChangeNameP(e.target)}
                              />
                            ) : (
                              <span
                                id={project.id}
                                onClick={this.onProjectNameClick}
                                className="cursor-pointer select-none"
                              >
                                {project.name}
                              </span>
                            )}
                          </td>
                          <td className="p-2">{project.last_edited}</td>
                          <td className="p-2">{project.created_at}</td>
                          <td className="p-2 text-center text-[#00bfff]">
                            {project.is_active ? (
                              <span className="text-[white] bg-[#00BFFF] rounded-full px-3 py-1 cursor-default">
                                Active
                              </span>
                            ) : (
                              <button
                                name="__name__"
                                className="hover:underline"
                                onClick={() => this.activateProject(project.id)}
                              >
                                Switch
                              </button>
                            )}
                          </td>
                          <td className="p-2 text-center">
                            <button className="text-gray-300 cursor-help" disabled title="API-Versioning will be released later this year.">
                              New Version
                            </button>
                          </td>
                          <td className="p-2 text-center text-[gray]">
                            <button
                              name="__name__"
                              className="hover:underline"
                              onClick={() => this.createTemplate(project.id)}
                            >
                              New Template
                            </button>
                          </td>
                          <td className="p-2 text-center text-[red]">
                            <button
                              name="__name__"
                              onClick={() => this.deleteProject(project.id)}
                              className="hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        {/* <tr className="w-full border-2 border-[#FF7B00] hover:bg-gray-100">
                        <td className="p-2">token</td>
                        <td className="p-2">v0.0.1</td>
                        <td className="p-2">Initial</td>
                        <td className="p-2">/v0.0.1</td>
                        <td className="p-2">Active</td>
                        <td className="p-2 text-center">switch</td>
                        <td className="p-2 text-center">copy</td>
                        <td className="p-2 text-center">delete</td>
                      </tr> */}
                      </>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-center w-full rounded-lg bg-gray-100 py-12">
                  Create your first project.
                </p>
              )}
            </div>
          </div>

          {/* templates */}
          <div className="mt-8 h-[300px] overflow-y-auto">
            <p className="text-lg mb-5">Templates</p>
            <div className="w-full">
              {this.props.templates !== undefined &&
              this.props.templates.length > 0 ? (
                <table className="table-fixed w-full text-left text-[10px]">
                  <thead>
                    <tr className="select-none">
                      <th className="border-b p-2 w-24">Token</th>
                      <th className="border-b p-2">Name</th>
                      <th className="border-b p-2 w-24">Endpoints</th>
                      <th className="border-b p-2 w-24">Models</th>
                      <th className="border-b p-2 w-24">Settings</th>
                      <th className="border-b p-2">Created</th>
                      <th className="border-b p-2 w-32"></th>
                      <th className="border-b p-2 w-32"></th>
                      <th className="border-b p-2 w-32"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.templates.map((template) => (
                      <tr
                        key={template.token}
                        className="border-b hover:bg-gray-100"
                      >
                        <td className="p-2 text-[#00bfff]">
                          <button
                            name="__name__"
                            className="signal copy relative hover:underline"
                            onClick={() =>
                              navigator.clipboard.writeText(template.token)
                            }
                          >
                            {template.token}
                          </button>
                        </td>
                        <td className="p-2 overflow-scroll">
                          {this.state.nameChangeT.includes(template.id) ? (
                            <input
                              name={template.id}
                              className={`input w-full ${
                                this.state.nameErrorsT.includes(template.id)
                                  ? "red-ring"
                                  : ""
                              }`}
                              defaultValue={template.name}
                              onKeyDown={(e) =>
                                e.key === "Enter"
                                  ? this.updateTemplateName(
                                      template.id,
                                      this.state[template.id]
                                        ? this.state[template.id]
                                        : template.name
                                    )
                                  : null
                              }
                              onChange={(e) => this.onChangeNameT(e.target)}
                            />
                          ) : (
                            <span
                              id={template.id}
                              onClick={this.onTemplateNameClick}
                              className="cursor-pointer select-none"
                            >
                              {template.name}
                            </span>
                          )}
                        </td>
                        {/* <td className="p-2">{template.framework}</td> */}
                        <td className="p-2">{template.endpoints}</td>
                        <td className="p-2">{template.data_models}</td>
                        <td className="p-2">{template.settings}</td>
                        <td className="p-2">{template.created_at}</td>
                        <td className="p-2 text-center text-[gray]">
                          <button
                            name="__name__"
                            onClick={() =>
                              this.projectFromTemplate(template.id)
                            }
                            className="hover:underline"
                          >
                            New Project
                          </button>
                        </td>
                        <td className="p-2 text-center text-[#FF7B00]">
                          <button
                            name="__name__"
                            className="hover:underline cursor-help"
                            title="This feature is being released on a selective basis."
                          >
                            Share
                          </button>
                        </td>
                        <td className="p-2 text-center text-[red]">
                          <button
                            name="__name__"
                            onClick={() => this.deleteTemplate(template.id)}
                            className="hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-center w-full rounded-lg bg-gray-100 py-12">
                  Create your first template.
                </p>
              )}
            </div>
          </div>

          {/* button */}
          <div className="fixed bottom-0 right-0 pr-8 pb-8 grid grid-cols-1 gap-4">
            <a href="/projects/new" className="custom-btn btn-3">
              <span>Create New Project</span>
            </a>
          </div>
        </div>

        {/* {this.props.pages_visited === true ? <ProjectsWelcomeModal /> : null} */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: store.getState().projectReducer.payload,
  templates: store.getState().projectReducer.templates,
  pages_visited: store.getState().authReducer.pages_visited,
});

export default connect(mapStateToProps, {
  updateProject,
  shareTemplate,
  removeProject,
  createTemplate,
  removeTemplate,
  updateTemplate,
  activateProject,
  retrieveProjects,
  retrieveTemplates,
  checkPagesVisited,
  createProjectFromTemplate,
})(Projects);
