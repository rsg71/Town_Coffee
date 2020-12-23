import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function SuccessfulPayment() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Thank you very much for your order!</h1>
                        <br/>
                        <h2>We're excited to have you join our community</h2>
                        <p>If you haven't already joined our mailing list, enter your email below to get updates on new flavors, products, and more</p>
                        <input></input>

                        <br/>
                        <h2>If you would like to continue shopping click here:</h2>
                        <Link to="/">Click here to return to our homepage</Link>
                       

                    </Col>
                </Row>
            </Container>
        </>
    )
}
