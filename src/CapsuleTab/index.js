import React, { Component } from "react";
import "./styles.css";

class CapsuleTab extends Component {
  state = {
    backgroundColor: "lightblue",
    left: "5px",
  };
  onClickmoon = () => {
    this.setState({
      backgroundColor : "black",
      // right: "60px",
      left: "calc(100% - 60px)"
    });
    console.log(this.setState);
  };
  onClicksun = () => {
    this.setState({
      left : "5px",
      // right : "100%",
      backgroundColor : "lightblue",
    })
  }
  render() {
    return (
      <div className="capsuletabcontainer" style={{
        backgroundColor : this.state.backgroundColor,
        
      }}>

        <div className="button-container">
          <div
            className="circle"
            style={{
              left: this.state.left,
              right: this.state.right,
            }}
          />
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}>
          <i className="far fa-sun" onClick = {this.onClicksun} />
          <i className="fas fa-moon" onClick={this.onClickmoon} />
          </div>
         
        
        </div>
      </div>
    );
  }
}

export default CapsuleTab;
