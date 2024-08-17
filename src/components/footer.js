import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../css/footer.css';

const footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row >
                <h1 className='foot-text'>FitPro</h1>
                <h6 className='foot-sub-txt'>Copyright © 2023 FitPro. All Rights Reserved.
Disclaimer | Privacy Policy</h6>
            </Row>
        </Container>
    </section>
  )
}

export default footer