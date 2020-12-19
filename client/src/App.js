import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Coffee from "./pages/Coffee/Coffee";
import Certifications from "./pages/Certifications/Certifications";
import ContactUs from "./pages/ContactUs/ContactUs";
import GivingBack from "./pages/GivingBack/GivingBack";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import Homepage from "./pages/Homepage/Homepage";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"
import IndividualCoffee from "./pages/IndividualCoffee/IndividualCoffee"


import Cart from "./pages/Cart/Cart"
import CartContext from "./utils/CartContext"

import Checkout from "./pages/Checkout/Checkout"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import Footer from "./components/Footer/Footer"



function App() {

  const [cartItems, setCartItems] = useState(
    [{
    item: "12 oz mexican bean",
    quantity: 0,
    price: 0
  }])

  function addToCart(newItem, itemQuantity, itemPrice) {
    setCartItems({
      item: newItem,
      quantity: itemQuantity,
      price: itemPrice
    })
    console.log(cartItems)
  }


  return (
    <>
      <Router>

        <CartContext.Provider value={cartItems}>

          <NavigationBar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/coffee" component={Coffee} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/certifications" component={Certifications} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/givingback" component={GivingBack} />
          <Route exact path="/subscriptions" component={Subscriptions} />

          <Route exact path="/terms_of_use" component={TermsOfUse} />
          <Route exact path="/privacy_policy" component={PrivacyPolicy} />



          <Route exact path="/products-12oz-whole-bean" render={
           (props) => <IndividualCoffee addToCart={addToCart}/>
          }/>



          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />

          <Footer />

        </CartContext.Provider>
      </Router>
    </>

  );
}

export default App;