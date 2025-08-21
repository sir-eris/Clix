import React from "react";
import store from "../app/store";
import { connect } from "react-redux";
import { retrieveEndpoints } from "../app/actions/Endpoint";
import { retrieveModels } from "../app/actions/Model";
import {
  retrieveProjects,
  retrieveProjectSettings,
} from "../app/actions/Project";
import { loadAccount } from "../app/actions/Account";

class LoadUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    await this.props.loadAccount();
    await this.props.retrieveModels();
    await this.props.retrieveProjects();
    await this.props.retrieveEndpoints();
    await this.props.retrieveProjectSettings();

    this.setState({ loading: false });
  }
  

  render() {
    return (
      <main className="overflow-hidden w-screen h-screen bg-[#fff] flex justify-center items-center">
        <code className="text-[#4BFB80]">loading... {this.state.loading ? "1": "0"}</code>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  loadAccount,
  retrieveModels,
  retrieveProjects,
  retrieveEndpoints,
  retrieveProjectSettings,
})(LoadUp);
