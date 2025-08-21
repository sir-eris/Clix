import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authReducer";
import modelReducer from "./reducers/modelReducer";
import accountReducer from "./reducers/accountReducer";
import projectReducer from "./reducers/projectReducer";
import endpointReducer from "./reducers/endpointReducer";
import environmentReducer from "./reducers/environmentReducer";
import notificationReducer from "./reducers/notificationReducer";


const initialState = {};

export default configureStore({
    reducer: {
      authReducer,
      projectReducer,
      modelReducer,
      endpointReducer,
      accountReducer,
      notificationReducer,
      environmentReducer,

      initialState,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

