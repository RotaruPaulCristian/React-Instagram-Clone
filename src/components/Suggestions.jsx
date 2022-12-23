import React from "react";
import "../styles/suggestions.scss";
import Profile from "./Profile";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="#">See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />

      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />

      <Profile
        caption="Followed by maxime.abc + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />

      <Profile
        caption="Followed by mapvault + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />

      <Profile
        caption="Followed by kamren + 2 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
};

export default Suggestions;
