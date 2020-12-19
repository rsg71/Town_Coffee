import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../utils/CartContext"
import { Container, Row, Col, Table, Button } from "react-bootstrap";

// calling loadStripe (using their "test" API key - later we will replace this):



function Cart(props) {

    const cartItems = useContext(CartContext)

    console.log(`cartitems are: ${cartItems.item} and quantity is: ${cartItems.quantity}`)




   


    return (
        <>
            <Container>
                <br />
                <Row>
                    <Col>
                        <h1>Your Cart Items: ({cartItems.quantity})</h1>


                        <p>{cartItems.item}</p>



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
                                    <td>1</td>
                                    <td>Joe</td>
                                    <td>Miller</td>
                                    <td>@bar</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@foo</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>

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

