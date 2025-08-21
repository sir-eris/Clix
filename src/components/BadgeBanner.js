import React from "react"
import store from "../app/store";
import { connect } from "react-redux";
import { closeBadgeBanner } from "../app/actions/Notification"

function BadgeBanner(props) {
    return props.isAuthenticated && props.data !== undefined ? (
      <div className="z-20 min-h-[300px] fixed w-[444px] top-20 p-5 bg-gray-50 right-8 border-4 rounded-xl transition-all">
        <div className="flex flex-wrap justify-between items-start mb-4 h-[35px]">
          <div className="">
            <p className="text-xs font-thin mb-2">The BadgeBanner</p>
            <p className="font-bold text-[gray]">{props.data.title}</p>
          </div>
          <button
            className="block signal close relative w-4 h-4 rounded-full bg-[red]"
            onClick={() => props.closeBadgeBanner()}
          ></button>
        </div>
        {/* docs */}
        <div className="min-h-[250px] flex flex-col justify-between">
          <p className="font-medium text-base text-[#002147] mb-4">
            {props.data.description}
          </p>
          <div className="">
            <small className="block text-[#404040] mb-3">Learn more</small>
            <ul>
              {props.data.links &&
                props.data.links.map((link) => (
                  <li className="mb-1 flex justify-between items-center">
                    <a
                      href={link[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline text-[#002147] text-sm"
                    >
                      {link[1]}
                    </a>
                    {/* <small className="text-[#002147] bg-[#FFEA00] font-medium px-1 text-[10px]">
                      {link[2]}
                    </small> */}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    ) : null;
}

const mapStateToProps = (state) => ({
  data: store.getState().notificationReducer.BadgeBanner,
});

export default connect(mapStateToProps, {
  closeBadgeBanner,
})(BadgeBanner);