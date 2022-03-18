import React from "react";
// style
import "./footer.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// footer img
import footerImg from "../../images/footerImg.png";
// comp
import Desc from "../Desc";

const Footer = () => {
  const para = "সত্ত্ব © ২০২২ প্রথম আলো । সম্পাদক ও প্রকাশক : মতিউর রহমান";
  return (
    <>
      <footer id="footer" className="text-center">
        <Container>
          <Row>
            <Col>
              <div className="footer_img">
                <Image src={footerImg} alt={"Footer"} fluid />
                <Desc text={para} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
