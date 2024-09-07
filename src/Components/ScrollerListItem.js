import React from "react";

const ScrollerListItem = (props) => {
  return (
    <ul className="item-showcase">
      <img src={props.imgSrc} alt="imgAlt" className="image-kirk" />
      <div className="bio-wrapper">
        <div className="bio">{props.bio}</div>
      </div>
    </ul>
  );
};

export default ScrollerListItem;
