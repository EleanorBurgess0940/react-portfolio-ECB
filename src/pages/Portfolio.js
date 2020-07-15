import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
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
      <div>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col size="md-5">
              <h1> Portfolio</h1>
              <h3> Some Examples Of my work</h3>
            </Col>
          </Row>
          {projectList}
        </Container>
      </div>
    );
  }
}
export default Portfolio;
