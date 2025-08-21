import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNavBarOptions } from "../../../app/actions/Notification";

class Inner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    // this.props.loadAccessibilitySettings();

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

  render() {
    return this.props.data !== undefined ? (
      <div className="flex flex-col justify-center w-4/5 mx-auto mb-24">
        {this.props.helmet}
        <div className="mt-16 flex flex-col justify-start items-center gap-9">
          
          Settings
        </div>
      </div>
    ) : null;
  }
}

const Settings = (props) => {
  const navigate = useNavigate();

  return <Inner navigate={navigate} {...props} />;
};

const mapStateToProps = (state) => ({
  data: store.getState().accountReducer.payload,
  updated: store.getState().accountReducer.updated,
});

export default connect(mapStateToProps, {
  setNavBarOptions,
})(Settings);
