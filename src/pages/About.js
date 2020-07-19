import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";

function About() {
  return (
    <div>
      <Container>
        <br></br>
        <Row className="centered">
          <Col size="md-12">
            <h1> About Me</h1>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <img
              style={{ height: 300 }}
              className="profilePicture"
              src="assets/imgs/Elly-Burgess.jpg"
              alt="profile"
            ></img>
          </Col>
          <Col size="md-8">
            <p>
              I am currently residing in Manayunk, Pennsylvania. I own a Jack
              Russell mix named Leela. I have a degree from Johnson and Wales
              University in Culinary Arts and Food Service Management. I am
              currently attending Penn's LPS Coding Boot Camp and will graduate
              in August. Prior to starting the UPenn bootcamp I used to work as
              the Assistant Operational Manager at La Prima catering.
            </p>
            <p>
              One of the highlights from working at La Prima Catering was
              feeding the Philadelphia 76ers and the Philadelphia Flyers. I
              decided to take this program was for a change of pace. When I am
              not programming I enjoy baking/cooking and walking my dog.I am an
              avid supporter of the Philadelphia Union soccer team. I also enjoy
              traveling and most recently went to India for the Holiday season
              two years ago.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
