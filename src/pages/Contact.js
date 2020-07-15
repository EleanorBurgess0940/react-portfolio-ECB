import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col size="md-12">
            <h1> Ways of Contacting</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Link to my resume:
              https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2eb6505e-1b61-479d-a566-ed404a65e24e
            </p>
            <p>Link to my Github: https://github.com/EleanorBurgess0940</p>
            <p>
              Link to my LinkedIn:
              <a
                href="https://www.linkedin.com/in/eleanor-burgess-14a08b1a3/"
                target="_black"
              >
                <i class="fa fa-linked-in"></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
