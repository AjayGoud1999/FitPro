import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Carousel,
  CarouselItem,
  CardGroup,
  Alert,
} from "react-bootstrap";
import "../css/exercise.css";
import { Data } from "./data";
import Boy from "../assets/boy.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "./exerciseCard";
import CardComponent from "./cardcomponent";
import Footer from "./footer.js";

const Exercise = () => {
  const [search, setSearch] = useState("");
  const [bodyparts, setBodyParts] = useState([]);
  const [selectedPart, setSelectePart] = useState();
  useEffect(() => {
    getBodyparts();
  }, []);

  const getBodyparts = () => {
    axios
      .get("http://localhost:3001/backend/getBodyPartList")
      .then((res) => setBodyParts(res.data.details))
      .catch((err) => console.log(err));
  };
  const validate = () => {
    let index = bodyparts.findIndex((d) => d == search.toLowerCase());
    console.log("Index", index, search);
    if (index !== -1) {
      setSelectePart(search);
    } else {
      alert("INVALID SEARCH");
    }
  };
  return (
    <div>
      <section className="scroll-sec" id="exercise">
        <div >
          <Container className="exercise-cont" style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "5px" }}>
            <Row>
              <Col className="cont-col">
                <h2 className="text">Awesome exercises you</h2>
                <h2 className="text">should know</h2>
                <Form className="d-flex search-bar">
                  <Form.Control
                    type="search"
                    placeholder="Search exercises"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button variant="primary" size="lg" onClick={() => validate()}>
                    Search
                  </Button>
                </Form>
                {/* <Carousel
                className="card-carousel"
                variant="dark"
                indicators={false}
              > */}
                <div style={{ display: "flex", justifyContent: "center", margin: "10px 5px 0px 5px" }} >
                  {bodyparts.map((d, k) => (
                    <div onClick={()=>setSelectePart(d.toLowerCase())}>
                      <CardComponent key={k} image={Boy} title={d} />
                    </div>
                  ))}
                </div>

                {/* </Carousel> */}
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
