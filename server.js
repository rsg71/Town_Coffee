const express = require("express");
const path = require("path");
const request = require('request');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Hvpi3EepCRzNwguGDTCpqfrjNSKJGguBee2FLE5khNxaQSkJ8QSAoNUUFGBnC7eWoZTYBp5ustqEAqMXyEZKD3P00ZMPotyts');

//Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Signup Route
app.post('/signup', (req, res) => {
const { firstName, lastName, email} = req.body

// Make sure fields are filled out
if(!firstName || lastName || !email) {
  res.redirect('/fail')
}
});


app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body)
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US']
    },
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Coffee',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 1299,
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});



// set up a path for a successful payment:
// app.get("/success", (req, res) => {
  
// })


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
