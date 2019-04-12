import React, { Component } from "react";
import "./styles.css";

class IncrementDecrement extends Component {
  state = {
    value: 0,
    color: "white"
  };
  onClickIncrement = () => {
    // this.state.value++ // value s geetting updated but not updating the view
    // we need a mechanism to update the state so that view gets rerendered

    // setState is used to update the state and rerender the component
    this.setState({
      value: this.state.value + 1,
      color: "blue"
    });
    console.log(this.state.value);
  };

  onClickDecrement = () => {
    this.setState({
      value: this.state.value - 1,
      color: "red"
    });
    console.log(this.state.value);
  };
  componentDidMount() {
    console.log("I am now mounted");
  }
  componentDidUpdate() {
    console.log("I am updated");
  }
  render() {
    return (
      <div className="incdeccontaner">
        <div className="box">{this.state.value}</div>
        <div className="btn-container">
          <button onClick={this.onClickIncrement} className="inc">
            Increment
          </button>
          <button onClick={this.onClickDecrement} className="dec">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default IncrementDecrement;
