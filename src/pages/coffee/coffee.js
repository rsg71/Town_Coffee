import React from "react";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import "./coffee.css";

function Coffee() {
    return (
        <>
            <img src="/imgs/coffee_white.jpg" className="coffeeJumbotron" />

            <Container>
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                        Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$12.99</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>16 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$14.99</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Dark Blend</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$13.99</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

                <br />
                <br />
                <br />
                <br />
            </Container>
        </>
    )
}

export default Coffee;