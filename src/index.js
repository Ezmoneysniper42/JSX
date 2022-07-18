// const React = require("react");
// const ReactDOM = require("react-dom");

////////// Instead of requiring dependencies with old ways know we can just replace them by the following using import only ////////
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World! </h1>
    <p> This is a paragraph </p>
  </div>,
  document.getElementById("root")
);
