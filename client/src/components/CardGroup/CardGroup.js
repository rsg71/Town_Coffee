import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardGroup.css"


const styles = {
    color: {
        backgroundColor: "#1E3932",
        borderColor: "#1E3932"
    }
}

function CardGroup() {
    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    <Card.Body>
                        <Card.Title>16 oz. Kenyan Blend</Card.Title>
                        <Card.Text>
                            Kenyan blend sourced sustainably in Kenya
                                    </Card.Text>
                        <Button className="groupCoffeeButtons">
                        
                        <Link to="/products-16oz-whole-bean">Shop Now</Link>
                            
                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$13.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    <Card.Body>
                        <Card.Title>16 oz. Mocha Blend</Card.Title>
                        <Card.Text>
                           Mocha blend sourced sustainably in Mexico
                                    </Card.Text>
                        <Button className="groupCoffeeButtons" variant="success">

                            <Link to="/products-16oz-mocha-blend">Shop Now</Link>

                        </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><strong>$16.99</strong></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                    <Card.Body>
                        <Card.Title>16 oz. Whole Bean Blend</Card.Title>
                        <Card.Text>
                            Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                        <Button className="groupCoffeeButtons" style={styles.color}>
                            
                        <Link to="/products-16oz-whole-bean-blend">Shop Now</Link>
                            
                        </Button>
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