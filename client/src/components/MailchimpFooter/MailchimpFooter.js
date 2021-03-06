import React, { Component, useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe"
// import { render } from "react-dom";
import "../Footer/Footer.css"
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
        const clearForm = () => {
            email.value = ""
        }
    
    //**!! Need to add keypress ENTER to submit !!**// 
    return (

        <Container>

            <InputGroup className="mb-2 mailingListFormWidth" style={{ marginTop: "25px" }} onClick={e => {e.preventDefault(); submit(e); clearForm(e); }}>
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

                <Form.Control
                    ref={node => (email = node)}
                    className="mb-2 formBackground"
                                size="sm"
                                id="inlineFormInputName2"
                                placeholder="Email Address"
                                name="email" 
                                type="email"

                />
                    <InputGroup.Append>
                    <Button variant="outline-secondary" className="mb-2" id="mailingListSubmitButton" size="sm" type="submit" >

                        Submit

                </Button>
                </InputGroup.Append>

                

            </InputGroup>

        </Container>

    );
};

class MailchimpFooter extends Component {

    render() {

        const url = process.env.REACT_APP_MAILCHIMP_URL;

        return (
            <>
                <Form>

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

export default MailchimpFooter;