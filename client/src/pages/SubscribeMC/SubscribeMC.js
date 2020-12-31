import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import Fail from "../../components/FailModal/FailModal";


function SubscribeMC () {
  
  
    const [successModalShow, setSuccessModal] = useState(false);
    const [failModalShow, setFailModal] = useState(false);
    const [email, setEmail] = useState()


    const successOrFail = () => {
      
      if (!email) {
        setFailModal(true)
      } else {
        setSuccessModal(true)
      }
    }

    return (
      <>
        <Container>
          <Row>
            <Col>

              <Form action="/signup" method="POST">
                <h3 className="newsletter"><i className="fas fa-newspaper fa-2x"></i></h3> <h2 className="newsletter">Subscribe!</h2>
                <br />
                <Form.Group controlId="firstName" name="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="Jane" name="firstName" />
                </Form.Group>

                <Form.Group controlId="lastName" name="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Smith" name="lastName" />
                </Form.Group>

                <Form.Group controlId="email" name="email" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="coffee@email.com" onChange={event => setEmail(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => successOrFail()}>
                  Subscribe
  </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        
        <SuccessModal
          show={successModalShow}
          onHide={() => setSuccessModal(false)}
        />
        <Fail 
          show={failModalShow} 
          onHide={() => setFailModal(false)}
        />
          
      </>
    );



  }





export default SubscribeMC;