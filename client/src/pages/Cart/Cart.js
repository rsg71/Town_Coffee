import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../utils/CartContext"
import { Container, Row, Col, Table, Button } from "react-bootstrap";
// calling loadStripe (using their "test" API key - later we will replace this):
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Hvpi3EepCRzNwguls5OnTw70wCoyLoTSIGqq2IEwsXV2tAiYiolvLMCfn2f0ESi18IVa5tP2f676tJ4hrJ8cSXr00IcBrN1E9');


function Cart(props) {
    const cartItems = useContext(CartContext)
    console.log("cart", cartItems)
    console.log("cart total is ", props.cartTotal)
    const cartTotal = props.cartTotal



    const removefromCart = (element) => {
        let copy = [...cartItems];
        //filtering: make a copy of the cart excluding the removed item
        copy = copy.filter(cartItem => cartItem.item !== element.item);
        //still need to adjust this below; instead of console log, I want the new cart to equal the copy
        console.log(copy)
        props.setCartItems(copy)
    }




    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cartItems
            })
        });
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };


    const testClick = () => {
        fetch("/myroute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cartItems
            })
        })
    }


    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col>
                        <h1>Your Cart Items:</h1>
                        <br />
                        <br />
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <button onClick={() => testClick()}>Click to talk to back end</button>
                    </Col>
                </Row>




                {cartItems.length < 1 ?
                    <Row>
                        <Col>
                            <br />
                            <br />
                            <h2>You currently have no items in your cart</h2>
                            <p>Click <Link to="/coffee">here</Link> to continue shopping</p>
                        </Col>
                    </Row>
                    :
                    <>
                        <Row>
                            <Col>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cartItems.map((element, index) => (
                                            <tr key={index}>
                                                <td>{element.item}</td>
                                                <td>${element.price/100}</td>
                                                <td>{element.quantity}</td>
                                                <td>${element.quantity * element.price/100}</td>
                                                <td onClick={() => removefromCart(element)}><Button>Remove</Button></td>
                                            </tr>
                                        ))}

                                        <tr>
                                            <td>Cart Total</td>
                                            <td></td>
                                            <td></td>
                                            <td>$ {cartTotal/100}</td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{ textAlign: "right" }}>
                                <Button role="link" onClick={handleClick}>Proceed to Checkout</Button>
                            </Col>
                        </Row>
                    </>
                }


                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </Container>


        </>

    )
}

export default Cart;

