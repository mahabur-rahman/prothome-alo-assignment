import React, { useState } from "react";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
import ContentWithImg from "../components/ContentWithImg/ContentWithImg";
import Footer from "../components/Footer/Footer";
// components
import LeftSide from "../components/LeftSide/LeftSide";
import NewsMain from "../components/NewsMain/NewsMain";
import RightSide from "../components/RightSide/RightSide";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xl={9}>
            <LeftSide />
            <hr />
            <NewsMain />

            <ContentWithImg />
          </Col>

          <Col xl={3}>
            <RightSide />
          </Col>
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Home;
