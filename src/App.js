import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Welcome from "./components/Welcome";
import Selectfruit from "./components/Selectfruit";
import Fruitdetails from "./components/Fruitdetails";
import { connect } from "react-redux";

class App extends Component {
  component = id => {
    switch (id) {
      case 1:
        return <Welcome />;

      case 2:
        return <Selectfruit />;

      case 3:
        return <Fruitdetails />;

      default:
        return <div>I have never heard of that fruit...</div>;
    }
  };

  // disable = () => {
  //   this.setState({ disable: false });
  // };
  render() {
    return <div className="App">{this.component(this.props.screen)}</div>;
  }
}

const mapStateToProps = state => {
  return { screen: state.screen };
};

export default connect(
  mapStateToProps,
  null
)(App);

// state = {
//   fruitData: [
//     {
//       fruit: "Apple",
//       description: "An apple a day keeps the doctor away",
//       by: "Sushil",
//       date: new Date()
//     }
//   ],
//   disable: true,
//   screen: 1
// };

// addData = (event, data) => {
//   this.setState({
//     fruitData: [...this.state.fruitData, data],
//     disable: false
//   });
//   event.preventDefault();
// };

// setScreen = sx => {
//   this.setState({ screen: sx });
// };

//        return <Welcome setScreen={this.setScreen} />;
// <SelectfruitaddData={this.addData}/>
//
