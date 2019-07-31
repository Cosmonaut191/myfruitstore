import React from "react";

export default function Link(props) {
  return (
    <>
      <div className="row pt-2 justify-content-around">
        <button type="button" className="btn btn-info" onClick={props.onClick1}>
          Page 1
        </button>
        <button
          type="button"
          disabled={props.disabled}
          className="btn btn-info"
          onClick={props.onClick}
        >
          Page 2
        </button>
      </div>
    </>
  );
}
