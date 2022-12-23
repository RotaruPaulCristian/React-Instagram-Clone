import React from "react";
import "../styles/comment.scss";

const Comment = ({ accountName, comment }) => {
  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default Comment;
