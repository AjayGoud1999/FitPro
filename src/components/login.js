import React from "react";
import '../css/details.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Boy from '../assets/boy.png';
import axios from "axios";import '../css/details.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const API_URL = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();
    const dim = {
        "width": 500,
        "height": 500
    }
    function loginSubmit(event){
        event.preventDefault()
         
          axios
          .post(`${API_URL}/backend/login`, {
            email:event.target[0].value,
            password:event.target[1].value,
          })
          .then((res) =>{
            console.log(res,"ress")
            if(res.data.status==='success'){
                // setData(res.data.status)
                alert('Login success')
                window.sessionStorage.setItem('useremail',event.target[0].value)
                navigate(`/homePage`)

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
                            <Image alt='gymboy' src={Boy} style={dim} className='col-img' />
                        </Col>
                        <Col>
                            <div className="Auth-form-container">
                                <form className="Auth-form" onSubmit={loginSubmit}>
                                    <div className="Auth-form-content">
                                        <h3 className="Auth-form-title">Sign In</h3>
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
                                            New User ? <a href="/register">Register</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}