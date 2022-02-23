import React, { Component } from "react";
import { connect } from "react-redux";
import {
  dohvatiUsera,
  promijeniInputLogina,
  dohvatiRepo,
  reset,
} from "../redux/actions";
import Github from "../components/Github";

import { Row, Col } from "react-bootstrap";

class Aplikacija extends Component {
  handleChange(event) {
    this.props.promijeniInputLogina({ payload: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dohvatiUsera(this.props.inputLogina);
    this.props.dohvatiRepo(this.props.inputLogina);
  }

  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col md={6} className="my-3">
            <form
              className="row justify-content-center"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <div className="row mb-4 text-center">
                <input
                  type="text"
                  placeholder="Unesite ime Github Usera:"
                  className="form-control text-center"
                  value={this.props.inputLogina}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <input
                type="submit"
                className="btn btn-dark btn-lg btn-block"
                value="Pretraži"
              />
            </form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3} className="my-3 text-center">
            <Github
              user={this.props.user}
              repos={this.props.repos}
              dohvatiRepo={(id) => this.props.dohvatiRepo(id)}
              reset={this.props.reset}
            />
          </Col>
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    inputLogina: state.inputLogina,
    repos: state.repos,
  };
}

const mapDispatchToProps = {
  dohvatiUsera,
  promijeniInputLogina,
  dohvatiRepo,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Aplikacija);
