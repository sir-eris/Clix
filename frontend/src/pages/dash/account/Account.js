import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


class Inner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-screen mx-auto">
        {this.props.helmet}

        {/* primary links */}
        <div className="mx-auto max-w-5xl h-[40vh] grid grid-cols-2 grid-rows-2 gap-6 mt-20 mb-64 pl-12">
          <Link to="profile">
            <div className="w-full h-full flex flex-col justify-between p-4 rounded-lg bg-[#fff] shadow border-2 border-gray-300 ring-[5px] ring-gray-200 hover:border-gray-400">
              <p></p>
              <p className="text-xl font-medium">Profile</p>
            </div>
          </Link>
          {/* <Link to="environment">
            <div className="w-full h-full flex flex-col justify-between p-4 rounded-lg bg-[#fff] shadow border-2 border-gray-300 ring-[5px] ring-gray-200 hover:border-gray-400">
              <p></p>
              <p className="text-xl font-medium">Environment</p>
            </div>
          </Link> */}
          {/* <Link to="/teams">
            <div className="w-full h-full flex flex-col justify-between p-4 rounded-lg bg-[#fff] shadow border-2 border-gray-300 ring-[5px] ring-gray-200 hover:border-gray-400">
              <p></p>
              <p className="text-xl font-medium">Teams</p>
            </div>
          </Link>
          <Link to="subscription">
            <div className="w-full h-full flex flex-col justify-between p-4 rounded-lg bg-[#fff] shadow border-2 border-gray-300 ring-[5px] ring-gray-200 hover:border-gray-400">
              <p></p>
              <p className="text-xl font-medium">Subscription</p>
            </div>
          </Link> */}
        </div>

        {/* secondary links */}
        {/* <div className="max-w-5xl mx-auto text-center h-[40vh]">
          <Link className="w-full block text-gray-600 transition-colors hover:text-[#00BFFF] hover:underline border-b py-2 hover:bg-gray-100 hover:underline-offset-2">
            Join a new team
          </Link>
          <Link className="w-full block text-gray-600 transition-colors hover:text-[#00BFFF] hover:underline border-b py-2 hover:bg-gray-100 hover:underline-offset-2">
            Update profile
          </Link>
          <Link className="w-full block text-gray-600 transition-colors hover:text-[#00BFFF] hover:underline border-b py-2 hover:bg-gray-100 hover:underline-offset-2">
            Clix Freebution Plan
          </Link>
          <Link className="w-full block text-gray-600 transition-colors hover:text-[#00BFFF] hover:underline border-b py-2 hover:bg-gray-100 hover:underline-offset-2">
            A link to somewhere cool
          </Link>
        </div> */}

        {/* logo */}
        <div className="mb-4">
          <a href="/" className="block w-fit mx-auto mb-4">
            <img
              src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
              width={"20px"}
              height={"20px"}
              className="mx-auto mb-2"
              alt="Clix.dev official logo"
            />
            <p className="font-bold text-[11px] text-[#00BFFF]">Clix.dev</p>
          </a>
          <small className="text-gray-400 text-[10px] block text-center">
            Copyright Clix.dev 2022
          </small>
          <small className="text-gray-400 text-[10px] block text-center">
            2022 All Rights Reserved
          </small>
        </div>
      </div>
    );
  }
}

const Account = (props) => {
  const navigate = useNavigate();

  return <Inner navigate={navigate} {...props} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Account);
