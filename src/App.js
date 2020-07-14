import React, { Component } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
