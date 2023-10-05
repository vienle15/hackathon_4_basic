import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>REVIEW APP</h2>
      <input id="search-ip" type="text" placeholder="search here" />
      <br />

      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">1</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">2</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
