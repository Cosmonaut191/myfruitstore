import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Welcome from "./components/Welcome";
import Selectfruit from "./components/Selectfruit";
import Fruitdetails from "./components/Fruitdetails";

export default class App extends Component {
  state = {
    fruitData: [
      {
        fruit: "Apple",
        description: "An apple a day keeps the doctor away",
        by: "Sushil",
        date: new Date()
      }
    ],
    disable: true,
    screen: 1
  };

  addData = (event, data) => {
    this.setState({
      fruitData: [...this.state.fruitData, data],
      disable: false
    });
    event.preventDefault();
  };

  setScreen = sx => {
    this.setState({ screen: sx });
  };
  component = id => {
    switch (id) {
      case 1:
        return <Welcome setScreen={this.setScreen} />;

      case 2:
        return (
          <Selectfruit
            addData={this.addData}
            disable={this.state.disable}
            setScreen={this.setScreen}
          />
        );

      case 3:
        return (
          <Fruitdetails
            showData={this.state.fruitData}
            setScreen={this.setScreen}
          />
        );

      default:
        return <div>I have never heard of that fruit...</div>;
    }
  };

  disable = () => {
    this.setState({ disable: false });
  };
  render() {
    return <div className="App">{this.component(this.state.screen)}</div>;
  }
}
