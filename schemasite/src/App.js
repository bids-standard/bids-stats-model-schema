import React, { Component } from 'react';
import './App.css';
let Ajv = require('ajv');
let schema = require('./schema.json');

class Valid extends Component {
  render() {
    let display = [];
    this.props.valid.map((x, i) => {
      display.push(<li key={i}><pre>{JSON.stringify(x, null, 2)}</pre></li>);
      return x;
    });
    return (
      <div><ul>{display}</ul></div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test',
      schema: schema,
      valid: ["Invalid"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let newVal = e.target.value;
    this.setState({value: newVal});
    e.preventDefault();
    try {
      newVal = JSON.parse(newVal);
    } catch(e) {
       console.log(e); 
    }

    let ajv = new Ajv();
    let validate = ajv.compile(this.state.schema);
    //Validation Rule
    let valid = validate(newVal);
    if (valid) {
        valid = ['Valid!'];
    } else {
        console.log(validate.errors);
        valid = validate.errors;
    }
    this.setState({valid: valid});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>BIDS Schema Validator</h1>
        </div>
        <div className="body">
          <div className="left">
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="right">
            <Valid valid={this.state.valid}/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
