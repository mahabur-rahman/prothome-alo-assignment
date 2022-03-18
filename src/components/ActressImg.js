import React from "react";
import { Image } from "react-bootstrap";
// react router
import { Link } from "react-router-dom";

const ActressImg = ({ actressImg }) => {
  return (
    <>
      <Link to="/">
        <Image src={actressImg} alt={"Top News"} className="res_img" fluid />
        <p
          style={{ fontSize: ".8rem", fontWeight: "600" }}
          className="mt-1 text-black"
        >
          স্মৃতিতে মিষ্টি মেয়ে...
        </p>
        <hr />
      </Link>
    </>
  );
};

export default ActressImg;
