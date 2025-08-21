import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../app/store";
import { connect } from "react-redux";
import {
  loadAccount,
  updateAccount,
  removeThumbnail,
  updateThumbnail,
  sendVerifyEmail,
} from "../../../app/actions/Account";
import {
  updatePassword,
} from "../../../app/actions/Auth";
import {
  setNavBarOptions,
} from "../../../app/actions/Notification";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp/"
  : "http://localhost:8000/api/webapp/";

class Inner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: "",
      firstName: "",
      lastName: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confPassword: "",
      oldPasswordError: false,
      newPasswordError: false,
      confPasswordError: false,
      copied: false,
    };

    this.updateAccount = this.updateAccount.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
    this.removeThumbnail = this.removeThumbnail.bind(this);
    this.sendVerifyEmail = this.sendVerifyEmail.bind(this);
    this.copyTerminalToken = this.copyTerminalToken.bind(this);
  }

  componentDidMount() {
    this.props.loadAccount();

    this.props.setNavBarOptions({
      0: {
        title: "Profile",
        callback: () => {
          this.props.navigate("/account");
        },
      },
      1: {
        title: "Environment",
        callback: () => {
          this.props.navigate("/account/environment");
        },
      },
      2: {
        title: "Settings",
        callback: () => {
          this.props.navigate("/account/settings");
        },
      },
    });
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  copyTerminalToken = async () => {
    if (this.props.data.terminal_token) {
      navigator.clipboard.writeText(this.props.data.terminal_token);
      this.setState({ copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1300);
    } else {
      return;
    }
  };

  updateAccount = (e) => {
    this.props.updateAccount({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    });
  };

  removeThumbnail = (e) => {
    if (this.props.data.thumbnail.split("initial").length > 1) return;

    this.props.removeThumbnail();
  };

  updateThumbnail = (e) => {
    this.props.updateThumbnail({ file: e.target.files[0] });
  };

  sendVerifyEmail = (e) => {
    this.props.sendVerifyEmail();
  };

  updatePassword = (e) => {
    const { oldPassword, newPassword, confPassword } = this.state;
    if (
      oldPassword === "" ||
      oldPassword === undefined ||
      oldPassword === null
    ) {
      this.setState({ oldPasswordError: true });
      return;
    }
    if (
      newPassword === "" ||
      newPassword === undefined ||
      newPassword === null
    ) {
      this.setState({ newPasswordError: true });
      return;
    }
    if (
      confPassword === "" ||
      confPassword === undefined ||
      confPassword === null
    ) {
      this.setState({ confPasswordError: true });
      return;
    }
    this.setState({
      oldPassword: "",
      newPassword: "",
      confPassword: "",
      oldPasswordError: false,
      newPasswordError: false,
      confPasswordError: false,
    });
    this.props.updatePassword({
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
    });
  };

  render() {
    return this.props.data !== undefined ? (
      <div className="flex flex-col justify-center w-4/5 mx-auto mb-24">
        {this.props.helmet}
        <div className="mt-16 flex flex-col justify-start items-center gap-9">
          {/* thumbnail */}
          {this.props.data.thumbnail ? (
            <div className="text-center">
              <div>
                <img
                  src={BASE_URL + this.props.data.thumbnail}
                  className="w-40 h-40 rounded-full mx-auto mb-3 bg-slate-400"
                  alt="thumbnail"
                />
              </div>
              {/* <div className="text-xs text-[#00BFFF] mb-8 space-x-1">
                <label
                  for="thumbnailChange"
                  className="cursor-pointer hover:underline"
                >
                  Change
                </label>
                <input
                  id="thumbnailChange"
                  type="file"
                  name="thumbnailChange"
                  onChange={this.updateThumbnail}
                  className="hidden"
                  encType="multipart/form-data"
                />

                <span className="text-[gray]">/</span>
                <button
                  onClick={this.removeThumbnail}
                  className="hover:underline"
                >
                  Remove
                </button>
              </div> */}
              <button onClick={this.copyTerminalToken}>
                <div
                  style={{
                    backgroundColor: `#${this.props.data.terminal_token}`,
                  }}
                  className={`rounded-full text-center mx-auto py-3 pl-4 pr-4 flex items-center`}
                  title="copy token"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="flex items-center gap-x-1 font-bold text-white text-base mr-4 drop-shadow-md">
                    Terminal Token: {this.props.data.terminal_token}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="h-6">
                  {this.state.copied ? (
                    <small className="text-xs text-[gray]">
                      Copied to clipboard
                    </small>
                  ) : null}
                </div>
              </button>
            </div>
          ) : null}

          <div className="h-6">
            {this.props.updated !== undefined ? (
              this.props.updated === true ? (
                <small className="text-[#4BFB80] px-4 py-2 rounded-full bg-[#4BFB80] bg-opacity-10">
                  Your account updated successfully
                </small>
              ) : (
                <small className="text-[#d63230] px-4 py-2 rounded-full bg-[#d63230] bg-opacity-20">
                  Please try again
                </small>
              )
            ) : null}
          </div>

          {/* personal info */}
          <div className="w-full">
            <div className="flex gap-4 mb-8">
              <div className="w-1/3">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-2">
                  <p className="text-sm">First Name</p>
                </div>
                <input
                  name="firstName"
                  className="w-full input"
                  defaultValue={this.props.data.first_name}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="w-1/3">
                <div className="flex justify-end flex-row-reverse items-center gap-1 mb-2">
                  <p className="text-sm">Last Name</p>
                </div>
                <input
                  name="lastName"
                  className="w-full input"
                  defaultValue={this.props.data.last_name}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="w-1/3">
                <div className="flex justify-between items-end gap-1 mb-2">
                  <p className="text-sm">Username</p>
                </div>
                <input
                  type="password"
                  className="w-full input"
                  // value={this.props.data.username}
                  value="random username"
                  readOnly
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-3/4">
                <div className="flex items-center justify-between">
                  <div className="flex justify-end flex-row-reverse items-center gap-1 mb-2">
                    <p className="text-sm">Email Address</p>
                  </div>
                  {/* {this.props.data.email_verified ? (
                    <div className="mr-1 px-2 py-[3px] text-green-500 rounded-full text-xs select-none">
                      Verified
                    </div>
                  ) : (
                    <button
                      onClick={this.sendVerifyEmail}
                      className="mr-1 px-2 py-[3px] text-red-500 rounded-full text-xs select-none hover:underline"
                    >
                      verify
                    </button>
                  )} */}
                </div>
                <input
                  name="email"
                  type="email"
                  className="w-full input"
                  defaultValue={this.props.data.email}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="w-1/4 self-end">
                <button
                  onClick={this.updateAccount}
                  className="w-full input text-center text-white bg-[#00BFFF] rounded-lg h-full hover:border-white"
                >
                  Update
                </button>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <div className="mb-6 text-center">
                {this.props.passwordUpdated === true ? (
                  <small className="text-[#4BFB80] px-4 py-2 rounded-full bg-[#4BFB80] bg-opacity-10">
                    Your password updated successfully
                  </small>
                ) : this.props.passwordUpdated === false ? (
                  <small className="text-[#d63230] px-4 py-2 rounded-full bg-[#d63230] bg-opacity-20">
                    Please check your password and try again
                  </small>
                ) : null}
              </div>
              <div className="flex gap-4 mb-8">
                <div className="w-1/4">
                  <label className="block text-xs mb-1">Current Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    onChange={this.onInputChange}
                    value={
                      this.props.passwordUpdated ? "" : this.state.oldPassword
                    }
                    className={`w-full input ${
                      this.state.oldPasswordError ? "red-ring" : ""
                    }`}
                  />
                </div>
                <div className="w-1/4 self-end">
                  <label className="block text-xs mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    onChange={this.onInputChange}
                    value={
                      this.props.passwordUpdated ? "" : this.state.newPassword
                    }
                    className={`w-full input ${
                      this.state.newPasswordError ? "red-ring" : ""
                    }`}
                  />
                </div>
                <div className="w-1/4 self-end">
                  <label className="block text-xs mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confPassword"
                    onChange={this.onInputChange}
                    value={
                      this.props.passwordUpdated ? "" : this.state.confPassword
                    }
                    className={`w-full input ${
                      this.state.confPasswordError ? "red-ring" : ""
                    }`}
                  />
                </div>
                <div className="w-1/4 self-end">
                  <button
                    onClick={this.updatePassword}
                    className="w-full input text-center text-white bg-[#00BFFF] rounded-lg h-full hover:border-white"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

const Profile = (props) => {
  const navigate = useNavigate();

  return <Inner navigate={navigate} {...props} />;
};

const mapStateToProps = (state) => ({
  data: store.getState().accountReducer.payload,
  updated: store.getState().accountReducer.updated,
  passwordUpdated: store.getState().authReducer.passwordUpdated,
});

export default connect(mapStateToProps, {
  loadAccount,
  updateAccount,
  updatePassword,
  sendVerifyEmail,
  removeThumbnail,
  updateThumbnail,
  setNavBarOptions,
})(Profile);
