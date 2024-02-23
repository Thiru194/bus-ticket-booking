import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import bus from '../assets/bus1.jpg'

// Define a list of predefined areas
const areas = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Kanniyakumari', 'Namakkal', 'Perambalur', 'Pudukottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi', 'Trichirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvannamalai', 'The NilgirisUdagamandalam', 'Vellore', 'Viluppuram', 'Virudhunagar'
];

function BusTicketBooking() {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: ''
  });

  const [suggestions, setSuggestions] = useState([]); // State to manage suggestions
  const [activeField, setActiveField] = useState(null); // State to manage active input field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Filter areas based on user input
    const filteredAreas = areas.filter(area =>
      area.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredAreas);
  };

  const handleSuggestionClick = (area) => {
    if (activeField === 'source') {
      setFormData({ ...formData, source: area });
    } else if (activeField === 'destination') {
      setFormData({ ...formData, destination: area });
    }
    setSuggestions([]); // Clear suggestions
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const isValidForm = formData.source && formData.destination && formData.date;

  const styles = {
    busPage: {
      backgroundImage: `url(${bus})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "730px",
    },
    suggestionsContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      marginTop: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      zIndex: '1000',
    },
    suggestedArea: {
      cursor: 'pointer', // Change cursor to pointer on hover
      padding: '5px',
      color:'black',
    },
  };

  return (
    <div style={styles.busPage}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2>Bus Ticket Booking</h2>
            <Form>
              <Row>
                <Col md={4}>
                  <Form.Group controlId="source">
                    <Form.Label>Source</Form.Label>
                    <Form.Control
                      type="text"
                      name="source"
                      placeholder="Enter source"
                      value={formData.source}
                      onChange={handleChange}
                      onFocus={() => handleFocus('source')}
                    />
                    {suggestions.length > 0 && activeField === 'source' && (
                      <div style={styles.suggestionsContainer}>
                        {suggestions.map((area, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(area)}
                            style={styles.suggestedArea} // Apply cursor style
                          >
                            {area}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="destination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      type="text"
                      name="destination"
                      placeholder="Enter destination"
                      value={formData.destination}
                      onChange={handleChange}
                      onFocus={() => handleFocus('destination')}
                    />
                    {suggestions.length > 0 && activeField === 'destination' && (
                      <div style={styles.suggestionsContainer}>
                        {suggestions.map((area, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(area)}
                            style={styles.suggestedArea} // Apply cursor style
                          >
                            {area}
                          </div>
                        ))}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Link to={{
                pathname: "/bus-list",
                state: formData // Pass form data as state to BusList component
              }}>
                <Button variant="success" style={{ marginLeft: "300px", marginTop: "20px" }} disabled={!isValidForm}>
                  Search Buses
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusTicketBooking;
