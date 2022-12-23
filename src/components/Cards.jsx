import React from "react";
import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

const Cards = () => {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="michael.kean"
        likedByNumber={89}
        hours={16}
      />

      <Card
        accountName="mapvault"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="the.real.man"
        likedByNumber={47}
        hours={12}
      />

      <Card
        accountName="moriah.stham"
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="leopold.albu"
        likedByNumber={52}
        hours={4}
      />
    </div>
  );
};

export default Cards;
