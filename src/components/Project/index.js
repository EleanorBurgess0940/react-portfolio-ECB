import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h5>{props.title}</h5>
        <p>{props.about}</p>
        <br></br>
        <a
          className="btn github"
          id="github"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          See the Code Here!
        </a>
        <a
          className="btn deployed"
          id="deployed"
          href={props.deployed}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Deployed Link
        </a>
      </div>
    </div>
  );
}

export default Project;
