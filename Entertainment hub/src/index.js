import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// By - React project by Shobhit Pathak 
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
