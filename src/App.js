import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeysComponent from "./components/KeysComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    let checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>React Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeysComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;