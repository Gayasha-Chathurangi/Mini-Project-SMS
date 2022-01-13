import React from "react";
import './App.css';
import Signup from "../src/pages/Signup";
import Admin from "../src/pages/Admin";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Signup/>}/>
        <Route exact path = "/admin" element = {<Admin/>}/>
      </Routes>
       </Router> 
  );

}

export default App;
