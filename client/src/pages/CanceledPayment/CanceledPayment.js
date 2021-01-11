import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CanceledPayment.css"

export default function CanceledPayment() {
    return (
        <>
            <Container id="canceledPaymentContainer">
                <Row>
                    <Col id="canceledPaymentCol">
                        <h1>Your payment has been cancelled</h1>
                        <br />
                        <Link to="/coffee">Click here to continue shopping</Link>

                        

                    </Col>
                </Row>
            </Container>

        </>
    )
}