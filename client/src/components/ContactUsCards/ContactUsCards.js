import React from "react";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import "./ContactUsCards.css"



function ContactUsCards() {
    return (
        <>
            <Row id="contactUsCardsRow">
                <Col sm={4}>
                    <Card>
                        <Card.Body className="contactUsCardBody" >
                            <h2>Phone &amp; Email</h2>
                            <div id="phoneEmail" >
                                <p> <a href="tel:215.696.9338" >(215) 696-9338</a></p>
                                <p><a href="mailto:towncoffeecompany@gmail.com"> towncoffeecompany@gmail.com</a></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body className="contactUsCardBody">
                            <h2>Located At</h2>
                            <div id="contactUsAddress">
                                <p>1300 Bethlehem Pike 2-3</p>
                                <p>Flourtown, Pennsylvania 19031</p>
                                <p>USA</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body className="contactUsCardBody">
                            <h2>Follow us</h2>
                            <ul id="contactUsFollowUs">
                                <li><a href="https://www.instagram.com/towncoffeecompany/" target="_blank"><i className="fab fa-instagram "></i></a></li>
                                <li><a href="https://www.facebook.com/towncoffeecompany" target="_blank"><i className="fab fa-facebook "></i></a></li>
                                <li><a href="https://wwww.twitter.com" target="_blank"><i className="fab fa-twitter "></i></a></li>
                                
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            

        </>
    )
}

export default ContactUsCards;