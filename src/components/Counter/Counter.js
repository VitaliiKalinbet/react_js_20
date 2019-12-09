/* eslint-disable */
import React, { Component } from 'react';
import Controls from '../Controls/Controls';

class Counter extends Component {
  // Под капотом работает так
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };

  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  // handleIncrement() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  // handleDecrement() {
  //   this.setState({ value: this.state.value - 1 });
  // }

  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(
      prevState => ({ value: prevState.value + 1 }),
      () => {
        console.log(this.state.value);
      },
    );
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const buttonDecrementDisable = false;
    return (
      <>
        {/* <button onClick={this.handleDecrement} type="button">
          -
        </button>
        <span style={{ padding: 10 }}>{this.state.value}</span>
        <button onClick={this.handleIncrement} type="button">
          +
        </button> */}

        <span style={{ padding: 10 }}>{this.state.value}</span>
        <hr />
        <Controls
          buttonDecrementDisable={buttonDecrementDisable}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </>
    );
  }
}

export default Counter;
