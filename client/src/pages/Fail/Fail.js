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
                    
                    <h1>Failed to Subscribe</h1>
                    
                    <h2><i className="far fa-sad-tear"></i></h2>

                    <a href="/subscriptions"><Button>Go Back</Button></a>
                    
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