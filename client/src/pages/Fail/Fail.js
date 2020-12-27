import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Fail () {
    return (
        <> 
            <Container>
                <Row>
                    <Col>
                    <h1>Failed to Subscribe</h1>
                    
                    <h2> :( </h2>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Fail;