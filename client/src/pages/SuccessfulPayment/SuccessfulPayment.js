import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./SuccessfulPayment.css"

export default function SuccessfulPayment() {
    return (
        <>
            <Container id="successfulPaymentContainer">
                <Row>
                    <Col id="successfulPaymentCol">
                        <h1>We appreciate your business!</h1>
                        <p id="emailConfirmation">(And so does the planet. We are grateful for your support towards a certifed B Corp&reg; and 1% for the Planet member)</p>
                        <br />
                        <Card>
                            <Card.Body>Note: A receipt has been sent to your email</Card.Body>
                        </Card>
                        <br />

                        <p id="thankYouForOrder">Thank you for your order, and if you have any questions please contact us: </p>

                        <p>
                            <a href="mailto:towncoffeecompany@gmail.com"><i className="successContact far fa-envelope"></i></a>
                            <a href="tel:215.696.9338"><i className="successContact fas fa-phone-square"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=12159137231"><i className="successContact fab fa-whatsapp-square"></i></a>
                        </p>


                        <p><strong>Email:</strong> <a href="mailto:towncoffeecompany@gmail.com">towncoffeecompany@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:215.696.9338">215.696.9338</a></p>
                        <p><strong>Whatsapp:</strong> <a href="https://api.whatsapp.com/send?phone=12159137231">Chat with Us</a></p>

                        <br />

                        <p id="SuccessfulPaymentContinueShopping">If you would like to continue shopping click here:</p>
                        <Link to="/"><Button id="successfulPaymentReturnHomepageButton">Return to our homepage</Button></Link>


                    </Col>
                </Row>
            </Container>
        </>
    )
}
