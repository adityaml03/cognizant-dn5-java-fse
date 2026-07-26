import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      amount: "",
      currency: ""
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = (msg) => {
    alert("Hello! " + msg);
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello("Static Message");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = parseFloat(this.state.amount);
    const rupees = euro * 90;

    alert(`${euro} Euro = ₹${rupees}`);
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleClick}>
          Click Me
        </button>

        <hr />

        <h2 style={{ color: "green" }}>
          Currency Converter!!!!
        </h2>

        <form onSubmit={this.handleSubmit}>

          <div>
            Amount
          </div>

          <input
            type="number"
            value={this.state.amount}
            onChange={(e) =>
              this.setState({
                amount: e.target.value
              })
            }
          />

          <br /><br />

          <div>
            Currency
          </div>

          <input
            type="text"
            value={this.state.currency}
            onChange={(e) =>
              this.setState({
                currency: e.target.value
              })
            }
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default App;