import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import Coffee from "./pages/Coffee/Coffee";
import Certifications from "./pages/Certifications/Certifications";
import ContactUs from "./pages/ContactUs/ContactUs";
import GivingBack from "./pages/GivingBack/GivingBack";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import SubscriptionForm from "./pages/SubscriptionForm/SubscriptionForm";
import Homepage from "./pages/Homepage/Homepage";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"
import IndividualCoffee from "./pages/IndividualCoffee/IndividualCoffee"
import IndividualCoffee2 from "./pages/IndividualCoffee2/IndividualCoffee2"
import IndividualCoffee3 from "./pages/IndividualCoffee3/IndividualCoffee3"


import Cart from "./pages/Cart/Cart";
import CartContext from "./utils/CartContext";

import SuccessfulPayment from "./pages/SuccessfulPayment/SuccessfulPayment";
import CanceledPayment from "./pages/CanceledPayment/CanceledPayment";
import NoMatch from "./pages/NoMatch/NoMatch";


import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";



function App() {

  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  //updating the total anytime the cart is modified
  useEffect(() => {
    total()
  }, [cartItems])

  //calculating the cart total
  function total() {
    let totalVal = 0;
    for (var i = 0; i < cartItems.length; i++) {
      totalVal += cartItems[i].price * cartItems[i].quantity
    }
    setCartTotal(totalVal)
  }

  //add to cart function; if the user adds an item that is already in the cart, update the item quantity
  function addToCart(newItem, itemQuantity, itemPrice) {

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item === newItem) {
        cartItems[i].quantity += itemQuantity;
        total()

        return
      }
    }

    setCartItems([...cartItems, {
      item: newItem,
      quantity: itemQuantity,
      price: itemPrice
    }])


    total()
  }




  return (
    <>
      <Router>
        <ScrollToTop/>
          <CartContext.Provider value={cartItems}>

          <NavigationBar />

          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/coffee" component={Coffee} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/certifications" component={Certifications} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/giving-back" component={GivingBack} />
          <Route exact path="/subscriptions" component={Subscriptions} />

          <Route exact path="/subscriptions/subscription-form" component={SubscriptionForm} />

          <Route exact path="/terms-of-use" component={TermsOfUse} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />

          {/* <Route exact path="/privacy-policy" component={PrivacyPolicy} />

          <Route path="/:id" component={ContactUs}></Route> */}

          <Route exact path="/products/coffee/people-16oz" render={
            (props) => <IndividualCoffee addToCart={addToCart} />
          } />
          <Route exact path="/products/coffee/planet-16oz" render={
            (props) => <IndividualCoffee2 addToCart={addToCart} />
          } />
          <Route exact path="/products/coffee/purpose-16oz" render={
            (props) => <IndividualCoffee3 addToCart={addToCart} />
          } />


          <Route exact path="/cart" render={(props) => <Cart
            setCartItems={setCartItems}
            cartTotal={cartTotal}
          />
          } />


          {/* success and cancel pages */}
          <Route exact path="/success" component={SuccessfulPayment} />
          <Route exact path="/cancel" component={CanceledPayment} />


          {/* 404 page */}
          <Route>
            <NoMatch/>
          </Route>

          </Switch>

          <Footer />

        </CartContext.Provider>
      </Router>
    </>

  );
}

export default App;