import React from "react";
import '../css/details.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Boy from '../assets/boy.png';

export default function Contact() {
    const dim = {
        "width": 500,
        "height": 500
    }
    return (
        <div className="my">
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Image alt='gymboy' src={Boy} style={dim} className='col-img' />
                        </Col>
                        <Col>
                            <h2>FitPro</h2>
                            <h5>We help to give you the tools necessary to reach your goals.</h5><p> </p>
                            <p>Contact at 1-456-466-4556</p>
                            <p>Email at fitpro@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}