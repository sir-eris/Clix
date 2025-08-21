import React from "react";
import { Link } from "react-router-dom";
import ReactFlow, { Background } from "reactflow";
import { CTANodeTypes, CTANodes } from "../pages/dash/logic/nodes";

function CTA(props) {
  const showNodes = !(props?.isSmallDevice ?? false);

  return (
    <section className="border-t relative py-10 lg:py-20 px-9 sm:px-16 md:px-24 lg:px-30 w-full bg-gray-50 shadow-inner text-[#002147]">
      <div className="text-center mb-10 lg:mb-20">
        <p className="font-thin text-xs lg:text-sm">API Development</p>
        <h1 className="text-xl lg:text-4xl font-black py-5">
          The Most Powerful Tool <br /> At Your Fingertips
        </h1>
        <p className="font-thin text-xs lg:text-sm">Simplified</p>
      </div>
      {/* links */}
      <div className="relative z-40 flex flex-wrap justify-center items-center w-full gap-x-3 lg:gap-x-8">
        <Link to="/tools" className="hover:underline text-[#00BFFF] text-sm lg:text-lg">
          {/* Pricing */}
          Tools
        </Link>
        <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
        <Link to="/teams" className="hover:underline text-[#00BFFF] text-sm lg:text-lg">
          Teams
        </Link>
        <span className="block w-1 h-1 rounded-full bg-[#00BFFF]"></span>
        <Link to="/faq" className="hover:underline text-[#00BFFF] text-sm lg:text-lg">
          FAQ
        </Link>
      </div>
      <div className="absolute inset-0">
        <ReactFlow
          nodes={showNodes ? CTANodes : []}
          edges={[]}
          nodeTypes={showNodes ? CTANodeTypes : {}}
          onlyRenderVisibleElements={true}
          zoomOnDoubleClick={false}
          zoomOnScroll={false}
          panOnScroll={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background />
        </ReactFlow>
      </div>
    </section>
  );
}

export default CTA;
