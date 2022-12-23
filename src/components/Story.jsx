import React from "react";
import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="story">
      <ProfileIcon iconSize="large" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
};

export default Story;
