import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function BusDetails() {
  const { id } = useParams();

  const busDetails = {
    id: id,
    name: 'City Travels',
    duration: '3 hours',
    price: '₹1500',
    startTime: '19:00',
    endTime: '22:00',
    ratings: 4.5,
    seatsAvailable: 20,
    busType: 'Non-AC'
  };

  const busImages = [
    'https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/172079/gallery_g2.jpg',
    'https://content3.jdmagicbox.com/comp/coimbatore/80/0422p422stdf005780/catalogue/city-travels-gandhipuram-coimbatore-coimbatore-bus-ticketing-agents-1fsm8jd.jpg',
    'https://media.istockphoto.com/id/1197014116/photo/travel-company-bus.jpg?s=612x612&w=0&k=20&c=IuJZJW5QbNpzToIOnZ0rY4hLQ-F4GIc-iechEQlf_Wc=',
    'https://t3.ftcdn.net/jpg/03/08/64/54/360_F_308645457_r5BWKcNrnHvvq8R9wKBiCQk6ri93kJwR.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === busImages.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [busImages.length]);


  return (
    <div style={{ backgroundColor: "lightgray", minHeight: "100vh", position: "relative" }}>
      <header className="py-4" style={{ backgroundColor: "gray" }}>
        <Container>
          <h1 className="text-center">Bus Details</h1>
        </Container>
      </header>
      <main>
        <Container>
          <Row className='mt-4'>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="text-primary">{busDetails.name}</Card.Title>
                  <Card.Text>
                    <strong>Bus ID:</strong> {busDetails.id}
                    <br />
                    <strong>Duration:</strong> {busDetails.duration}
                    <br />
                    <strong>Price:</strong> {busDetails.price}
                    <br />
                    <strong>Start Time:</strong> {busDetails.startTime}
                    <br />
                    <strong>End Time:</strong> {busDetails.endTime}
                    <br />
                    <strong>Ratings:</strong> {busDetails.ratings}
                    <br />
                    <strong>Seats Available:</strong> {busDetails.seatsAvailable}
                    <br />
                    <strong>Bus Type:</strong> {busDetails.busType}
                    <br />

                    <Form>
                      <strong>Seat Type:</strong>
                      <Row>
                        <Col>
                          <Form.Group controlId="formSleeper">
                            <Form.Check type="radio" label="Sleeper" name="busSleeper" id="sleeperRadio" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="formSemiSleeper">
                            <Form.Check type="radio" label="Semi-Sleeper" name="busSleeper" id="semiSleeperRadio" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Text>
                </Card.Body>

              </Card>
              <Card className="mb-4">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Total Price</Card.Title>
                      <Card.Text>Total: {busDetails.price}</Card.Text>
                    </Col>
                    <Col>
                      <Button variant="primary" style={{ marginLeft: "200px", marginTop: "20px" }}>Pay</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

            </Col>
            <Col md={6}>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {busImages.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`} style={{ height: '500px' }}>
                      <img src={image} className="d-block w-100 h-100" alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-4 " style={{ position: "absolute", bottom: "0", width: "100%", backgroundColor: "lightcyan" }}>
        <Container>
          <h5 className="text-center">{busDetails.name}&copy; 2024. All rights reserved.</h5>
        </Container>
      </footer>
    </div>
  );
}

export default BusDetails;
