import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function Contact() {
  return (
    <div>
      <Container>
        <Row className="centered">
          <Col size="md-12">
            <h1> Ways of Contacting</h1>
          </Col>
        </Row>
        <Row className="centered">
          <img
            style={{ height: 300 }}
            className="contact"
            src="assets/imgs/cheetah.jpg"
            alt="Contact Me"
          ></img>
        </Row>
        <Row className="centered">
          <Col size="md-12">
            <Row className="centered">
              <p>
                {" "}
                <a
                  className="btn github"
                  id="github"
                  href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:2eb6505e-1b61-479d-a566-ed404a65e24e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Link to my Resume
                </a>
              </p>

              <p>
                {" "}
                <a
                  className="btn github"
                  id="github"
                  href="https://github.com/EleanorBurgess0940"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Link to my Github
                </a>
              </p>
              <p>
                <a
                  className="btn github"
                  id="github"
                  href="https://www.linkedin.com/in/eleanor-burgess-14a08b1a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Link to my LinkedIn
                </a>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
