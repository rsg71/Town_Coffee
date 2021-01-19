import axios from "axios"
import React, { useState, useContext, useEffect } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumbsCoffee from "../../components/BreadCrumbsCoffee/BreadCrumbsCoffee";
import CartContext from "../../utils/CartContext"
import "./IndividualCoffee2.css"

function IndividualCoffee2({ addToCart }) {
    
    
    const cartItems = useContext(CartContext)
    console.log("cartItems are:", cartItems)
    
    
    
    //also the bagQuantity will set to 1 every time we go to this page; I need to instead set it to the cartcontext value for this particular product
    const [bagQuantity, setBagQuantity] = useState(1)
    const [coffeeItem, setCoffeeItem] = useState("16 oz Mocha blend")
    const [itemPrice, setPrice] = useState(1699)
    const [status, setStatus] = useState("Sold Out")

    // useEffect(() => {
    //    axios.get("/apiCall")
    //    .then(res=> {

    //     console.log(res)
        
    //     setStatus(res.data.data[1].metadata.Status)})
    //    .catch(err=>console.log(err))
    // }, [])




    const handleIncrement = () => {
        setBagQuantity(bagQuantity + 1)
    }

    const handleDecrement = () => {
        if(bagQuantity >1) {
            setBagQuantity(bagQuantity -1)
        }
    }

    return (
        <>
            <Container>
            <br />
            <BreadCrumbsCoffee name={coffeeItem}/>
                <br />
                <Row>
                    <Col lg={6} sm={12}>
                        <img src="/imgs/prod_IXeeUDzn45Abgf.jpg" style={{ maxWidth: "100%" }} alt="coffee" />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2>Mocha Blend Coffee, 16 oz.</h2>
                        <h3>${itemPrice/100}</h3>
                        <h3> Status: <span className={status==="Available"? "coffeeStatusAvail": "coffeeStatusUnavail"}>{status}</span></h3>
                        <p>Good for the planet and good for your body. Get a taste of this full-bodied Mocha Blend bean. We're so confident in our coffee that if you aren't fully satisfied, keep the bag and we'll refund your purchase. Yep. It's that good.</p>


                        <h4>Quantity:</h4>
                        {/* <h5>your quantity is: {bagQuantity} </h5> */}
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col xs="auto" className="my-1">
                                    <Button onClick={() => handleDecrement()}><i className="fas fa-minus"></i></Button>
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Name
                                </Form.Label>
                                    <Form.Control id="inlineFormInputName" name="quantity" value={bagQuantity}/>
                                </Col>

                                <Col xs="auto" className="my-1">
                                    <Button onClick={e => handleIncrement()}>
                                        <i className="fas fa-plus"></i></Button>
                                </Col>

                                <Col xs="auto" className="my-1">
                                    {status === "Available"?
                                    <Button onClick={() => addToCart(coffeeItem, bagQuantity, itemPrice)} >Add to Cart</Button> :
                                    <Button disabled style={{cursor: "not-allowed"}}>Add to Cart</Button>
                                }

                                    
                                </Col>

                            </Form.Row>
                        </Form>
                        <br />
                        <Row>
                            <Col>
                                <Link to="/cart"><Button>View Cart</Button></Link>
                            </Col>
                        </Row>
                        <br />

                        <Row>
                            <Col>
                                <p>Extra details: this coffee is flat out delicious</p>

                                <label>Flavor Profile:</label>
                                <ul>
                                    <li>Chocolate flavor</li>
                                    <li>Our smoothest roast</li>
                                    <li>17 mg caffeine per cup</li>
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
export default IndividualCoffee2;