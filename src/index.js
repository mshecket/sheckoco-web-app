/*
  This is just boilerplate that loads up React and ReactDOM and displays
  our main App inside the <div> with the ID of "root" in our index.html.

  It also loads up our stylesheet and the App itself.
*/

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import App from "./App"

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
