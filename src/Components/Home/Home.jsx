import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const Home = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Home:", { username, password });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Home</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;