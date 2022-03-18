import React from "react";
import { Link } from "react-router-dom";

const Similler = ({ title, text, time }) => {
  return (
    <>
      <Link to="/">
        <h5 className="title">{title}</h5>
        <p className="text">{text}</p>
        <span className="time">{time}</span>
      </Link>
    </>
  );
};

export default Similler;
