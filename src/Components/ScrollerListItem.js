import React from "react";

const ScrollerListItem = (props) => {
    return (
        <ul className="item-showcase">
            <img
                src={props.imgSrc}
                alt="imgAlt"
                className="image-kirk"
                loading="lazy"
            />
            <div className="bio-wrapper">
                <div className="bio">{props.bio}</div>
            </div>
        </ul>
    );
};

export default ScrollerListItem;
