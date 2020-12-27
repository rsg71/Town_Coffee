import React from "react";
import { Form, Button } from "react-bootstrap";



class Subscribe extends React.Component {

    
    render() {
        
        return (
            <Form action="/signup" method="POST">
                <h2>Subscribe!</h2>
                <br/>
  <Form.Group controlId="firstName" name="firstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="Jane" name="email"/>
  </Form.Group>

  <Form.Group controlId="lastName" name="lastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Smith" name="email"/>
  </Form.Group>

  <Form.Group controlId="email" name="email" >
    <Form.Label>Email</Form.Label>
    <Form.Control 
    type="email"
    name="email"
    placeholder="coffee@email.com" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Form>
        );

    }
    

}


export default Subscribe;