// Unused Page -> Keeping for the potential of using modals.

import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import Fail from "../../components/FailModal/FailModal";
import MailchimpSubscribe from "react-mailchimp-subscribe"
require("dotenv").config();


function SubscribeMC() {


  const [successModalShow, setSuccessModal] = useState(false);
  const [failModalShow, setFailModal] = useState(false);
  const [email, setEmail] = useState()


  const successOrFail = () => {

    if (!email) {
      setFailModal(true);

    } else {

      setSuccessModal(true)
    }

  }

  return (
    <>
      <Container>
        <Row>
          <Col>

            <Form >
              <h3 className="newsletter"><i className="fas fa-newspaper fa-2x"></i></h3> <h2 className="newsletter">Subscribe!</h2>
              <br />

              <Form.Group controlId="email" name="email" >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="coffee@email.com" onChange={event => setEmail(event.target.value)} />
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

// Footer Copy of mailchimp //

{/* <InputGroup inline action="/signup" method="POST" className="mb-2 mailingListFormWidth" style={{ marginTop: "25px" }} >
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <FormControl
                                className="mb-2 formBackground"
                                size="sm"
                                id="inlineFormInputName2"
                                placeholder="Email Address"
                                name="email" 
                                type="email"
                                
                                />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit" className="mb-2" id="mailingListSubmitButton" size="sm" onClick={() => successOrFail()}>Submit</Button>
                            </InputGroup.Append>
                        </InputGroup> */}

// Previously on server page for Mailchimp //

// ---- MailChimp ---- //

// Bodyparser Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// Signup Route
// app.post('/signup', (req, res) => {
//   const { firstName, lastName, email } = req.body
  
//   // Make sure fields are filled out
//   if (!email) {
//     console.log('fail');
//     return;
//   }

  
//   // constuct req data
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: 'subscribed',
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName
          
//         }
//       }
//     ]
//   }

//   const postData = JSON.stringify(data)

//   const options = {
//     url: 'https://us7.api.mailchimp.com/3.0/lists/' + process.env.MAILCHIMP_LISTS,
//     method: 'POST',
//     headers: {
//       Authorization: 'auth ' + process.env.MAILCHIMP_KEY
//     },
//     body: postData
//   }

//   request(options, (err, response, body) => {
//     if (err) {
//       console.log("Fail");

//     } else {
//       if (response.statusCode === 200) {
//         console.log("Success")
//       } else {
//         console.log("Fail");
//       }
//     }
//   })
// });

// ----  End of MailChimp ---- //