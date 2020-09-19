
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import * as emailjs from 'emailjs-com';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      apiUrl: 'https://api.emailjs.com/api/v1.0/email/send-form',
      apiAction: "post"
    };

  }

  

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e, {resetForm}) => {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
   
     
        //access the results here....
      });
      resetForm({})
  }

  render() {
    const { fname, lname, email, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={fname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={lname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={this.onChange}
        />
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          value={message}
          onChange={this.onChange}
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    );
  }
}