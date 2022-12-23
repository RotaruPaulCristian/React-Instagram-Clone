import React from "react";
import "../styles/sidebar.scss";
import image from "../images/myProfile.jpg";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="rotaru.cristian"
          caption="Cristian Rotaru"
          urlText="Switch"
          iconSize="large"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
};

export default Sidebar;
