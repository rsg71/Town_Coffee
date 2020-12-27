import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Fail () {
    return (
        <> 
            <Container>
                <Row>
                    <Col>
                    <h1>Failed to Subscribe</h1>
                    
                    <h2> :( </h2>

                    <a href="/subscriptions"><Button>Go Back</Button></a>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Fail;