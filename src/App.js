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
import Cart from "./components/Cart/Cart"
import SomeProduct from "./pages/SomeProduct/SomeProduct"
import IndividualCoffee from "./pages/IndividualCoffee/IndividualCoffee"


import SecondCart from "./pages/SecondCart/SecondCart"
import CartContext from "./utils/CartContext"



import NavigationBar from "./components/NavigationBar/NavigationBar"
import Footer from "./components/Footer/Footer"


function App() {

  const [cartItems, setCartItems] = useState({
    item: "",
    quantity: 0
  })


  function addToCart() {
    setCartItems({
      item: "coffee 12 oz",
      quantity: 1
    })
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


          <Route exact path="/products-12oz-whole-bean" component={IndividualCoffee} addToCart={addToCart} />


          <Route exact path="/secondcart" component={SecondCart} />


          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={SomeProduct} />
          <Footer />

        </CartContext.Provider>
      </Router>
    </>

  );
}

export default App;