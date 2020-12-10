import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Form, Jumbotron } from "react-bootstrap";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import ContactUsColumns from "../../components/ContactUsColumns/ContactUsColumns"

const styles = {
    listStyle: {
        listStyleType: "none",

    },
    colStyle: {
        backgroundColor: "#1E3932",
        color: "white",
        marginRight: 10,
        marginLeft: 10,
        padding:"20px",
        marginBottom: "5px",
    },
    bottomRow: {
        marginTop: "4em",
        marginBottom: "15em"
    },
    h1: {
        textAlign: "center"
    },
    contactUsParagraphLineHeight: {
        lineHeight: "1rem"
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


            <CoffeeBanner/>


            <Container>
                <br />
                <h1 style={styles.h1}>Contact Us</h1>
                <br />
                <br />
                <ContactUsColumns/> 
                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <Form  action="https://formspree.io/f/mdopwono" method="POST">
                            <h2>Email Us</h2>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your email:</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="_replyto" required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Your question pertains to:</Form.Label>
                                <Form.Control as="select" name="Message category">
                                    <option>Subscriptions</option>
                                    <option>Shipping</option>
                                    <option>New Coffee flavors</option>
                                    <option>Comments/Feedback</option>
                                    <option>General inquiry</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" required/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={()=> setFormState({name: "", category: "", message: ""})}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        
                    </Col>
                </Row>



                <Row style={styles.bottomRow}>
                    <Col>
                        <h2>Get on the list!</h2>
                        <p>Join our mailing list for special product announcements, news and offers</p>
                    </Col>
                    <Col>
                        <h4>Join our mailing list for new deals, exclusive offers, and more:</h4>
                        <Form inline>
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="Email address" />
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ContacUs;