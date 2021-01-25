import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardGroup.css"

// corresponding stylesheet takes 
// care of this now as of 12.30
// const styles = {
//     color: {
//         backgroundColor: "#1E3932",
//         borderColor: "#1E3932"
//     }
// }

function CardGroup() {
    return (
        <>
            <CardDeck md={1} id="coffeeCards">
                <Card>
                    <Link to="/products/coffee/people-16oz">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body className="shorterDescriptionText">
                        <Card.Title><strong>People</strong></Card.Title>
                        <hr/>
                            <Card.Text>
                                Medium Roast - 16 oz <br/>
                                Sustainably sourced in Mexico
                            </Card.Text>
                        <hr/>
                        <Link to="/products/coffee/people-16oz">
                            <Button className="groupCoffeeButtons" size="md">Order Now</Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$13.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Link to="/products/coffee/planet-16oz">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body className="shorterDescriptionText">
                        <Card.Title><strong>Planet</strong></Card.Title>
                        <hr/>
                            <Card.Text>
                                Dark Roast - 16 oz.<br/>
                                Sustainably sourced in Mexico
                            </Card.Text>
                        <hr/>
                        <Link to="/products/coffee/planet-16oz">
                            <Button className="groupCoffeeButtons" variant="success" size="md">
                                Order Now
                        </Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$16.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Link to="/products/coffee/purpose-16oz">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body>
                        <Card.Title><strong>Purpose</strong></Card.Title>
                        <hr/>
                        <Card.Text>
                            Organic Single Origin Medium Roast - 16 oz.<br/>
                                Sustainably sourced in Mexico
                        </Card.Text>
                        <hr/>
                        <Link to="/products/coffee/purpose-16oz">
                            <Button className="groupCoffeeButtons" size="md">
                                Order Now
                        </Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$12.99</strong></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )
}



export default CardGroup;