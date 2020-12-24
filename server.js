const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config()

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const Stripe = require('stripe');
const stripe = Stripe(process.env.PRIVATE_KEY);


// app.get("https://api.stripe.com/v1/products", (req, res) => {
//   console.log('this is working')
//   res.send("it's working!!")
// })


app.post('/myroute', (req, res) => {
  console.log('body', req.body)
  console.log('product item:', req.body.cartItems[0].item)
  console.log('product quantity:', req.body.cartItems[0].quantity)
  console.log('product price:', req.body.cartItems[0].price)
  res.send(req.body.cartItems)



  for (var i = 0; i < req.body.cartItems.length; i++) {
    console.log("itemName:", req.body.cartItems[i].item)
  }

})



app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body)


  let lineItemsMap = req.body.cartItems.map(element => (

    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: element.item,
          images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TYt3pDfTyTagH_XDBDlcLAHaFj%26pid%3DApi&f=1'],
        },
        unit_amount: element.price,
      },
      quantity: element.quantity
    }

  ))

  console.log(lineItemsMap)


  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: ['US']
    },
    payment_method_types: ['card'],
    line_items:
      lineItemsMap
    ,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
});






// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
