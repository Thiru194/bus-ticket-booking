import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import backgroun from '../assets/backj2.jpg';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({}); // State to manage form validation errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation error message when user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    // If there are validation errors, set them and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Logic to handle signup
      console.log('Signup form submitted:', formData);
      // Navigate to login page
      window.location.href = '/login';
    }
  };

  const styles = {
    main: {
      backgroundImage: `url(${backgroun})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:"730px",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'black', // Example text color
    }
  };

  return (
    <div style={styles.main}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h2 style={{marginLeft:"250px"}}>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              </Form.Group>
              
              <Button variant="success" type="submit" style={{marginLeft:"250px",marginTop:"10px"}}>
                Sign Up
              </Button>
            </Form>
            <p  style={{marginLeft:"190px"}}>Already have an account? <Link to="/login">Login</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
