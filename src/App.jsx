import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import "./App.css";
import RSideBar from "./components/RSideBar/RSideBar.jsx";
import Content1 from "./components/Content1/Content1.jsx";
import Content23P from "./components/Content23P/Content23P.jsx";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="WholeDiv">
        <SideBar></SideBar>
        <div className="ContentDiv">
          <Content1></Content1>
          <Content23P />
        </div>
        <RSideBar />
      </div>
    </div>
  );
};

export default App;
