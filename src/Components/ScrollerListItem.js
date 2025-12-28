import React from "react";

const ScrollerListItem = ({ imgSrc, bio }) => {
    return (
        <div className="min-w-[250px] h-40 bg-gray-200 rounded-lg item item-showcase">
            <img src={imgSrc} alt="" className="image-kirk" loading="lazy" />
            <div className="bio-wrapper">
                <div className="bio">{bio}</div>
            </div>
        </div>
    );
};
export default ScrollerListItem;
