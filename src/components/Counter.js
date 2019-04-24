import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonSubs from "./ButtonSubs";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    if (this.state.counter > 0)
      this.setState({
        counter: this.state.counter - 1
      });
  };

  render() {
    return (
      <div>
        <div onClick={this.increment}>
          <ButtonAdd />
        </div>
        <h1>{this.state.counter}</h1>
        <div onClick={this.decrement}>
          <ButtonSubs />
        </div>
      </div>
    );
  }
}
export default Counter;
