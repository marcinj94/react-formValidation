import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form'
import ErrorMessages from './ErrorMessages/ErrorMessages';
import SendMessage from './SendMessage/SendMessage';

class App extends Component {

  state = {
    username: '',
    surname: '',
    email: '',
    password: '',
    accept: false,
    message: '',
    errors: {
      username: false,
      surname: false,
      email: false,
      password: false,
      accept: false,
    }
  }

  errorMessages = {
    wrongUsername: "Name need 8 characters minimum (without space).",
    wrongSurname: "Surname should countaint between 8 and 20 characters (without space).",
    wrongEmail: "E-mail is invalid! example: [xy@zxyz.com].",
    wrongPassword: "Password should containt 8 characters minumum.",
    wrongAccept: "You need to accept exclusive offers."


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

  formValidation = () => {
    let username = false;
    let surname = false;
    let email = false;
    let password = false;
    let accept = false;
    let allCorrect = false;

    //validation username --> 8 characters minumum(without space)
    if (this.state.username.length >= 8 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }

    //validation surname --> between 8 and 20 characters (without space)
    if (this.state.surname.length >= 8 && this.state.surname.length <= 20 && this.state.surname.indexOf(' ') === -1) {
      surname = true;
    }

    //validation email --> @ in input
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    //validation password --> minimum 8 characters
    if (this.state.password.length >= 8) {
      password = true;
    }

    //validation accept checkbox
    if (this.state.accept) {
      accept = true;
    }

    if (username && surname && email && password && accept) {
      allCorrect = true;
    }

    return ({
      username,
      surname,
      email,
      password,
      accept,
      allCorrect
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    console.log(validation);

    if (validation.allCorrect) {
      this.setState({
        username: '',
        surname: '',
        email: '',
        password: '',
        accept: false,
        message: 'Registration complete!',
        errors: {
          username: false,
          surname: false,
          email: false,
          password: false,
          accept: false,
        }
      });
      console.log('send');
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          surname: !validation.surname,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        }
      })
    }
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => (
        this.setState({
          message: '',
        })
      ), 2000)
    }
  }

  render() {
    return (
      <div className="App">

        <ErrorMessages
          errors={this.state.errors}
          errorMessages={this.errorMessages}
        />

        <Form
          state={this.state}
          change={this.handleChange}
          submit={this.handleSubmit}
        />

        <SendMessage
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
