import React from "react";

const ScrollerListItem = (props) => {
    console.log(props)
  return (
    <div className="flex-center">
      <ul className="item-showcase">
        <img
          src={props.imgSrc}
          alt="imgAlt"
          className="image-kirk"
        />
        <div className="bio-wrapper">
                  <div className="bio">
                      {props.bio}
                  </div>
        </div>
      </ul>
    </div>
  );
};

export default ScrollerListItem;
