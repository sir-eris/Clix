import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  retrieveProjectSettings,
  updateSettings,
  retrieveProjects,
} from "../../../app/actions/Project";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: null,
      errors: [],
    };

    this.row = this.row.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeSetting = this.removeSetting.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.updateSettings = this.updateSettings.bind(this);
  }

<<<<<<< HEAD:src/pages/project/Settings.js
  componentDidMount = () => {
    this.props.retrieveProjectSettings();
=======
  componentDidMount = async () => {
    await this.props.retrieveProjects();
    await this.props.retrieveProjectSettings();
>>>>>>> modular-redesign:src/pages/dash/project/Settings.js
  };

  row = (id) => {
    let name, value;
    name = this.state.fields[id][0];
    value = this.state.fields[id][1];
    return (
      <>
        <div className="w-full grid grid-cols-2 gap-x-6">
          <div className="">
            <label for={id + "_0"} className="text-sm">
              Name
            </label>
            <input
              id={id + "_0"}
              name={id + "_0"}
              defaultValue={name}
              onChange={this.onInputChange}
              className={`input w-full ${
                this.state.errors.includes(id + "_0") ? "red-ring" : null
              }`}
            />
          </div>

          <div className="">
            <label for={id + "_1"} className="text-sm">
              Value
            </label>
            <input
              id={id + "_1"}
              name={id + "_1"}
              defaultValue={value}
              onChange={this.onInputChange}
              className={`input w-full ${
                this.state.errors.includes(id + "_1") ? "red-ring" : null
              }`}
            />
          </div>
        </div>

        <div className="ml-auto w-fit">
          <button
            onClick={() => this.removeSetting(id)}
            className="text-xs text-center text-[#d63230] h-full"
          >
            remove
          </button>
        </div>
        <hr className="my-6" />
      </>
    );
  };

  onInputChange = (e) => {
    // preexisting
    const name = e.target.name.split("_");
    // console.log(this.state.errors, name);
    if (e.target.name[0] === "_") {
      if (parseInt(name[2]) === 0) {
        // name
        this.state.fields["_" + name[1]] =
          this.state.fields["_" + name[1]] !== undefined
            ? [
                e.target.value || null,
                this.state.fields["_" + name[1]][1] || null,
              ]
            : [e.target.value || null, this.props.settings[name[1]][1] || null];
      } else if (parseInt(name[2]) === 1) {
        // value
        this.state.fields["_" + name[1]] =
          this.state.fields["_" + name[1]] !== undefined
            ? [
                this.state.fields["_" + name[1]][0] || null,
                e.target.value || null,
              ]
            : [this.props.settings[name[1]][0] || null, e.target.value || null];
      }
    } else {
      // new
      if (parseInt(name[1]) === 0) {
        // name
        // this.state.fields[parseInt(name[0])] = [e.target.value, this.state.fields[parseInt(name[0])][1]]
        this.setState({
          fields: {
            ...this.state.fields,
            [parseInt(name[0])]: [
              e.target.value || null,
              this.state.fields[parseInt(name[0])][1] || null,
            ],
          },
        });
      } else if (parseInt(name[1]) === 1) {
        // value
        // this.state.fields[parseInt(name[0])] = [this.state.fields[parseInt(name[0])][0], e.target.value]
        this.setState({
          fields: {
            ...this.state.fields,
            [parseInt(name[0])]: [
              this.state.fields[parseInt(name[0])][0] || null,
              e.target.value || null,
            ],
          },
        });
      }

      // if (
      //   this.state.errors.includes(parseInt(name[0]) + 1) &&
      //   (e.target.value !== undefined ||
      //     e.target.value !== null ||
      //     e.target.value !== "")
      // ) {
      //   let err = this.state.errors;
      //   let i = err.indexOf(parseInt(name[0]) + 1);
      //   err.splice(i, 1);
      //   this.setState({ errors: err });
      // }
      // if (
      //   this.state.errors.includes((parseInt(name[0]) + 1) * 2) &&
      //   (e.target.value !== undefined ||
      //     e.target.value !== null ||
      //     e.target.value !== "")
      // ) {
      //   let err = this.state.errors;
      //   let i = err.indexOf((parseInt(name[0]) + 1) * 2);
      //   err.splice(i, 1);
      //   this.setState({ errors: err });
      // }
    }
  };

  addRow = (e) => {
    let id = Object.keys(this.state.fields).length;
    this.setState({
      fields: { ...this.state.fields, [id]: [null, null] },
    });
  };

  removeSetting = (id) => {
    let fields = this.state.fields;
    delete this.state.fields[id];

    this.setState({ fields: fields });
  };

  updateSettings = (e) => {
    let keys = Object.keys(this.state.fields).filter(
      (key) =>
        this.state.fields[key] !== undefined &&
        this.state.fields[key][0] !== null &&
        this.state.fields[key][1] !== null
    );
    let fields = {};
    for (let i = 0; i < keys.length; i++) {
      fields[i] = this.state.fields[keys[i]];
    }
    this.props.updateSettings({ fields: fields });
  };

  render() {
    if (this.state.fields === null && this.props.settings !== undefined) {
      this.setState({ fields: this.props.settings });
    }
    return this.props.settings !== undefined &&
      this.props.projects &&
      this.state.fields !== null ? (
      <div className="flex flex-col justify-center pl-8 mb-24">
        {this.props.helmet}

        <div className="w-full">
          {/* 
          DEBUG
          // DATA_UPLOAD_MAX_NUMBER_FIELDS
          // SECURE_SSL_REDIRECT
          CSRF_COOKIE_SECURE
          CSRF_TRUSTED_ORIGINS
          ALLOWED_HOSTS
          CORS_ORIGIN_ALLOW_ALL
          CORS_ALLOW_ALL_ORIGINS
          CORS_ALLOWED_ORIGINS
          CORS_ALLOW_METHODS
          CORS_ALLOW_HEADERS

          LANGUAGE_CODE
          TIME_ZONE

          PASSWORD_HASHER
          */}
        </div>

        {this.props.settings !== false ? (
          <div className="mt-16 mb-24">
            <div className="mb-6 text-center">
              {this.props.updatedSettings ? (
                <>
                  <small className="text-[#4BFB80] px-4 py-2 rounded-full bg-[#4BFB80] bg-opacity-10">
                    Project settings saved successfully
                  </small>
                </>
              ) : this.props.updatedSettings === false ? (
                <small className="text-[#d63230] px-4 py-2 rounded-full bg-[#d63230] bg-opacity-20">
                  Please try again
                </small>
              ) : null}
            </div>

            {this.state.fields !== null ? (
              Object.keys(this.state.fields).length ? (
                Object.keys(this.state.fields).map((key) =>
                  this.state.fields[key] !== undefined
                    ? this.row(parseInt(key))
                    : null
                )
              ) : (
                <p className="text-sm text-center w-full rounded-lg bg-gray-100 py-12 mt-6 mb-5">
                  Create your first setting.
                </p>
              )
            ) : null}

            <div className="w-fit ml-auto mb-10">
              <button
                name="__name__"
                onClick={this.addRow}
                className="signal add relative h-5 w-5 flex justify-center items-center ml-2 rounded-full text-white hover:bg-[#00BFFF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#00bfff"
                  className="w-5 h-5 border-[#00BFFF] border rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* submit  */}
            {this.state.fields !== null ? (
              Object.keys(this.state.fields).length === 0 ? null : (
                <div className="ml-auto w-fit grid text-center mb-20">
                  <button
                    onClick={this.updateSettings}
                    className="custom-btn btn-3"
                  >
                    <span>Update Settings</span>
                  </button>
                </div>
              )
            ) : null}
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
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  settings: store.getState().projectReducer.settings,
  updatedSettings: store.getState().projectReducer.updatedSettings,
  projects: store.getState().projectReducer.payload,
});

export default connect(mapStateToProps, {
  updateSettings,
  retrieveProjects,
  retrieveProjectSettings,
})(Settings);
