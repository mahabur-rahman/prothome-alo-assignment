import React from "react";
// style
import "./rightside.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// img
import screenShot from "../../images/nagad.png";
import actressImg from "../../images/sidenews.png";
import ppeImg from "../../images/ppe.jpg";
import primeMinister from "../../images/prime_minister.jpg";
// comp
import ActressImg from "../ActressImg";
import PPE from "../PPE";
import Read from "../Read";
import { useHistory } from "react-router-dom";

const RightSide = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <section id="rightSidebar">
      <div className="mx-2">
        <Image
          className="nagad_img mt-3"
          src={screenShot}
          alt="News of Nagad"
          fluid
          onClick={handleClick}
        />

        <hr />

        <ActressImg actressImg={actressImg} />
        <PPE ppeImg={ppeImg} />
        <Read img={primeMinister} />
      </div>
    </section>
  );
};

export default RightSide;
