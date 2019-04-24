import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Paper from "./components/Paper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>React Counter App</code>
        <img src={logo} className="App-logo" alt="logo" />
        <Paper />
      </header>
    </div>
  );
}

export default App;
