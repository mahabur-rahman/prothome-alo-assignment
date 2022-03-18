import React, { useState } from "react";
// style
import "./contentimg.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// data
import data from "../../Data/data.json";

const ContentWithImg = () => {
  const [newsData, setNewsData] = useState(data);
  return (
    <>
      <section id="mewsMain">
        <Container>
          <Row>
            {newsData.data.slice(0, 6).map((news) => {
              const {
                id,
                title,
                description,
                time,
                photo,
                border,
                customTime,
              } = news;
              return (
                <Col xl={4} key={id}>
                  <div className={`d-flex ${border}`}>
                    <Image
                      variant="top"
                      src={photo}
                      fluid
                      className={`top_news_img mt-3 mx-1 px-1`}
                    />

                    <div>
                      <h5 className="news_title">{title}</h5>

                      <p className="time">{customTime}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContentWithImg;
