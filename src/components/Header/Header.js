import React from "react";
// style
import "./header.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// logo
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <>
      <header id="header" className="py-3">
        <Container>
          <Row>
            <Col>
              <div className="logo_img">
                <Image src={logo} alt="logo" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
