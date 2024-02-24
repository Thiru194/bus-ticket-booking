import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import background from '../assets/busback_cleanup.jpg';
import { Link } from 'react-router-dom'; // Import Link
import './HomePage.css'; // Import custom CSS for additional styling

const HomePage = () => {
  return (
    <div className="home-page-container d-flex flex-column" style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <Row className="justify-content-center align-items-center text-center flex-grow-1">
          <Col md={8}>
            <div className="content p-5 rounded">
              <h1 className="mb-4">Welcome to our BUS Ticket Booking App!</h1>
              <p className="mb-4">Book bus tickets conveniently with our easy-to-use app.</p>
              <Link to="/bus-booking">
                <Button variant="success" size="lg" className="mr-md-3">Book Bus Tickets</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="footer-container mt-auto">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p>&copy; 2024 BUS Ticket Booking App. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
