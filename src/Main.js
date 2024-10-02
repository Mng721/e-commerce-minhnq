import { Outlet } from "react-router-dom";
import HeaderNavBar from "./components/Header/HeaderNavbar";
import React from "react";
import "./App.sass";
import TopHeader from "./components/Header/TopHeader";
const Main = () => {
  return (
    <div className="App-container">
      <div className="header-container">
        <TopHeader />
        <HeaderNavBar />
      </div>
      <div className="body-container">
        <div className="sidebar-container"></div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
