import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


function IndividualCoffee({ addToCart }) {

    const [bagQuantity, setBagQuantity] = useState(0)
    const [coffeeItem, setCoffeeItem] = useState("Full Bodied Bean from Mexico")




    return (
        <>
            <Container>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col lg={6} sm={12}>
                        <img src="/imgs/prod_IXeeUDzn45Abgf.jpg" style={{ maxWidth: "100%" }} alt="coffee" />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2>Dark Roast Ground Coffee, 12 oz.</h2>
                        <h3>$12.99</h3>
                        <p>Good for the planet and good for your body. Get a taste of this full-bodied Mexican bean. We're so confident in our coffee that if you aren't fully satisfied, keep the bag and we'll refund your purchase. Yep. It's that good.</p>


                        <h4>Quantity:</h4>
                        <h5>your quantity is: {bagQuantity} </h5>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Name
                                </Form.Label>
                                    <Form.Control id="inlineFormInputName" name="quantity" value={bagQuantity} />
                                </Col>


                                <Col xs="auto" className="my-1">
                                    <Button onClick={() => setBagQuantity(bagQuantity + 1)}>


                                        <i className="fas fa-plus"></i></Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button onClick={() => setBagQuantity(bagQuantity - 1)}><i className="fas fa-minus"></i></Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button onClick={() => addToCart(coffeeItem, bagQuantity)}>Add to Cart</Button>
                                </Col>


                                <Row>
                                    <Col>
                                        <Link to="/cart"> Checkout</Link>
                                    </Col>
                                </Row>

                            </Form.Row>
                        </Form>
                        <br />
                        <Row>
                            <Col>
                                <p>Extra details: this coffee is a full-bodied blend</p>

                                <label>Flavor Profile:</label>
                                <ul>
                                    <li>Extra flavor</li>
                                    <li>Our boldest, darkest roast</li>
                                    <li>20 mg caffeine per cup</li>
                                </ul>
                            </Col>
                        </Row>

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
export default IndividualCoffee;