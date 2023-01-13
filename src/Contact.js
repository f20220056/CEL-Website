import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contacts.css'

function Contact() {
  return (
    <>
    <a id="contact" />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2>CONTACT US</h2>
    <br/>
    <Form className='form-class'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="name"  placeholder='Your Name'/>
      </Form.Group>  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Your E-Mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Message" />
      </Form.Group>
    </Form>
    <br/>
    <center>
    <Button className='button'>SUBMIT</Button>
    </center>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
}

export default Contact;