import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Wrapper>
          <Project />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
