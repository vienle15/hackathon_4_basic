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
            <h5 className="card-title">Cho 3 điểm</h5>

            <button className="delete-button">Delete</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hay hay hay</h5>

            <button className="delete-button">Delete</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Note sth</h5>

            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
