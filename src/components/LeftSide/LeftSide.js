import React from "react";
// style
import "./leftside.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// comp
import NewsImg from "./NewsImg";
import Similler from "./Similler";
// img
import newsImg from "../../images/news.jpg";

const LeftSide = () => {
  return (
    <div id="leftSide" className="d-flex justify-content-between">
      <Container>
        <Row>
          <Col xl={4}>
            <Similler
              title={"মামুনুল হককে ডিবিতে হস্তান্তর "}
              text={
                "হেফাজতে ইসলামের যুগ্ম মহাসচিব মামুনুল হকের বিরুদ্ধে কেবল রাজধানীতেই অন্তত ১৭টি মামলা রয়েছে"
              }
              time={"১ ঘন্টা আগে"}
            />
          </Col>
          <Col xl={4}>
            <NewsImg
              newsImg={newsImg}
              subText={"হেফাজত নেতা মামুনুল হক । ছবি : দীপু মালাকার"}
            />
          </Col>
          <Col xl={4} className="border_side">
            <Similler
              title={" বিশ্ববিদ্যালয়ছাত্র রাব্বীর সারা শরীরে ক্ষত"}
              text={
                "হাতে, কাঁধের নিচে, বুকে ধারালো অস্ত্রের পোঁচ। হাঁ হয়ে থাকা ক্ষততে সেলাই পড়েছে সদ্য।"
              }
              time={"৪ ঘন্টা আগে"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeftSide;
