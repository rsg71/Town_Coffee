import React from "react";

const CartContext = React.createContext({
 item: "",
 quantity: 0
});

export default CartContext;
