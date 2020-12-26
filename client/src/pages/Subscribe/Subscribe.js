import React from "react";
import { Form, Button } from "react-bootstrap";



class Subscribe extends React.Component {

    
    render() {
        
        return (
            <Form>
                <h2>Subscribe!</h2>
                <br/>
  <Form.Group controlId="firstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="Jane" />
  </Form.Group>

  <Form.Group controlId="lastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Smith" />
  </Form.Group>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control 
    type="email"
    placeholder="coffee@email.com" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        );

    }
    

}


export default Subscribe;