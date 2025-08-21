import React, { Component, useEffect } from "react";
import {
  Route,
  Routes,
  Outlet,
  Navigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import store from "../app/store";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { retrieveProjects } from "../app/actions/Project";
import { loadLastBadgeBanner } from "../app/actions/Notification";
import { loadAuth, logout, checkPagesVisited } from "../app/actions/Auth";

<<<<<<< HEAD
import Logo from "../assets/logo.png";

=======
>>>>>>> modular-redesign
// MODALS
// import Modal from "../components/modal";
<<<<<<< HEAD
<<<<<<< HEAD
import WelcomeModal from "../components/welcomeModal";
=======
// import CommandPalette from "../components/commandPalette";
<<<<<<< HEAD
// import WelcomeModal from "../components/welcomeModal";
>>>>>>> subscription
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import InfoBar from "../components/infoBar";
=======
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import InfoBar from "../components/infoBar";
// import WelcomeModal from "../components/welcomeModal";
>>>>>>> logic
import PublicFooter from "../components/publicFooter";
import PublicHeader from "../components/publicHeader";

<<<<<<< HEAD
import Logic from "./logic";
=======
// PUBLIC PAGES
// import Design from "./design";
>>>>>>> subscription
import Docs from "./site/Docs";
import Home from "./site/Home";
// import About from "./site/About";
import Legal from "./site/Legal";
import Pricing from "./site/Pricing";
import Updates from "./site/Updates";
import Contact from "./site/Contact";
// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import GetStarted from "./site/GetStarted";
import ForgotPassword from "./auth/ForgotPassword";

// PRIVATE PAGES
// Account
import Account from "./account/Account";
import Profile from "./account/Profile";
import Settings from "./account/Settings";
<<<<<<< HEAD
import EditModel from "./model/EditModel";
import Projects from "./project/Projects";
import GetStarted from "./site/GetStarted";
import Endpoints from "./endpoint/Endpoints";
import NewProject from "./project/NewProject";
=======
>>>>>>> subscription
import Environment from "./account/Environment";
// Team
import ChooseTeam from "./team/ChooseTeam";
// Subscription
import Subscription from "./subscription";
// models
import Models from "./model/Models";
import NewModel from "./model/NewModel";
import EditModel from "./model/EditModel";
// Projects
import Projects from "./project/Projects";
import NewProject from "./project/NewProject";
import ProjectSettings from "./project/Settings";
// Endpoints
import Endpoints from "./endpoint/Endpoints";
import NewEndpoint from "./endpoint/NewEndpoint";
import EditEndpoint from "./endpoint/EditEndpoint";
<<<<<<< HEAD
import ForgotPassword from "./auth/ForgotPassword";
=======

// import Functions from "./project/Functions";
// import Integrations from "./project/Integrations";
>>>>>>> subscription

=======

// ERRORS
>>>>>>> modular-redesign
import Http404 from "./errors/Http404";

// LAYOUT COMPONENTS
// import LoadUp from "../components/loadUp";
import CTA from "../components/cta";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
import BadgeBanner from "../components/BadgeBanner";
import PublicFooter from "../components/publicFooter";
import PublicHeader from "../components/publicHeader";

// TOOLS
import Tools from "./site/tools/";
import NewTool from "./site/tools/new";
import Endpoint_tool from "./site/tools/endpoint";
import TheLogic_tool from "./site/tools/the-logic";
import DataModel_tool from "./site/tools/data-model";
import Configuration_tool from "./site/tools/configuration";
// set
// import ToolsSet from "./site/tools/tools-set";
import Templates_tool from "./site/tools/set/templates";
import APIVersioning_tool from "./site/tools/set/api-versioning";
import TheBadgeBanner_tool from "./site/tools/set/the-badgeBanner";
import EnvironmentSettings_tool from "./site/tools/set/environment-settings";

// TRANSLATOR
import CLI from "./site/translator/cli";
import Translator from "./site/translator/";
import Syncing from "./site/translator/syncing";
import LocalDev from "./site/translator/local-dev";
import Languages from "./site/translator/languages";

// TEAMS
import Teams from "./site/teams/";

// DASHBOARD
// logic
import Logic from "./dash/logic";
// endpoints
import Endpoints from "./dash/endpoint/Endpoints";
import NewEndpoint from "./dash/endpoint/NewEndpoint";
import EditEndpoint from "./dash/endpoint/EditEndpoint";

// models
import Models from "./dash/model/Models";
import NewModel from "./dash/model/NewModel";
import EditModel from "./dash/model/EditModel";

// configuration
import ProjectSettings from "./dash/project/Settings";

// projects
import Projects from "./dash/project/Projects";
import NewProject from "./dash/project/NewProject";

// account
import Account from "./dash/account/Account";
import Profile from "./dash/account/Profile";
import Settings from "./dash/account/Settings";
import Environment from "./dash/account/Environment";
// Team
// import ChooseTeam from "./dash/team/ChooseTeam";
// Subscription
import Subscription from "./dash/subscription";

// PAGES
// auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

// public
// about
import FAQ from "./site/FAQ";
import About from "./site/about/";
import Carriers from "./site/about/carriers";
import WhoWeAre from "./site/about/who-we-are";
import SupportedAPIs from "./site/about/supported-APIs";

import Home from "./site/Home";
import Legal from "./site/Legal";
// import Pricing from "./site/Pricing";
import Updates from "./site/Updates";
import Contact from "./site/Contact";
import Newsletter from "./auth/Newsletter";
import GetStarted from "./site/GetStarted";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: 0, windowHeight: 0 };

    this.logout = this.logout.bind(this);
    this._publicView = this._publicView.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.isSmallDevice = this.isSmallDevice.bind(this);
    this._protectedView = this._protectedView.bind(this);
  }

  async componentDidMount() {
    this.props.loadAuth();
    this.props.loadLastBadgeBanner();
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    // if (this.isAuthenticated && this.props.projects === undefined) {
    //   console.log('HI')
    //   await this.props.retrieveProjects();
    // }
  }

  _protectedView = (
    width,
    Element,
    // logout,
    showLayout = true,
    fullWidth = false
  ) => {
    const isAuthenticated = this.props.isAuthenticated;
<<<<<<< HEAD
    //? possible recursion (way too many calls)
    // maybe move to each component
    if (isAuthenticated && this.props.projects === undefined) {
      this.props.retrieveProjects();
    }

    if (width > 1000) {
<<<<<<< HEAD
      let expand = Element.props?.name === "logic" ? true : false;
=======
      let expand = Component.props?.name === "design" ? true : false;

>>>>>>> subscription
=======
    if (!this.isSmallDevice(width)) {
      let expand = Element.props?.name === "logic" ? true : false;
>>>>>>> modular-redesign
      return isAuthenticated !== undefined && isAuthenticated === true ? (
        <div className="flex flex-row text-dark">
          {showLayout ? <SideBar minify={expand ? true : false} /> : null}
          <div className={`transition-all ${expand ? "w-full" : "w-5/6"}`}>
            {showLayout ? <NavBar /> : null}
            <div className="flex flex-row justify-between items-start w-full">
              {expand || !showLayout ? (
                <div className="w-full">{Element}</div>
              ) : (
                <div className="w-5/6">{Element}</div>
              )}
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <InfoBar isAuthenticated={isAuthenticated} />
<<<<<<< HEAD
          {/* <Modal /> */}
          {/* // TODO removed for now */}
=======
          {/* // TODO */}
          {/* <Modal /> */}
          {/* TODO foundation only, later-feature */}
>>>>>>> logic
          {/* <CommandPalette /> */}
          {/* {!this.props.firstLogin ? <WelcomeModal /> : null} */}
        </div>
=======
        ) : (
          <div className="flex flex-row text-dark">
            <div className="w-full">{Component}</div>
          </div>
        )
>>>>>>> subscription
=======
          <BadgeBanner isAuthenticated={isAuthenticated} />
          {/* // MODALS */}
        </div>
>>>>>>> modular-redesign
      ) : isAuthenticated !== undefined && isAuthenticated === false ? (
        <Navigate replace to="/login" />
      ) : null;
    } else {
      // small screens
      return (
        <div className="flex flex-col w-full h-[50vh] my-28 justify-center items-center">
          <Link to="/" className="mb-[30vh]">
            <img
              src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/image_2022-11-28_08-39-24.png"
              width={"23px"}
              height={"auto"}
              className="w-5 md:w-[23px]"
              alt="Clix.dev official logo"
            />
            <p className="text-[#00bfff] font-bold text-base md:text-lg">
              clix
            </p>
          </Link>
          <p className="mb-4">Please use a wider screen.</p>
          {isAuthenticated ? (
            <button
              onClick={this.props.logout}
              className="px-4 py-1 rounded-full text-sm text-[#FF4733] bg-[#FFEDEB]"
            >
              Log Out
            </button>
          ) : null}
        </div>
      );
    }
  };

  _publicView = (Element, forceRedirect, publicHeader) => {
    const isAuthenticated = this.props.isAuthenticated;
    const width = this.state.windowWidth
    return forceRedirect && isAuthenticated ? (
      <Navigate replace to={this.props.redirectTo} />
    ) : (
      <>
        <ScrollToTop />
        {publicHeader === true ? (
          <PublicHeader isAuthenticated={isAuthenticated} />
        ) : null}
        {Element}
        {isAuthenticated !== true ? <CTA isSmallDevice={this.isSmallDevice(width)} /> : null}
        <PublicFooter isAuthenticated={isAuthenticated} />
      </>
    );
  };

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  logout() {
    this.props.logout();
  }

  isSmallDevice(w) {
    return w < 1000
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* Public Views */}
            <Route
              path="/"
              element={this._publicView(
                <Home
                  helmet={
                    <Helmet>
                      <title>Clix.dev - Gamify Web API Development.</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                  isSmallDevice={this.isSmallDevice(this.state.windowWidth)}
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools"
              element={this._publicView(
                <Tools
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/endpoint"
              element={this._publicView(
                <Endpoint_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Endpoint</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/data-model"
              element={this._publicView(
                <DataModel_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Data Model</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/the-logic"
              element={this._publicView(
                <TheLogic_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - The Logic</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/configuration"
              element={this._publicView(
                <Configuration_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Configuration</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/new"
              element={this._publicView(
                <NewTool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Build A New Tool</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/API-versioning"
              element={this._publicView(
                <APIVersioning_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - API Versioning</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/templates"
              element={this._publicView(
                <Templates_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Templates</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/the-badgeBanner"
              element={this._publicView(
                <TheBadgeBanner_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - The BadgeBanner</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/tools/environment-settings"
              element={this._publicView(
                <EnvironmentSettings_tool
                  helmet={
                    <Helmet>
                      <title>Clix.dev Tools - Environment Settings</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/teams"
              element={this._publicView(
                <Teams
                  helmet={
                    <Helmet>
                      <title>Clix.dev Teams</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/translator"
              element={this._publicView(
                <Translator
                  helmet={
                    <Helmet>
                      <title>Clix.dev Translator</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/translator/cli"
              element={this._publicView(
                <CLI
                  helmet={
                    <Helmet>
                      <title>Clix.dev Translator - CLI</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/translator/syncing"
              element={this._publicView(
                <Syncing
                  helmet={
                    <Helmet>
                      <title>Clix.dev Translator - Syncing</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/translator/local-development"
              element={this._publicView(
                <LocalDev
                  helmet={
                    <Helmet>
                      <title>Clix.dev Translator - Local Development</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/translator/languages"
              element={this._publicView(
                <Languages
                  helmet={
                    <Helmet>
                      <title>Clix.dev Translator - Languages</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/FAQ"
              element={this._publicView(
                <FAQ
                  helmet={
                    <Helmet>
                      <title>Clix.dev FAQ</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/about"
              element={this._publicView(
                <About
                  helmet={
                    <Helmet>
                      <title>About Clix.dev</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/about/supported-APIs"
              element={this._publicView(
                <SupportedAPIs
                  helmet={
                    <Helmet>
                      <title>About Clix.dev - Supported APIs</title>
                      <meta name="robots" content="noindex, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/about/carriers"
              element={this._publicView(
                <Carriers
                  helmet={
                    <Helmet>
                      <title>About Clix.dev - By Developers</title>
                      <meta name="robots" content="noindex, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/about/who-we-are"
              element={this._publicView(
                <WhoWeAre
                  helmet={
                    <Helmet>
                      <title>About Clix.dev - Who We Are</title>
                      <meta name="robots" content="noindex, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            {/* LATER */}
            {/* <Route
              path="/pricing"
              element={this._publicView(
                <Pricing
                  helmet={
                    <Helmet>
                      <title>Clix.dev Pricing</title>
                      <meta name="robots" content="index, follow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            /> */}
            <Route
              path="/get-started"
              element={this._publicView(
                <GetStarted
                  helmet={
                    <Helmet>
                      <title>Clix.dev - Getting Started</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/login"
              element={this._publicView(
                <Login
                  helmet={
                    <Helmet>
                      <title>Sign In - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                true,
                false
              )}
            />
            <Route
              path="/forgot-password"
              element={this._publicView(
                <ForgotPassword
                  helmet={
                    <Helmet>
                      <title>Forgot Password - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                true,
                false
              )}
            />
            <Route
              path="/register"
              element={this._publicView(
                <Register
                  helmet={
                    <Helmet>
                      <title>Create New Account - Clix.dev</title>
                      <meta name="robots" content="index, nofollow"></meta>
                    </Helmet>
                  }
                />,
                true,
                false
              )}
            />
            <Route
              path="/road-map"
              element={this._publicView(
                <Updates
                  helmet={
                    <Helmet>
                      <title>Clix.dev Road Map</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/contact"
              element={this._publicView(
                <Contact
                  helmet={
                    <Helmet>
                      <title>Contact Clix.dev</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />
            <Route
              path="/newsletter"
              element={this._publicView(
                <Newsletter
                  helmet={
                    <Helmet>
                      <title>Clix.dev - Newsletter</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                false
              )}
            />
            <Route
              path="/legal"
              element={this._publicView(
                <Legal
                  helmet={
                    <Helmet>
                      <title>Clix.dev Terms and Policies</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true
              )}
            />

            {/* Protected Views */}
            {/* <Route
              path="/loading"
              element={this._protectedView(
                this.state.windowWidth,
                <LoadUp
                  helmet={
                    <Helmet>
                      <title>Loading - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                true,
              )}
            /> */}
            <Route
              path="/account"
              element={this._protectedView(
                this.state.windowWidth,
                <Account
                  helmet={
                    <Helmet>
                      <title>Accessability - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                true,
                true
              )}
            />
            <Route
              path="/account/profile"
              element={this._protectedView(
                this.state.windowWidth,
                <Profile
                  helmet={
                    <Helmet>
                      <title>Accessability - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                true,
                true
              )}
            />
            <Route
              path="/account/profile"
              element={this._protectedView(
                this.state.windowWidth,
                <Account
                  helmet={
                    <Helmet>
                      <title>Accessability - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                true,
                true
              )}
            />
            <Route
              path="/account/profile"
              element={this._protectedView(
                this.state.windowWidth,
                <Profile
                  helmet={
                    <Helmet>
                      <title>User Profile - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                this.logout
                // true,
                // true
              )}
            />
            <Route
              path="/account/subscription"
              element={this._protectedView(
                this.state.windowWidth,
                <Subscription
                  helmet={
                    <Helmet>
                      <title>Subscription - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                true,
                true
              )}
            />
            <Route
              path="/account/environment"
              element={this._protectedView(
                this.state.windowWidth,
                <Environment
                  helmet={
                    <Helmet>
                      <title>User Environment - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                this.logout
              )}
            />
            <Route
              path="/account/settings"
              element={this._protectedView(
                this.state.windowWidth,
                <Settings
                  helmet={
                    <Helmet>
                      <title>Accessability Settings - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,

                this.logout
              )}
            />
            {/* <Route
              path="/teams/new"
              element={this._protectedView(
                this.state.windowWidth,
                <ChooseTeam
                  helmet={
                    <Helmet>
                      <title>Choose Your Team - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                
                false
              )}
            /> */}
            <Route
              path="/models"
              element={this._protectedView(
                this.state.windowWidth,
                <Models
                  helmet={
                    <Helmet>
                      <title>Models - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/models/new"
              element={this._protectedView(
                this.state.windowWidth,
                <NewModel
                  helmet={
                    <Helmet>
                      <title>Create New Model - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/models/edit"
              element={this._protectedView(
                this.state.windowWidth,
                <EditModel
                  helmet={
                    <Helmet>
                      <title>Edit Model - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/endpoints"
              element={this._protectedView(
                this.state.windowWidth,
                <Endpoints
                  helmet={
                    <Helmet>
                      <title>Endpoints - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/endpoints/new"
              element={this._protectedView(
                this.state.windowWidth,
                <NewEndpoint
                  helmet={
                    <Helmet>
                      <title>Create New Endpoint - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/endpoints/edit"
              element={this._protectedView(
                this.state.windowWidth,
                <EditEndpoint
                  helmet={
                    <Helmet>
                      <title>Edit Endpoint - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/settings"
              element={this._protectedView(
                this.state.windowWidth,
                <ProjectSettings
                  helmet={
                    <Helmet>
                      <title>Project Settings - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/projects"
              element={this._protectedView(
                this.state.windowWidth,
                <Projects
                  helmet={
                    <Helmet>
                      <title>Projects - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/projects/new"
              element={this._protectedView(
                this.state.windowWidth,
                <NewProject
                  helmet={
                    <Helmet>
                      <title>Create New Project - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                this.logout
              )}
            />
            <Route
              path="/logic"
              element={this._protectedView(
                this.state.windowWidth,
                <Logic
                  name="logic"
                  helmet={
                    <Helmet>
                      <title>Logic - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
<<<<<<< HEAD
                // this.props.isAuthenticated,
                this.logout
              )}
<<<<<<< HEAD
            /> */}
=======
            />
>>>>>>> logic
=======
                this.logout
              )}
            />
>>>>>>> modular-redesign

            {/* errors */}
            <Route
              path="*"
              element={this._publicView(
                <Http404
                  helmet={
                    <Helmet>
                      <title>Page Not Found - Clix</title>
                      <meta name="robots" content="noindex, nofollow"></meta>
                    </Helmet>
                  }
                />,
                false,
                false
              )}
            />
          </Routes>
          <Outlet />
        </BrowserRouter>
      </>
    );
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

const mapStateToProps = (state) => ({
  projects: store.getState().projectReducer.payload,
  redirectTo: store.getState().authReducer.redirectTo,
  firstLogin: store.getState().authReducer.firstLogin,
  messages: store.getState().notificationReducer.messages,
  isAuthenticated: store.getState().authReducer.isAuthenticated,
  navBarOptions: store.getState().notificationReducer.navBarOptions,
});

export default connect(mapStateToProps, {
  logout,
  loadAuth,
  retrieveProjects,
  checkPagesVisited,
  loadLastBadgeBanner,
})(Router);
