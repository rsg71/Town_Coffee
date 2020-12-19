import React, { useState, useEffect } from "react"

const items = [
    {
        sku: "prod_IXeiALl2FRoYzR",
        quantity: 1,
        price: 1399,
        name: "16 oz. Kenyan Blend"
    },
    {
        sku: "prod_IXehVhIG5081sK",
        quantity: 1,
        price: 1699,
        name: "16 oz. Mocha Blend"
    },
    {
        sku: "prod_IXeeUDzn45Abgf",
        quantity: 1,
        price: 1299,
        name: "16 oz. Whole Bean Blend"
    },

]

function formatPrice(price) {
    return `$${(price * 0.01).toFixed(2)}`
}


function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}


const stripeToken = 'pk_test_yNFG8EE1RMXpBQmCyWRlGOx400CddyVwyS'



function Cart({ stripeToken }) {
const [stripe, setStripe] = useState(null)


    useEffect(() => {
        if(window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])


    function checkout() {
        stripe.redirectToCheckout({
            items: items.map(item => ({
                quantity: item.quantity,
                sku: item.sku
            })),
            successUrl: "https://your-website.com/success",
            cancelUrl: "https://your-website.com/canceled"
        })
    }


    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td> <img src={`/imgs/${item.sku}.jpg`} alt={item.name} width={50}/></td>
                                <td>{item.quantity}</td>
                                <td>{formatPrice(item.price)}</td>
                                
                            </tr>)}

                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td></td>
                                <td>{formatPrice(totalPrice(items))}</td>
                            </tr>

                            <tr>
                                <td>
                                    <button onClick={checkout}>Checkout now with Stripe</button>
                                </td>
                            </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cart;