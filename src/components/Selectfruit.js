import React, { Component } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdowncomp";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Link from "./Link";
import { connect } from "react-redux";

class Selectfruit extends Component {
  state = { fruit: "Orange", description: "", by: "", date: new Date() };

  // data = this.state;

  handleFruit = event => {
    this.setState({ fruit: event.target.value });
  };
  handleDesc = event => {
    this.setState({ description: event.target.value });
  };
  handleBy = event => {
    this.setState({ by: event.target.value });
  };
  handleDate = date => {
    this.setState({ date: date });
  };

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Navbar />

        <div className="container ">
          <Link />

          <div className="row mt-5 " style={{ minHeight: "70vh" }}>
            <div className="col-10 col-md-10 col-lg-4 mx-auto bg-info col-xs-11 ">
              <Dropdown value={this.state.fruit} onChange={this.handleFruit} />

              <div className="row justify-content-center h-60 ">
                <Form onSubmit={this.submitForm}>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                      <h5>Fruit Description </h5>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      value={this.state.description}
                      onChange={this.handleDesc}
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>

            <div className="col-10 col-lg-6 col-md-10 mx-auto col-xs-11   align-items-center bg-primary ">
              <form
                className=" mt-5 pt-5 "
                onSubmit={event => {
                  this.props.addData(event, this.state);
                }}
              >
                <div className="row form-group ">
                  <label className="col col-md-6  ">Selected Fruit</label>
                  <div className="  col col-md-6">
                    <input type="text" value={this.state.fruit} readOnly />
                  </div>
                </div>
                <div className=" row form-group   ">
                  <label className="col col-md-6 ">Added By</label>
                  <div className="  col col-md-6">
                    <input
                      type="text"
                      value={this.state.by}
                      onChange={this.handleBy}
                    />
                  </div>
                </div>
                <div className=" row form-group  ">
                  <label className="col col-md-6 ">Date Added</label>
                  <div className="  col col-md-6">
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.handleDate}
                    />
                  </div>
                </div>

                <div className=" col pt-4 form-group d-block">
                  <button type="submit" className=" btn btn-danger">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addData: (e, data) => dispatch({ type: "ADD_DATA", event: e, data: data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Selectfruit);
