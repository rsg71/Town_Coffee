import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../utils/CartContext"
import { Container, Row, Col, Table, Button } from "react-bootstrap";

// calling loadStripe (using their "test" API key - later we will replace this):
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Hvpi3EepCRzNwguls5OnTw70wCoyLoTSIGqq2IEwsXV2tAiYiolvLMCfn2f0ESi18IVa5tP2f676tJ4hrJ8cSXr00IcBrN1E9');


function Cart(props) {
    const cartItems = useContext(CartContext)
    console.log(`cartitems are: ${cartItems.item} and quantity is: ${cartItems.quantity} and price is ${cartItems.price}`)



    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session', { method: 'POST' });

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





    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col>
                        <h1>Your Cart Items: ({cartItems.quantity})</h1>
                        <p>Item: {cartItems.item}</p>
                        <p>Price: {cartItems.price}</p>

                        <Table >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                {/* {cartItems.map(element => (
                                    <tr>
                                        <td>{element.item}</td>
                                        <td>{element.quantity}</td>
                                        <td>{element.price}</td>
                                    </tr>
                                ))} */}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Subtotal</td>
                                    <td>$ { }</td>
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

