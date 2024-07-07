import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../css/mainSection.css";
import Boy from "../assets/boy.png";
import Exercise from "./exercise";

const mainSection = () => {
  
  const dim = {
    width: 500,
    height: 500,
  };
  return (
    <section className="main-sec" id="home">
      <Container className="main-cont">
        <Row className="main-row">
          <Col className="text-col">
            <h3>Fitness</h3>
            <h1 className="sub-head">Lift More. Get Stronger.</h1>
            <h1 className="sub-head">We're here to help you get stronger.</h1>
            <h4 className="sub-text">Checkout the most effective exercises</h4>
            <Button size="lg">Explore exercises</Button>
            <h1 className="big-text">Exercise</h1>
          </Col>
          <Col className="img-col">
            <Image alt="gymboy" src={Boy} style={dim} className="col-img" />
          </Col>
        </Row>
      </Container>
      <Exercise />
    </section>
  );
};

export default mainSection;
