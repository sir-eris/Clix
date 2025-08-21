import React from "react";
import { Link } from "react-router-dom";

function NewTool(props) {
  return (
    <>
      {props.helmet}
      <main>
        <div className="h-[70vh] w-full shadow-inner">
          <div className="w-full h-3/5 flex justify-center items-center">
            BUILD A NEW TOOL
          </div>
        </div>
      </main>
    </>
  );
}

export default NewTool;
