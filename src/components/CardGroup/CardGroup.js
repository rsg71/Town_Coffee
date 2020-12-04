import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

function CardGroup () {
    return(
        <> 
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
                                <small className="text-muted"><strong>$14.99</strong></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="imgs/mockup_bag1.jpg" />
                                <Card.Body>
                                    <Card.Title>16 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                    Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button>Shop</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><strong>$14.99</strong></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="imgs/mockup_bag1.jpg" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Dark Blend</Card.Title>
                                    <Card.Text>
                                    Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button>Shop</Button>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"><strong>$14.99</strong></small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        </>
    )
}



export default CardGroup;