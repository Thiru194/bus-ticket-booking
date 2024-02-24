import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const buses = [
  {
    id: 1,
    name: 'City Travels',
    image: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain',
    duration: '3 hours',
    price: '₹1500',
    startTime: '19:00',
    endTime: '22:00',
  },
  {
    id: 1,
    name: 'City Travels',
    image: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain',
    duration: '3 hours',
    price: '₹1500',
    startTime: '19:00',
    endTime: '22:00',
  },
  {
    id: 1,
    name: 'City Travels',
    image: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain',
    duration: '3 hours',
    price: '₹1500',
    startTime: '19:00',
    endTime: '22:00',
  },
  {
    id: 1,
    name: 'City Travels',
    image: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain',
    duration: '3 hours',
    price: '₹1500',
    startTime: '19:00',
    endTime: '22:00',
  },
  // Add more bus objects with additional fields as needed
];

const BusList = () => {
  return (
    <div style={{ backgroundColor: "lightgray", minHeight: "100vh", paddingTop: "50px" }}>
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Available Buses</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {buses.map(bus => (
            <Col key={bus.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={bus.image} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className='text-center'>{bus.name}</Card.Title>
                  <Card.Text>{bus.description}</Card.Text>
                  <Card.Text><strong>Duration:</strong> {bus.duration}</Card.Text>
                  <Card.Text><strong>Price:</strong> {bus.price}</Card.Text>
                  <Card.Text><strong>Start Time:</strong> {bus.startTime}</Card.Text>
                  <Card.Text><strong>End Time:</strong> {bus.endTime}</Card.Text>
                  <div className="d-grid">
                    <Button as={Link} to={`/bus/${bus.id}`} variant="primary">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BusList;
