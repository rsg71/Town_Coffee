import React, { Component, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe"
// import { render } from "react-dom";
import "./MailchimpSub.css";
require("dotenv").config();



const MailchimpForm = ({ status, message, onValidated }) => {


    let email;


    const submit = () =>
    
        email &&

        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        }
        );

    //**!! Need to add keypress ENTER to submit !!**// 
    return (

        <Container>

            <Form.Label>Email</Form.Label>

            <Form.Group>
                {status === "sending" &&

                    <div style={{ color: "blue" }}>sending...</div>}


                {status === "error" && (
                    <div
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}

                {status === "success" && (
                    <div
                        style={{ color: "green" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}

                <br />

                <Form.Control
                    ref={node => (email = node)}
                    type="email"
                    placeholder="coffee@email.com"

                />

                    <br />

                    <Button variant="primary" onClick={submit}>

                        Subscribe

                </Button>

                

            </Form.Group>

        </Container>

    );
};

class MailchimpSub extends Component {

    render() {

        const url = process.env.REACT_APP_MAILCHIMP_URL;

        return (
            <>
                <Form>

                    <h3 className="newsletter"><i className="fas fa-newspaper fa-2x"></i></h3>
                    <h2 className="newsletter">Subscribe!</h2>
                    <br />
                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <MailchimpForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}
                    />
                </Form>

            </>
        );
    }
}

export default MailchimpSub;