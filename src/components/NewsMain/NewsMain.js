import React, { useState } from "react";
// style
import "./newsmain.scss";
// react bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";
// data
import data from "../../Data/data.json";
// react router dom
import { useHistory } from "react-router-dom";

const NewsMain = () => {
  const [newsData, setNewsData] = useState(data);
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <section id="mewsMain" onClick={handleClick}>
        <Container>
          <Row>
            {newsData.data.slice(0, 3).map((news) => {
              const { title, description, customTime } = news;
              return (
                <Col xl={4}>
                  <Card className={news.border}>
                    <Card.Body>
                      <Card.Title className="news_title">{title}</Card.Title>
                      <Card.Text className="news_text">
                        {description.slice(0, 70)}..
                      </Card.Text>
                      <Card.Text className="time">{customTime}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsMain;
