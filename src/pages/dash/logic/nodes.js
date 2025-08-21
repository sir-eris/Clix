import {
  Endpoint,
  Response,
  DataModel,
  CustomNode,
  ErrorResponse,
  TransferNodeDataOff,
  // stripe sample nodes
  // newUser,
  // chargeUser,
} from "./customNodes/clix";

// API
export const APInodeTypes = {
  endpoint: Endpoint,
  response: Response,
  dataModel: DataModel,
  customNode: CustomNode,
  errorResponse: ErrorResponse,
  transferNodeDataOff: TransferNodeDataOff,
  // stripe sample nodes
  // newUser: newUser,
  // chargeUser: chargeUser,
};
export const APINodes = [
  {
    id: "0",
    type: "endpoint",
    position: { x: 250, y: 200 },
    data: {
      request: { uri: "/user/new", method: "POST" },
      params: "x-auth-token",
      headers: "Content-Type: application/json",
      body: {
        payload: {
          0: ["email", "email"],
          1: ["name", "str"],
          2: ["phone", "int"],
          3: ["password", "str"],
          4: ["thumbnail", "bin"],
        },
      },
    },
  },
  {
    id: "1",
    type: "dataModel",
    position: { x: 700, y: 100 },
  },
  {
    id: "2",
    type: "response",
    position: { x: 1300, y: 300 },
  },
  {
    id: "3",
    type: "transferNodeDataOff",
    position: { x: 1000, y: 600 },
  },
  {
    id: "4",
    type: "errorResponse",
    position: { x: 1300, y: 700 },
  },
  // {
  //   id: "101",
  //   type: "newUser",
  //   position: { x: 1080, y: 50 },
  // },
  // {
  //   id: "102",
  //   type: "chargeUser",
  //   position: { x: 1080, y: 400 },
  // },
];


// HOME
export const homeNodeTypes = {
  endpoint: Endpoint,
  response: Response,
  dataModel: DataModel,
  customNode: CustomNode,
  errorResponse: ErrorResponse,
  transferNodeDataOff: TransferNodeDataOff,
};
export const homeNodes = [
  {
    id: "0",
    type: "endpoint",
    position: { x: 100, y: 350 },
    data: {
      request: {uri: "/user/new", method: "POST"},
      params: "x-auth-token",
      headers: "Content-Type: application/json",
      body: {payload: {
        0: ["email", "email"],
        1: ["name", "str"],
        2: ["phone", "int"],
        3: ["password", "str"],
        4: ["thumbnail", "bin"],
      }},
      css: { container: "scale-[0.8]" },
    },
  },
  {
    id: "1",
    type: "dataModel",
    position: { x: 100, y: 800 },
    data: { css: { container: "scale-[0.8]" } },
  },
  {
    id: "2",
    type: "response",
    position: { x: 1200, y: 600 },
    data: { css: { container: "scale-[0.8]" } },
  },
  {
    id: "3",
    type: "transferNodeDataOff",
    position: { x: 550, y: 1350 },
    data: { css: { container: "scale-[0.8]" } },
  },
  {
    id: "4",
    type: "errorResponse",
    position: { x: 1300, y: 1150 },
    data: { css: { container: "scale-[0.8]" } },
  },
];


// CTA
export const CTANodeTypes = {
  endpoint: Endpoint,
  response: Response,
  dataModel: DataModel,
  customNode: CustomNode,
  errorResponse: ErrorResponse,
  transferNodeDataOff: TransferNodeDataOff,
};

export const CTANodes = [
  {
    id: "0",
    type: "endpoint",
    position: { x: 50, y: 200 },
    data: {
      request: { uri: "/user/new", method: "POST" },
      params: "x-auth-token",
      headers: "Content-Type: application/json",
      body: {
        payload: {
          0: ["email", "email"],
          1: ["name", "str"],
          2: ["phone", "int"],
          3: ["password", "str"],
          4: ["thumbnail", "bin"],
        },
      },
    },
  },
  {
    id: "1",
    type: "dataModel",
    position: { x: 50, y: -300 },
  },
  {
    id: "2",
    type: "transferNodeDataOff",
    position: { x: 400, y: 300 },
  },
  {
    id: "3",
    type: "response",
    position: { x: 1200, y: 50 },
  },
  {
    id: "4",
    type: "errorResponse",
    position: { x: 1300, y: 1150 },
  },
  // {
  //   id: "3",
  //   type: "customNode",
  //   position: { x: 200, y: 400 },
  //   data: DATA,
  // },
];
