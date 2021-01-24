import axios from "axios"
import React, { useState, useContext, useEffect } from "react"
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumbsCoffee from "../../components/BreadCrumbsCoffee/BreadCrumbsCoffee";
import CartContext from "../../utils/CartContext"
import "./IndividualCoffee3.css"


function IndividualCoffee({ addToCart }) {
    
    
    const cartItems = useContext(CartContext)
    console.log("cartItems are:", cartItems)
    
    
    
    //also the bagQuantity will set to 0 every time we go to this page; I need to instead set it to the cartcontext value for this particular product
    const [bagQuantity, setBagQuantity] = useState(1)
    const [coffeeItem, setCoffeeItem] = useState("Purpose")
    const [itemPrice, setPrice] = useState(1399)
    const [status, setStatus] = useState("Available")

    // useEffect(() => {
    //    axios.get("/apiCall")
    //    .then(res=> setStatus(res.data.data[2].metadata.Status))
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
                    <Col lg={6} sm={12} style={{marginBottom: "30px"}}>
                        <img src="/imgs/prod_IXeeUDzn45Abgf.jpg" style={{ maxWidth: "100%" }} alt="coffee" />
                    </Col>
                    
                    <Col lg={6} sm={12}>
                        <h2><strong>Purpose, 16 oz.</strong></h2>
                        <h4>${itemPrice/100}</h4>
                        <h6><span className={status==="Available"? "coffeeStatusAvail" : "coffeeStatusUnavail"}>{status}</span></h6>
                        <br/>
                        <p>Good for the planet and good for your body. Get a taste of this medium roast Mexican bean. We're so confident in our coffee that if you aren't fully satisfied, keep the bag and we'll refund your purchase. Yep. It's that good.</p>
                        <br/>
                        
                        <h6># <strong>Quantity</strong></h6>
                        {/* <h5>your quantity is: {bagQuantity} </h5> */}
                        <Form>
                            <Form.Row className="align-items-center">
                                {/* <Col xs="auto" className="my-1">
                                    <Button onClick={() => handleDecrement()}><i className="fas fa-minus"></i></Button>
                                </Col> */}
                                <Col sm={3} style={{marginTop: "10px"}}>
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Name
                                    </Form.Label>
                                    {/* <Form.Control id="inlineFormInputName" name="quantity" value={bagQuantity}/> */}

                                    <InputGroup size="sm" className="quantityFormWidth">
                                        <FormControl className="quantityInputForm"
                                        id="inlineFormInputName" 
                                        variant="outline-dark"
                                        name="quantity" 
                                        value={bagQuantity}
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>

                                        <Button className="addSubtractButtons" variant="outline-dark" onClick={() => handleDecrement()}>
                                            <i className="fas fa-minus"></i>
                                        </Button>

                                        <Button className="addSubtractButtons" variant="outline-dark"onClick={e => handleIncrement()}>
                                        <i className="fas fa-plus"></i>
                                        </Button>

                                        </InputGroup.Append>

                                    </InputGroup>

                                </Col>

                                {/* <Col xs="auto" className="my-1">
                                    <Button onClick={e => handleIncrement()}>
                                        <i className="fas fa-plus"></i></Button>
                                </Col> */}

                                <Col sm={9} xs="auto" className="my-1">

                                {status === "Available"?
                                    <Button className="cartButton individualCoffeeButtons" size="sm" style={{marginTop: "10px"}} onClick={() => addToCart(coffeeItem, bagQuantity, itemPrice)}>Add to Cart</Button> :
                                    <Button className="cartButton individualCoffeeButtons" size="sm" style={{marginTop: "10px"}} disabled style={{cursor: "not-allowed"}}>Add to Cart</Button>}
                                    
                                    <Link to="/cart"><Button className="individualCoffeeButtons" size="sm" style={{marginTop: "10px"}}>View Cart</Button></Link>      

                                </Col>

                            </Form.Row>
                        </Form>
                        <br />
                        {/* <Row>
                            <Col>
                                <Link to="/cart"><Button>View Cart</Button></Link>
                            </Col>
                        </Row> */}
                        <br />

                        <Row>
                            <Col>
                            <label><strong>+ Details</strong></label>
                                    <ul>
                                    <li>Organic single origin blend</li>
                                    </ul>

                                <label><strong>+ Flavor Profile:</strong></label>
                                <ul>
                                    <li>Extra flavor</li>
                                    <li>Medium roast</li>
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