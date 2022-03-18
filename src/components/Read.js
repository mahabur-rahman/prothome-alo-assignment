import React from "react";
// react bootstrap
import { Image } from "react-bootstrap";
// comp
import Title from "./Title";
import Time from "./Time";
// react router 
import { useHistory } from "react-router-dom";

const Read = ({ img }) => {
  const history = useHistory()

  const handleClick = () =>{
    history.push('/')
  }
  return (
    <>
      <section className="read_text">
        <div className="d-flex">
          <Title
            title={"ছাপা কাগজের মতো পড়ুন আজকের পত্রিকা "}
            onClick={handleClick}
          />
          <Image src={img} alt={"PPE News"} fluid className="news_img" />
        </div>
      </section>
    </>
  );
};

export default Read;
