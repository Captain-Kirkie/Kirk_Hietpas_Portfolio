import React from "react";
import ScrollerListItem from "./ScrollerListItem";

const Scroller = () => {
  return (
    <div className="flex-center">
      <ScrollerListItem
        imgSrc="/repel.jpg"
        bio="Hello there! 👋 My name is Kirk Hietpas and I am a Software Engineer currently living in Salt Lake City, UT. I currently work on the Cloud team at PassiveLogic building back-end cloud services using Server Side Swift, Vapor, PostgresQL and GraphQL. I have a deep passion for learning and thoroughly enjoy working as a Software Engineer."
      />
      <ScrollerListItem
        imgSrc="/running.jpg"
        bio="In 2021 I graduated with a Master of Software Development from the University of Utah. In 2015 I graduated with a Bachelor of Biology with a minor in Chemistry from the University of Minnesota-Duluth."
      />
      <ScrollerListItem
        imgSrc="/skiing.jpg"
        bio="If you have made it this far, I am guessing you know I like the outdoors. When I am not working I am running, biking, skiing or climbing!"
      />
    </div>
  );
};

export default Scroller;
