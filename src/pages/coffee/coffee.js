import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import "./coffee.css";


const styles = {
    buttonStyle: {
        position: "absolute",
        textAlign: "center"
    }
}

function Coffee() {
    return (
        <>
            <img src="/imgs/coffee_white.jpg" className="coffeeJumbotron" alt="coffee background"/>

            <Container>
                <br />

                <Row>
                    <Col>
                      <h5>Home &gt; Coffee</h5>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="imgs/mockup_bag1.jpg" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                        Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button>Shop</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$12.99</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="imgs/mockup_bag1.jpg" />
                                <Card.Body>
                                    <Card.Title>16 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                    <Button>Shop</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$14.99</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="imgs/mockup_bag1.jpg" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Dark Blend</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Button>Shop</Button>
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