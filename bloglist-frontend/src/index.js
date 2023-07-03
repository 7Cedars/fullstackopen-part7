import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './reducers/store'
import { Provider } from 'react-redux'
<script src="./node_modules/preline/dist/preline.js"></script>

console.log("store: ", store.getState())
console.log("store: ", store) 

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);
