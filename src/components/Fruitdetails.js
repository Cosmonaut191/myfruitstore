import React, { Component } from "react";
import Navbar from "./Navbar";
import Link from "./Link";
import { connect } from "react-redux";

class Fruitdetails extends Component {
  render() {
    return (
      <div className="bg-info" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="container bg-success">
          <Link />

          <div className="row justify-content-center pt-5 pb-5">
            <h1>
              <strong> Fruit Details Page</strong>
            </h1>
          </div>
          <div className="row ">
            {this.props.showData.map((fruit, index) => {
              return (
                <div className="col-11 mx-auto col-md-10 col-lg-10 my-1">
                  <div key={index} className="card border-info mb-3">
                    <div className="card-header bg-transparent border-success">
                      <strong>Added By: </strong>{" "}
                      <strong>{fruit.by || "Anonymous"}</strong>
                    </div>
                    <div className="card-body text-dark">
                      <h5 className="card-title">
                        Fruit Name:<strong> {fruit.fruit}</strong>
                      </h5>
                      <p className="card-text lead text-danger">
                        {fruit.description}
                      </p>
                    </div>
                    <div className="card-footer small bg-transparent border-success">
                      {`${fruit.date}`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { showData: state.fruitData };
};

export default connect(
  mapStateToProps,
  null
)(Fruitdetails);
