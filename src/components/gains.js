import React from 'react';
import '../css/gains.css';
import {Row, Col, Container} from 'react-bootstrap';

const gains = (props) => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                <img src={props.url} alt="logo"></img>
                </Col>
                <Col>
                  <div className='pn'>
                    <h5 >{props.name}</h5>
                  </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default gains