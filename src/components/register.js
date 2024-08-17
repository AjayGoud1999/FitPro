import React, { useEffect, useState } from "react";
import axios from "axios";import '../css/details.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Boy from '../assets/boy.png';
import { useNavigate } from 'react-router-dom';
import '../css/details.css';
export default function Register() {
    const API_URL = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();
    const [data,setData] = useState([])
    const dim = {
        "width": 500,
        "height": 500
    }
    function registerSubmit(event){
        event.preventDefault()
         
          axios
          .post(`${API_URL}/backend/register`, {
            username:event.target[0].value,
            email:event.target[1].value,
            password:event.target[2].value
          })
          .then((res) =>{
            if(res.data.status==='success'){
                // setData(res.data.status)
                alert('Registration success')
                navigate(`/login`)

            }else{
                alert(res.data.message)
            }
          })
          .catch((err) => console.log(err));

        // console.log(event.target[0].value,event.target[1].value,event.target[2].value,"event")
    }
    return (
        <div className="my">
            <section>
                <Container className="setMT2">
                    <Row>
                    
                        <Col>
                            <div className="Auth-form-container">
                                <form className="Auth-form" onSubmit={registerSubmit}>
                                    <div className="Auth-form-content">
                                        <h3 className="Auth-form-title">Registration</h3>
                                        <div className="form-group mt-3">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                className="form-control mt-1"
                                                placeholder="Enter username"
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                className="form-control mt-1"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control mt-1"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                        <p className="forgot-password text-right mt-2">
                                            Already Registered ? <a href="/login">Sign In</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col>
                            <Image alt='gymboy' src={Boy} style={dim} className='col-img' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}