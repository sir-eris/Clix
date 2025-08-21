import React from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNavBarOptions } from "../../../app/actions/Notification";

class Inner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.loadEnvironment();
    // this.props.setNavBarOptions({
    //   0: {
    //     title: "Profile",
    //     callback: () => {
    //       this.props.navigate("/account");
    //     },
    //   },
    //   1: {
    //     title: "Environment",
    //     callback: () => {
    //       this.props.navigate("/account/environment");
    //     },
    //   },
    //   2: {
    //     title: "Settings",
    //     callback: () => {
    //       this.props.navigate("/account/settings");
    //     },
    //   },
    // });
  }

  render() {
    // this.props.data !== undefined ? (
    return (
      <div className="flex flex-col justify-center w-4/5 mx-auto mb-24">
        {this.props.helmet}
        <div className="mt-16 flex w-full flex-col justify-start items-center gap-9">
          <ul className="w-full">
            <li>
              <div className="flex w-full justify-between items-center h-16 px-4 hover:bg-gray-100 border-b">
                <div>
                  <p className="">Debug Mode</p>
                  <small className="block mb-2 text-xs text-gray-500">
                    Deserunt consectetur est ea cupidatat proident nisi aliquip.
                  </small>
                </div>
                <div>switch</div>
              </div>
            </li>
            <li>
              <div className="flex w-full justify-between items-center h-16 px-4 hover:bg-gray-100 border-b">
                <div>
                  <p className="">Debug Mode</p>
                  <small className="block mb-2 text-xs text-gray-500">
                    Deserunt consectetur est ea cupidatat proident nisi aliquip.
                  </small>
                </div>
                <div>switch</div>
              </div>
            </li>
            <li>
              <div className="flex w-full justify-between items-center h-16 px-4 hover:bg-gray-100 border-b">
                <div>
                  <p className="">Debug Mode</p>
                  <small className="block mb-2 text-xs text-gray-500">
                    Deserunt consectetur est ea cupidatat proident nisi aliquip.
                  </small>
                </div>
                <div>switch</div>
              </div>
            </li>
            <li>
              <div className="flex w-full justify-between items-center h-16 px-4 hover:bg-gray-100 border-b">
                <div>
                  <p className="">Debug Mode</p>
                  <small className="block mb-2 text-xs text-gray-500">
                    Deserunt consectetur est ea cupidatat proident nisi aliquip.
                  </small>
                </div>
                <div>switch</div>
              </div>
            </li>
            <li>
              <div className="flex w-full justify-between items-center h-16 px-4 hover:bg-gray-100 border-b">
                <div>
                  <p className="">Debug Mode</p>
                  <small className="block mb-2 text-xs text-gray-500">
                    Deserunt consectetur est ea cupidatat proident nisi aliquip.
                  </small>
                </div>
                <div>switch</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
    // ) : null;
  }
}

const Environment = (props) => {
  const navigate = useNavigate();

  return <Inner navigate={navigate} {...props} />;
};

const mapStateToProps = (state) => ({
  data: store.getState().accountReducer.payload,
  updated: store.getState().accountReducer.updated,
});

export default connect(mapStateToProps, {
  setNavBarOptions,
})(Environment);
