import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'

class App extends Component {

  state = {
    username: '',
    surname: '',
    email: '',
    password: '',
    accept: false,
  }

  handleChange = (e) => {

    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "email" || type === "password") {
      this.setState({
        [name]: e.target.value
      })
    } else if (type === "checkbox") {
      this.setState({
        [name]: e.target.checked,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          state={this.state}
          change={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
