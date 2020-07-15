import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-12">
            <h1> Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Project></Project>
          </Col>
          <Col size="md-5">
            <Project></Project>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
