import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';






export const Contact = () => (
    <div className="contact-page">
      <h2>Contact</h2>
      <Form className="form-center">
        <FormControl type="text" placeholder="Name" className="name" />
        <FormControl type="text" placeholder="Email Address" className="email" />
        <FormControl type="textarea" placeholder="Message" className="message" />
        <button type="submit">Submit</button> 
      </Form>
      <p>Email: info@tadcooper.com</p>
      <p>Phone: 555-555-55555</p>
      <p>Meow meow, I tell my human purr for no reason but to chase after</p>

      </div>
   
  )



  
