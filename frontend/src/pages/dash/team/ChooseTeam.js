import React, { useState } from "react";
import store from "../../../app/store";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { joinTeam, createNewTeam } from "../../../app/actions/Account";


function ChooseTeam(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedTeamError, setSelectedTeamError] = useState();
  const [newTeamPanel, setNewTeamPanel] = useState(true);
  const [newTeamPanelName, setNewTeamPanelName] = useState("");
  const [newTeamPanelUsername, setNewTeamPanelUsername] = useState("");
  const [newTeamPanelErrors, setNewTeamPanelErrors] = useState([0, 0]);
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);

  const toggleNewTeamPanel = () => {
    setNewTeamPanel(!newTeamPanel);
  };

  const selectTeam = (e) => {
    if (Number(e.target.id) === selectedTeam) {
      setSelectedTeam();
      return;
    } else {
      setSelectedTeam(Number(e.target.id));
      return;
    }
  };

  const searchTeam = (e) => {
    setSearchQuery(e.target.value);
    // props.searchTeams(searchQuery)
  };

  const onInputChange = (e) => {
    if (e.target.name === "newTeamName") {
      setNewTeamPanelName(e.target.value);
      setNewTeamPanelErrors([0, newTeamPanelErrors[1]]);
      return;
    }
    if (e.target.name === "newTeamUsername") {
      setNewTeamPanelUsername(e.target.value);
      setNewTeamPanelErrors([newTeamPanelErrors[0], 0]);
      return;
    }
  };

  const btnClick = () => {
    const isEmpty = (val) => {
      return (
        (typeof val === "string" && !val.length) ||
        val === undefined ||
        val === null
      );
    };
    if (newTeamPanel) {
      let errs = newTeamPanelErrors || [0, 0];
      if (isEmpty(newTeamPanelName)) {
        errs[0] = 1;
      } else {
        errs[0] = 0;
      }
      if (isEmpty(newTeamPanelUsername)) {
        errs[1] = 1;
      } else {
        errs[1] = 0;
      }
      setNewTeamPanelErrors([errs[0], errs[1]]);
      if (errs[0] === 0 && errs[1] === 0) {
        props.createNewTeam({
          name: newTeamPanelName,
          username: newTeamPanelUsername,
        });
      }
      return;
    }
    //  else if (!newTeamPanel) {
    //   if (!selectedTeam) {
    //     setSelectedTeamError(true);
    //   }
    //       if (!selectedTeam) {
    //         props.joinTeam();
    //       }
    //   return;
    // }
  };

  // TODO FUCKING STUPID BUG (potentially)
  if (props?.redirectTo !== undefined && props.redirectTo !== "/choose-team") {
    return <Navigate replace to={props.redirectTo} />;
  }

  if (
    props?.authRedirectTo !== undefined &&
    props.authRedirectTo !== "/choose-team"
  ) {
    return <Navigate replace to={props.authRedirectTo} />;
  }

  return (
    <>
      {props.helmet}
      <div className="w-full">
        <div className="md:w-1/2 xl:w-1/3 mx-auto min-h-[85vh] py-12 px-8">
          {/* logo */}
          <a href="/" className="block w-fit mx-auto mb-24">
            <img
              src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
              width={"23px"}
              height={"23px"}
              className="mx-auto mb-2"
              alt="Clix.dev official logo"
            />
            <p className="font-bold text-xs text-[#00BFFF]">Clix.dev</p>
          </a>

          {/* header */}
          <h1 className="text-center text-xl mb-3 font-thin text-[#36474d]">
            {newTeamPanel ? "Create New Team" : "Join A Team"}
          </h1>
          <div className="mb-4 transition-all">
            <button
              onClick={() => setDetailsPanelOpen(!detailsPanelOpen)}
              className="text-[#FF8500] text-sm text-center mx-auto block mb-4 hover:underline"
            >
              {!detailsPanelOpen ? "Details" : "Close"}
            </button>
            {/* {detailsPanelOpen ? ( */}
            <div
              className={`text-[#002127] text-sm mb-4 text-center border-[#FF8500] ring-gray-200 shadow-md bg-[#fff] rounded-lg px-5 transition-all ${
                detailsPanelOpen
                  ? "h-32 border-2 ring-4"
                  : "h-0 ring-0 border-0"
              }`}
            >
              Find your team by its username or create a new team. If you are a
              solo developer you need to create a new team as sole admin.
            </div>
            {/* ) : null} */}
          </div>
          <hr className="mb-6" />

          {/* content */}
          <div className={`transition-all ${!newTeamPanel ? "h-96" : "h-40"}`}>
            {newTeamPanel ? (
              <div className="overflow-auto w-full h-[23rem] mb-6 px-2">
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between items-end">
                    <label className={"text-sm mb-1"}>Team Name</label>
                    <small className="text-[11px] text-[red]">
                      {newTeamPanelErrors[0] === 1
                        ? "This field is required"
                        : null}
                    </small>
                  </div>
                  <input
                    type="text"
                    name="newTeamName"
                    value={newTeamPanelName}
                    onChange={onInputChange}
                    className={`input w-full placeholder:text-xs ${
                      newTeamPanelErrors[0] === 1 ? "red-ring" : ""
                    }`}
                    placeholder="Enter a name for your team"
                  />
                </div>
                <div className={"flex flex-col mb-4"}>
                  <div className="flex justify-between items-end">
                    <label className="text-sm mb-1">Username</label>
                    <small className="text-[11px] text-[red]">
                      {props?.responseStatus && props.responseStatus === 406
                        ? "Username already taken"
                        : null}
                      {newTeamPanelErrors[1] === 1
                        ? "This field is required"
                        : null}
                    </small>
                  </div>
                  <input
                    type="text"
                    name="newTeamUsername"
                    value={newTeamPanelUsername}
                    onChange={onInputChange}
                    className={`input w-full placeholder:text-xs ${
                      newTeamPanelErrors[1] === 1 ||
                      (props?.responseStatus && props.responseStatus)
                        ? "red-ring"
                        : ""
                    }`}
                    placeholder="Choose a unique username"
                  />
                </div>
                <div className={"flex flex-col mb-4"}>
                  <p className="text-xs text-[gray]">
                    Default Role: <span className="font-bold">Admin</span>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col mb-[1rem] h-[2rem]">
                  <input
                    type="text"
                    name="searchTeam"
                    value={searchQuery}
                    onChange={searchTeam}
                    className="input w-full placeholder:text-xs"
                    placeholder="Search team @username"
                  />
                </div>
                {searchQuery.length ? (
                  <div className="overflow-auto w-full h-[20rem] mb-4">
                    {[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }].map(
                      (item) => (
                        <button
                          id={item.id}
                          onClick={selectTeam}
                          className="w-full border-b py-2 flex justify-between px-3 hover:bg-gray-100 transition-all"
                        >
                          <div className="flex gap-x-3">
                            {/* <div
                                className={`w-5 h-5 border rounded-full shadow-sm ${
                                  selectedTeam === item.id
                                    ? "bg-[#00BFFF]"
                                    : "bg-[#fff]"
                                }`}
                              ></div> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke={
                                selectedTeam === item.id ? "#4BFB80" : "white"
                              }
                              className={`w-7 h-7 ${
                                selectedTeam !== item.id
                                  ? "border rounded-full"
                                  : ""
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>

                            <p className="font-medium text-sm transition-all">
                              @Team-Username
                            </p>
                          </div>
                          <p className="text-xs font-thin transition-all">
                            4 Members
                          </p>
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <div className="overflow-auto w-full h-[20rem] mb-4 border-4 text-[lightgray] font-medium border-dashed rounded-md flex justify-center items-center"></div>
                )}
              </>
            )}
          </div>

          {/* submit */}
          <div className="flex flex-col mb-1">
            <button onClick={btnClick} className="custom-btn btn-3 my-2">
              {props.loading === true ? (
                <span>loading...</span>
              ) : (
                <span>Launch Dashboard</span>
              )}
            </button>
          </div>

          {/* sub links */}
          <div className="flex justify-between items-end text-xs text-[gray]">
            {!newTeamPanel ? (
              <>
                <span></span>
                <button
                  onClick={toggleNewTeamPanel}
                  className="hover:underline"
                >
                  Create New Team
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleNewTeamPanel}
                  className="hover:underline"
                >
                  Search Your Team
                </button>
                <span></span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  teams: store.getState().accountReducer.teams,
  loading: store.getState().authReducer.isLoading,
  redirectTo: store.getState().accountReducer.redirectTo,
  authRedirectTo: store.getState().authReducer.redirectTo,
  responseStatus: store.getState().accountReducer.responseStatus,
});

export default connect(mapStateToProps, {
  joinTeam,
  createNewTeam,
})(ChooseTeam);
