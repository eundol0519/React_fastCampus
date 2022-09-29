import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    this.handlerClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick() {}

  render() {
    console.log("render");
    return (
      <div>
        {/* this : 내 자신 */}
        <h1 onClick={this.handleClick}>Hello, world</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
