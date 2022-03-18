import React from "react";
// react bootstrap
import { Image } from "react-bootstrap";
// comp
import Title from "./Title";
import Time from "./Time";

const PPE = ({ ppeImg }) => {
  return (
    <>
      <section className="ppe">
        <div className="d-flex">
          <Image src={ppeImg} alt={"PPE News"} fluid />
          <Title title={"পিপিই উৎপাদনে অনুদান দিচ্ছে বিশ্বব্যাংক"} />
        </div>
        <Time time={"১০ ঘন্টা আগে"} />
      </section>
    </>
  );
};

export default PPE;
