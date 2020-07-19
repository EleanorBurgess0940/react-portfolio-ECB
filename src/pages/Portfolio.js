import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import Wrapper from "../components/Wrapper";
import Project from "../components/Project";

import projectData from "../components/projectData.json";

class Portfolio extends Component {
  state = {
    projects: projectData,
  };
  render() {
    const projectsArr = this.state.projects;
    const projectList = projectsArr.map((project) => (
      <Project
        title={project.title}
        image={project.image}
        deployed={project.deployed}
        github={project.github}
        about={project.about}
      />
    ));

    return (
      <Wrapper>
        <div>
          <Container style={{ marginTop: 20 }}>
            <Row>
              <Col size="md-5">
                <h1> Portfolio</h1>
                <h3> Some Examples Of my work</h3>
              </Col>
            </Row>
            <Row>{projectList}</Row>
          </Container>
        </div>
      </Wrapper>
    );
  }
}
export default Portfolio;
