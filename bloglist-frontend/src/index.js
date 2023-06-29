import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './reducers/store'
import { Provider } from 'react-redux'
import { UserContextProvider } from './UserContext'

console.log("store: ", store.getState())
console.log("store: ", store) 

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserContextProvider>
);
