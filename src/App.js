import React, { useState } from "react";
import Navbar from "./Navbar"; // Adjust the path as needed
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
    <Navbar />
      <div className="container">
        <CurrentLocation />
      </div>
     
    </React.Fragment>
  );
}

export default App;
