import { Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const DefaultLayout = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Default:", { username, password });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>DefaultLayout</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;