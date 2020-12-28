import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";


function Success () {
    return (
        <> 
            <Container>
            <br/>
            <br/>
                <Row className="success">
                    <Col>
                    <h2><i className="fas fa-thumbs-up fa-2x"></i></h2>
                    <br/>
                    <h1>Subscribed!</h1>
                    <br/>
                    <h3>You are now signed up for our dope monthly newsletter!</h3>
                    <br/>
                    <Button href="/contactus">Go Back</Button>
                    <br/>
                    <br/>
                    <br/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Success;