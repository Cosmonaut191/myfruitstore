import React, { Component } from "react";

export default class Dropdowncomp extends Component {
  render() {
    return (
      <div className="row h-40 justify-content-center bg-secondary ">
        <div>
          <label className="h5 m-2 row justify-content-center">Fruit</label>
          <select
            className="mb-3 btn btn-success"
            value={this.props.value}
            onChange={this.props.onChange}
          >
            <option value="Orange">Orange</option>
            <option value="Mango">Mango</option>
            <option value="Papaya">Papaya</option>
            <option value="Banana">Banana</option>
          </select>
        </div>
      </div>
    );
  }
}
