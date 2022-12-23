import React from "react";
import "../styles/stories.scss";
import HorizontalScroll from "react-horizontal-scrolling";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="stories">
      <HorizontalScroll reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
};

export default Stories;
