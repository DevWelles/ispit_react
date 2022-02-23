import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Aplikacija from "./containers/Aplikacija";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/app" element={<Aplikacija />}></Route>
          </Routes>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
