import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';

function PaymentGateway({ onClose }) {
  const handlePayment = (url) => {
    // Redirect user to the specified payment platform URL
    window.location.href = url;
    onClose(); // Close the payment gateway modal after redirection
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={() => handlePayment('https://pay.google.com/gp/v/pub/transact?gsrc=apps&payment=true')} className="mb-3 me-2">GPay</Button>
        <Button variant="success" onClick={() => handlePayment('https://paytm.com/')} className="mb-3 me-2">Paytm</Button>
        <Button variant="info" onClick={() => handlePayment('https://www.phonepe.com/')} className="mb-3 me-2">PhonePe</Button>
        <Button variant="warning" onClick={() => handlePayment('https://netbanking.example.com/')} className="mb-3 me-2">Netbanking</Button>
      </Modal.Body>
    </Modal>
  );
}

function BusDetails() {
  const { id } = useParams();

  const busDetails = {
    id: id,
    name: 'City Travels',
    duration: '3 hours',
    price: 1500, 
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
  const [totalPrice, setTotalPrice] = useState(busDetails.price); // Initialize total price with default price
  const [selectedSeatType, setSelectedSeatType] = useState('Non-Sleeper');
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === busImages.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [busImages.length]);

  const handleSeatTypeChange = (e) => {
    const { value } = e.target;
    setSelectedSeatType(value);
   
    if (value === 'Sleeper') {
      setTotalPrice(busDetails.price + 300);
    } else {
      setTotalPrice(busDetails.price);
    }
  };

  const handlePay = () => {
    setShowPayment(true);
  };

  return (
    <div style={{ backgroundColor: "lightgoldenrodyellow", minHeight: "100vh", position: "relative" }}>
      <header className="py-4" style={{ backgroundColor: "gray" }}>
        <Container>
          <h1 className="text-center">Bus Details</h1>
        </Container>
      </header>
      <main>
        <Container>
          <Row className='mt-4'>
            <Col md={6}>
              <Card className="mb-4" style={{backgroundColor:"lightgray"}}>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <div>
                        <Card.Title className="text-primary">{busDetails.name}</Card.Title>
                        <Card.Text>
                          <p><strong>Bus ID:</strong> {busDetails.id}</p>
                          <p><strong>Duration:</strong> {busDetails.duration}</p>
                          <p><strong>Price:</strong> ₹{totalPrice}</p> {/* Display total price dynamically */}
                          <p><strong>Start Time:</strong> {busDetails.startTime}</p>
                          <p><strong>End Time:</strong> {busDetails.endTime}</p>
                        </Card.Text>
                      </div>
                    </Col>
                    <Col md={6} style={{marginTop:"40px"}}>
                      <p><strong>Ratings:</strong> {busDetails.ratings}&#9733;</p>
                      <p><strong>Seats Available:</strong> {busDetails.seatsAvailable}</p>
                      <p><strong>Bus Type:</strong> {busDetails.busType}</p>
                      <Form>
                        <strong>Seat Type:</strong>
                        <Row className="mb-3">
                          <Col>
                            <Form.Check
                              type="radio"
                              id="sleeperRadio"
                              label="Sleeper"
                              value="Sleeper"
                              name="busSleeper"
                              checked={selectedSeatType === 'Sleeper'}
                              onChange={handleSeatTypeChange}
                              className="mb-2"
                              style={{ color: 'black' }} // Change the color of the radio button
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              id="semiSleeperRadio"
                              label="Semi-Sleeper"
                              value="Semi-Sleeper"
                              name="busSleeper"
                              checked={selectedSeatType === 'Semi-Sleeper'}
                              onChange={handleSeatTypeChange}
                              className="mb-2"
                              style={{ color: 'black' }} // Change the color of the radio button
                            />
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-4" style={{backgroundColor:"lightgray"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Total Price</Card.Title>
                      <Card.Text>Total: ₹{totalPrice}</Card.Text> 
                    </Col>
                    <Col>
                      <Button variant="primary" onClick={handlePay} style={{ marginLeft: "200px", marginTop: "20px" }}>Pay</Button>
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

      {/* Payment gateway modal */}
      {showPayment && <PaymentGateway onClose={() => setShowPayment(false)} />}
    </div>
  );
}

export default BusDetails;
