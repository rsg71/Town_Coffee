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
            <CardDeck md={1}>
                <Card>
                    <Link to="/products-16oz-Kenyan-bean">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body>
                        <Card.Title><strong>16 oz. Kenyan Blend</strong></Card.Title>
                        <hr/>
                            <Card.Text>
                                Kenyan blend.
                                <br/>
                                Sustainably sourced in Kenya.
                            </Card.Text>
                        <hr/>
                        <Link to="/products-16oz-Kenyan-bean">
                            <Button className="groupCoffeeButtons" size="sm">Order Now</Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$13.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Link to="/products-16oz-mocha-blend">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body>
                        <Card.Title><strong>16 oz. Mocha Blend</strong></Card.Title>
                        <hr/>
                            <Card.Text>
                                Mocha blend.
                                <br/>
                                Sustainably sourced in Mexico.
                            </Card.Text>
                            <hr/>
                        <Link to="/products-16oz-mocha-blend">
                            <Button className="groupCoffeeButtons" variant="success" size="sm">
                                Order Now
                        </Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$16.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Link to="/products-16oz-whole-bean-blend">
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    </Link>
                    <Card.Body>
                        <Card.Title><strong>16 oz. Whole Bean Blend</strong></Card.Title>
                        <hr/>
                        <Card.Text>
                            Whole bean blend.
                            <br/>
                            Sustainably sourced in Mexico.
                        </Card.Text>
                        <hr/>
                        <Link to="/products-16oz-whole-bean-blend">
                            <Button className="groupCoffeeButtons" size="sm">
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