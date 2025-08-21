import React from "react";
import store from "./app/store";
import Router from './pages/Router'
import { Provider } from "react-redux"
import ReactDOM from 'react-dom/client'
import reportWebVitals from './_tests/reportWebVitals'

import "./styling/style.css"
import "./styling/notification.css"
import "./styling/design.css"
import "./styling/tailwind.css"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
