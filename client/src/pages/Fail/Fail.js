import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

function Fail () {
    return (
        <> 
        <br/>
            <br/>
            <Container>
                <Row className="failed">
                    <Col>
                    
                    <h1>Sorry!</h1>
                    <br/>
                    <h2><i className="far fa-sad-tear"></i></h2>
                    <br/>
                    <p>Something went wrong, please go back and make sure all the fields are filled in correctly.</p>
                    <br/>
                    <a href="/contactus"><Button>Go Back</Button></a>
                    
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Fail;