import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import ContactUsCards   from "../../components/ContactUsCards/ContactUsCards"
import "./ContactUs.css";
import MailchimpSub from "../../components/MailchimpSub/MailchimpSub";
require("dotenv").config();

const styles = {
    
    h1: {
        textAlign: "center"
    }
    

}

function ContacUs() {


    const [formState, setFormState] = useState({
        name: "",
        category: "",
        message: ""
    })



    useEffect(() => {
        document.title = "Contact Us | Town Coffee Company"
    }, []);

    return (
        <>


            <CoffeeBanner />


            <Container>
                <br />
                <Row>
                    <Col>
                        <span><Link className="breadcrumbLink" to="/">Home </Link><i className="fas fa-angle-right"></i> <span style={{ fontWeight: "bold" }}> Contact Us</span>
                        </span>
                    </Col>
                </Row>
                <br />

                <h1 style={styles.h1}>Contact Us</h1>
                <br />
                <br />
                <ContactUsCards />
                <br />
            </Container>



            <Container>
                <Row id="emailUsRow">
                    <Col>

                        <Form action="https://formspree.io/f/mdopwono" method="POST">

                            <h2>Email Us</h2>
                            <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Your email:</Form.Label>
                                <Form.Control type="email" name="_replyto" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                                <Form.Label>Topic:</Form.Label>
                                <Form.Control as="select" name="Message category">
                                    <option>Subscriptions</option>
                                    <option>Shipping</option>
                                    <option>New Coffee flavors</option>
                                    <option>Comments/Feedback</option>
                                    <option>General inquiry</option>
                                </Form.Control>
                            </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={4} name="message" required />
                            </Form.Group>
                            <Button id="contactUsSubmitMessageBtn" size="lg" type="submit" onClick={() => setFormState({ name: "", category: "", message: "" })}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>

                    </Col>
                </Row>




            </Container>
            <br />
            <br />
            <br />
            <br />


            <MailchimpSub />
            <br />
            <br />
            <br />
            <br />
            <br />



        </>
    )
}

export default ContacUs;