import React, { Component } from 'react';
import './App.css';
let Ajv = require('ajv');
let schema = require('./schema.json');

class Valid extends Component {
  render() {
    return (
      <div>{'' + this.props.valid}</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test',
      schema: schema,
      valid: "Invalid"
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
        valid = 'Valid!';
    } else {
        valid = 'Invalid: ' + ajv.errorsText(validate.errors);
    }
    this.setState({valid: valid});
  }

  render() {
    return (
      <div className="App">
          <div>
            <marquee>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
            />
            </marquee>
            <Valid valid={this.state.valid}/>
          </div>
      </div>
    );
  }
}

export default App;
