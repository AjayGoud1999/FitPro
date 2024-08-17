import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/exercise.css";
import axios from "axios";
import ExerciseCard from "./exerciseCard";
import CardComponent from "./cardcomponent";
import Footer from "./footer.js";
import { TailSpin } from "react-loader-spinner";

const Exercise = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedPart, setSelectedPart] = useState("back");

  useEffect(() => {
    getBodyParts();
  }, []);

  const getBodyParts = () => {
    setLoading(true);
    axios
      .get(`${API_URL}/backend/getBodyPartList`)
      .then((res) => {
        const filteredBodyParts = res.data.details.filter(
          (part) => part !== "cardio" && part !== "Biceps" && part !== "arms"
        );
        setBodyParts(filteredBodyParts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="scroll-sec" id="exercise">
        <div>
          <Container
            className="exercise-cont"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Row>
              <Col className="cont-col">
                <h2 className="text">Awesome exercises you</h2>
                <h2 className="text">should know</h2>
                <Form className="d-flex"></Form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",  // Center the dropdown
                    margin: "10px 5px 0px 5px",
                  }}
                >
                  <CardComponent
                    title="Select Body Part"
                    bodyParts={bodyParts}
                    onSelect={setSelectedPart}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section style={{ padding: "0px 10px" }}>
        <ExerciseCard data={selectedPart} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Exercise;
