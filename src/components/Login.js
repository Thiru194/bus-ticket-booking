import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import backgroun from '../assets/backj2.jpg';

function Login() {
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
      // Logic to handle login
      console.log('Login form submitted:', formData);
      // Navigate to homepage after successful login
      window.location.href = '/homepage'; // Navigate to the homepage
    }
  };

  const styles = {
    main: {
      backgroundImage: `url(${backgroun})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: "100vh", // Set minimum height to fill the viewport
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black', // Example text color
    }
  };

  return (
    <div style={styles.main}>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}> {/* Center the form on medium screens */}
            <h2 className='text-center'>Login</h2>
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
              <div className='text-center'>
              <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                Login
              </Button>
              </div>
            </Form>
            <p className='text-center'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
