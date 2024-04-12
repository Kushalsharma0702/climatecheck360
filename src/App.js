import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust the path as needed
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import CurrentLocation from "./currentLocation";
import { auth } from "./firebase"; // Importing Firebase
import { onAuthStateChanged } from "firebase/auth"; // Importing onAuthStateChanged
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home name={userName} />} />
          </Routes>
        </Router>
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;
