import React, { useContext } from "react"
import CartContext from "../../utils/CartContext"



function Cart(props) {

    const cartItems = useContext(CartContext)


    return (
        <>
        <h1>Your Cart Items:</h1>


        <p>{cartItems.item}</p>
        
        <h1>Quantity:</h1>
        <p>{cartItems.quantity}</p>

        </>
        
    )
}

export default Cart;

