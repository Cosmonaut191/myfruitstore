import React from "react";
import { connect } from "react-redux";

function Link(props) {
  return (
    <>
      <div className="row pt-2 justify-content-around">
        <button type="button" className="btn btn-info" onClick={props.onClick1}>
          Page 1
        </button>
        <button
          type="button"
          disabled={props.disable}
          className="btn btn-info"
          onClick={props.onClick}
        >
          Page 2
        </button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    disable: state.disable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch({ type: "SET_SCREEN", data: 3 }),
    onClick1: () => dispatch({ type: "SET_SCREEN", data: 2 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
