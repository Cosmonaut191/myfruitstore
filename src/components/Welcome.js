import React from "react";
import { connect } from "react-redux";
function Welcome(props) {
  return (
    <>
      <div
        className=" container-fluid py-5 bg-info"
        style={{ minHeight: "100vh" }}
      >
        <div className=" row bg-danger m-5  ">
          <h1 className="h1 col-10 col-md-6 mx-auto  m-5 ">
            <strong>Welcome to My Fruit Store</strong>
          </h1>
        </div>
        <div className="row d-block">
          <button
            type="button"
            onClick={() => props.setScreen(2)}
            className=" btn btn-lg px-5 btn-dark mt-5 "
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setScreen: screen => dispatch({ type: "SET_SCREEN", data: screen })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
