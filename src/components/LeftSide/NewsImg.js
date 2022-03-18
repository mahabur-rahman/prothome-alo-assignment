import React from "react";
import { Image } from "react-bootstrap";

const NewsImg = ({ newsImg, subText }) => {
  return (
    <>
      <div className="new_img">
        <Image src={newsImg} alt="Top News" fluid />
        <p className="sub_text mt-1">{subText}</p>
      </div>
    </>
  );
};

export default NewsImg;
