import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Baselayout from "./components/Baselayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web Midi Application</h1>
        </header>
        <h3>
          This app is designed to allow control of a browser-based granular
          synthesizer with a Keith McMillen K-Mix.
        </h3>
        <Baselayout />
      </div>
    );
  }
}

export default App;
