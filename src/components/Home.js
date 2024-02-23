import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import background from '../assets/backgr.avif';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${background})` }}>
            <Container>
                <Row className="justify-content-center align-items-center text-center">
                    <Col xs={12} md={6}>
                        <div className="content p-4 rounded">
                            <h1 className="mb-4">Welcome to Our Bus  Ticket Booking App</h1>
                            <p className="mb-4">Please sign up or log in to continue</p>
                            <div className="button-container">
                                <Link to='/signup'>
                                    <Button variant="primary" size="lg" className="mr-2">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to='/login'>
                                    <Button variant="success" size="lg" style={{marginLeft:"10px"}}>
                                        Login
                                    </Button>
                                </Link>
                            </div>
                            <h5 className="mt-4">If Already Signed up click login</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
