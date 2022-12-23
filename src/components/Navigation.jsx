import React from "react";
import "../styles/navigation.scss";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <img src={logo} alt="instagram logo" className="logo" />
        <div className="search">
          <img src={searchIcon} alt="search icon" className="searchIcon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
