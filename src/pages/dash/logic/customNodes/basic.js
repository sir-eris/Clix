import React, { useCallback, useState, Fragment } from "react";
import { Handle, Position } from "reactflow";
import { RadioGroup, Listbox, Transition } from "@headlessui/react";

export function IF_ELSE() {
  return (
    <div className="min-h-96 bg-[white] border-[#000]/15 border-4 rounded-xl overflow-auto">
      {/* header */}
      <div className="relative w-full border-[#00bff] py-3 text-base font-medium text-[#002147]">
        <Handle
          type="target"
          position={Position.Left}
          id="tdo-0"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] ml-3"
        />
        <p className="px-9">IF ELSE</p>
        <Handle
          type="source"
          position={Position.Right}
          id="tdo-1"
          className="block w-4 h-4 rounded-full bg-[#00BFFF] mr-3"
        />
      </div>
    </div>
  );
}

export const BasicNodeTypes = {
  ifElse: IF_ELSE,
};
export const BasicNodes = [
  // {
  //   id: "1000",
  //   type: "ifElse",
  //   position: { x: 0, y: 500 },
  // },
];
