import React, { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap";


function blahCoffee() {

    const [quantity, setQuantity] = useState(0)





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
                        <h5>your quantity is: {quantity}</h5>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Name
                                </Form.Label>
                                    <Form.Control id="inlineFormInputName" name="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value, console.log(quantity))}/>
                                </Col>


                                <Col xs="auto" className="my-1">
                                    <Button onClick={() =>
                                        setQuantity(
                                            quantity+ 1)

                                    }><i className="fas fa-plus"></i></Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button onClick={() => setQuantity(quantity - 1)}><i className="fas fa-minus"></i></Button>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button>Add to Cart</Button>
                                </Col>

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
export default blahCoffee;