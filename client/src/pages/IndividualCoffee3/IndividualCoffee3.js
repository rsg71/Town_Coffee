import axios from "axios"
import React, { useState, useContext, useEffect } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumbsCoffee from "../../components/BreadCrumbsCoffee/BreadCrumbsCoffee";
import CartContext from "../../utils/CartContext"
import "./IndividualCoffee3.css"


function IndividualCoffee({ addToCart }) {
    
    
    const cartItems = useContext(CartContext)
    console.log("cartItems are:", cartItems)
    
    
    //need to find a way to not set price on client side
    //also the bagQuantity will set to 0 every time we go to this page; I need to instead set it to the cartcontext value for this particular product
    const [bagQuantity, setBagQuantity] = useState(1)
    const [coffeeItem, setCoffeeItem] = useState("16 oz Whole Bean blend")
    const [itemPrice, setPrice] = useState(1399)
    const [status, setStatus] = useState("")

    useEffect(() => {
       axios.get("/apiCall")
       .then(res=> setStatus(res.data.data[2].metadata.Status))
       .catch(err=>console.log(err))
    }, [])




    const handleIncrement = () => {
        setBagQuantity(bagQuantity + 1)
    }

    const handleDecrement = () => {
        if(bagQuantity >0) {
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
                        <h2>Whole Bean Blend Coffee, 16 oz.</h2>
                        <h3>${itemPrice/100}</h3>
                        <h3> Status: <span className={status==="Available"? "coffeeStatusAvail": "coffeeStatusUnavail"}>{status}</span></h3>
                        <p>Good for the planet and good for your body. Get a taste of this full-bodied Mexican whole blend bean. We're so confident in our coffee that if you aren't fully satisfied, keep the bag and we'll refund your purchase. Yep. It's that good.</p>


                        <h4>Quantity:</h4>
                        <h5>your quantity is: {bagQuantity} </h5>
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
                                    <Button onClick={() => addToCart(coffeeItem, bagQuantity, itemPrice)}>Add to Cart</Button> :
                                    <Button disabled>Add to Cart</Button>}
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
                                <p>Extra details: this coffee is a full-bodied, subtle blend</p>

                                <label>Flavor Profile:</label>
                                <ul>
                                    <li>Extra flavor</li>
                                    <li>A very medium roast</li>
                                    <li>15 mg caffeine per cup</li>
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