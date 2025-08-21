import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  // applyNodeChanges,
  // applyEdgeChanges,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import store from "../../../app/store";
import { connect } from "react-redux";
import { retrieveModels } from "../../../app/actions/Model";
import { retrieveProjects } from "../../../app/actions/Project";
import { retrieveEndpoints } from "../../../app/actions/Endpoint";

// MODALS
// import Assistant from "../../../components/Assistant";
// import NodeWriter from "../../../components/nodeWriter";

// import initialEdges from "./edges";
import { BasicNodeTypes, BasicNodes } from "./customNodes/basic";
import { APInodeTypes, APINodes } from "./nodes";
import { APIEdges } from "./edges";
const initialNodeTypes = { ...BasicNodeTypes, ...APInodeTypes };
const initialNodes = [...BasicNodes, ...APINodes];

let id = 1000;
const getId = () => `dndnode_${id++}`;

function Inner(props) {
  const endpoints = props?.endpoints;
  const projects = props?.projects;
  const models = props?.models;

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(APIEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // TODO add right click listener for node-menu modal

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   []
  // );

  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   []
  // );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = (data) => {
    setNodes([...nodes, data]);
  };

  const miniMapNodeColor = (node) => {
    switch (node.type) {
      case "endpoint":
        return "#00bfff";
      case "dataModel":
        return "#00ff00";
      case "response":
      case "errorResponse":
        return "#FF7B00";
      case "newUser":
      case "chargeUser":
        return "#635bff";
      default:
        return "#eee";
    }
  };

  const onDragStart = (event, nodeType, nodeData) => {
    event.dataTransfer.setData("text/json", JSON.stringify(nodeData));
    event.dataTransfer.setData("text/plain", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("text/plain");
      const data = event.dataTransfer.getData("text/json");
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: JSON.parse(data),
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="w-full no-items-nav-h flex flex-wrap">
      {props.helmet}
      {/* playground */}
      <aside className="absolute z-50 left-[115px] bottom-0 w-[120px] no-items-nav-h p-3 text-xs">
        {endpoints ? (
          <div className="mb-3">
            <ul className="relative z-50">
              {endpoints.API.map((endpoint) => (
                <li
                  className="mb-4 bg-[#fff]/30 shadow-lg rounded-full p-1 pl-2 overflow-hidden flex justify-between border border-gray-100 hover:bg-[#fff] hover:border-gray-300 hover:cursor-pointer"
                  onDragStart={(event) =>
                    onDragStart(event, "endpoint", endpoint)
                  }
                  draggable
                >
                  <span>{endpoint.request.uri}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          null
        )}
      </aside>
      <div
        className="reactflow-wrapper relative w-full h-full"
        ref={reactFlowWrapper}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={initialNodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            minZoom={0.4}
            proOptions={{ hideAttribution: true }}
          >
            <Background
              variant="dots"
              gap={15}
              size={1}
              className="bg-gray-50"
            />
            <MiniMap
              nodeColor={miniMapNodeColor}
              nodeStrokeWidth={3}
              pannable={true}
            />
            <Controls
              showZoom
              showFitView
              showInteractive
              position="top-right"
              className="w-fit h-fit block absolute top-0 right-0 bg-[#fff] shadow-none border"
            >
              {/* extra controls */}
              <div className="absolute flex flex-wrap flex-row top-[-1px] right-[26px] h-[28px] w-[58px] bg-[#fff] border">
                <button className="block h-full w-[28px] border-r bg-gray-100" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </button>
                <button className="block h-full w-[28px] bg-gray-100" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="gray"
                    className="w-4 h-4 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                    />
                  </svg>
                </button>
              </div>
            </Controls>
          </ReactFlow>
        </ReactFlowProvider>
      </div>

      {/* MODALS */}
      {/* <NodeWriter nodes={nodes} addNode={addNode} />
      <Assistant /> */}
    </div>
  );
}

class TheLogic extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.endpoints) {
      this.props.retrieveEndpoints();
      // this.props.retrieveProjects();
      // this.props.retrieveModels();
    }
  }

  render() {
    return <Inner endpoints={this.props.endpoints} helmet={this.props.helmet} />;
  }
}

const mapStateToProps = (state) => ({
  endpoints: store.getState().endpointReducer.payload,
  projects: store.getState().projectReducer.payload,
  models: store.getState().modelReducer.payload,
});

export default connect(mapStateToProps, {
  retrieveEndpoints,
  retrieveProjects,
  retrieveModels,
})(TheLogic);
