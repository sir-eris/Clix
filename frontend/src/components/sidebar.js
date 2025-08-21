import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ minify }) {
  return (
    <div
      className={`h-screen sticky top-0 pt-4 bg-gray-100 transition-all shadow-inner border-[gray]/10 border-r ${
        minify ? "w-[120px]" : "w-[240px]"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* <NavLink to="/design" className="block px-5 mb-6 side-link">
=======
          {/* <NavLink to="/logic" className="block px-5 mb-6 side-link">
>>>>>>> logic
=======
          {/* <NavLink to="/logic" className="block px-5 mb-6 side-link">
>>>>>>> modular-redesign
            <div
              className={`w-full ${
                minify ? "h-20" : "h-60"
              } rounded-xl shadow bg-[white] overflow-hidden transition-all`}
            >
              <img
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ backgroundSize: "cover" }}
                src="https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png"
              />
            </div>
          </NavLink> */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> modular-redesign

          <NavLink
            to="/logic"
            className="block px-5 mb-2 side-link"
            activeclassname="active"
          >
            Logic
          </NavLink>
<<<<<<< HEAD
>>>>>>> logic
=======
>>>>>>> modular-redesign

          <NavLink
            to="/endpoints"
            className="block px-5 mb-2 side-link"
            activeclassname="active"
          >
            Endpoints
          </NavLink>
          <NavLink
            to="/models"
            className="block px-5 mb-2 side-link"
            activeclassname="active"
          >
            Models
          </NavLink>
          <NavLink
            to="/settings"
            className="block px-5 mb-2 side-link"
            activeclassname="active"
          >
            Settings
          </NavLink>
          {/* <NavLink to="/functions" className="block px-5 mb-2 side-link"
              activeclassname="active">Functions</NavLink> */}
          {/* <NavLink to="/integrations" className="block px-5 mb-2 side-link"
              activeclassname="active">Integrations</NavLink> */}
        </div>
        <div id="projectsLink" className="flex flex-col">
          <NavLink
            to="/projects"
            className="block px-5 mb-2 side-link"
            activeclassname="active"
          >
            Projects
          </NavLink>
          <hr className="mb-2" />
          <NavLink
            to="/account"
            className="block px-5 pb-4 mb-2 side-link"
            activeclassname="active"
          >
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
